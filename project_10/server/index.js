const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const { initDb } = require('./models/index');

const port = 8080;

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);
const commentsRouter = require('./routes/Comments');
app.use("/comments", commentsRouter);
const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);

initDb().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
