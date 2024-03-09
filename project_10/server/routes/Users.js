require('dotenv').config();

const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const { validateToken } = require('../middlewares/AuthMiddleware');
const {AuthorizationCode} = require("simple-oauth2");
const {sign} = require('jsonwebtoken');

const oauth2ConfigGoogle = {
    client: {
        id: process.env.CLIENT_ID_GOOGLE,
        secret: process.env.CLIENT_SECRET_GOOGLE,
    },
    auth: {
        tokenHost: 'https://accounts.google.com',
        tokenPath: '/o/oauth2/token',
        authorizePath: '/o/oauth2/auth',
    },
};

const oauth2ClientGoogle = new AuthorizationCode(oauth2ConfigGoogle);

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        });
        res.json("User Created.");
    });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username }});

    if( !user ) res.json({error: "User Doesn't Exist!"});
    else {
        bcrypt.compare(password, user.password).then((match) => {
            if( !match ) res.json({error: "Wrong Password!"});
            else {
                const accessToken = sign( {username: user.username, id: user.id}, process.env.JWT_SECRET_KEY );
                res.json({ token: accessToken, username: username, id: user.id });
            }
        });
    }
});

router.get('/login/google', (req, res) => {
    const authorizationUri = oauth2ClientGoogle.authorizeURL({
        redirect_uri: 'http://localhost:3001/auth/login/google/callback',
        scope: 'profile',
    });

    res.redirect(authorizationUri);
});

router.get('/login/google/callback', async (req, res) => {
    const {code} = req.query;
    const options = {
        code,
    };

    try {
        const accessToken = await oauth2ClientGoogle.getToken(options);
        const user = await axios.get(
            `https://www.googleapis.com/oauth2/v2/userinfo`,
            {
                headers: {
                    Authorization: 'Bearer ' + accessToken.token.access_token
                }
            }
        )
        .then((res) => res.data)
        .catch((error) => {
            console.error(`Failed to fetch user`);
            throw new Error(error.message);
        });

        const token = sign( {username: user.username, id: user.id}, process.env.JWT_SECRET_KEY );

        res.cookie('token', token);
        return res.redirect('http://localhost:3000')
    } catch (error) {
        console.error('Access Token Error', error.message);
        return res.status(500).json('Authentication failed');
    }
});

router.get('/check-token', validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;
