import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [openMessage, setOpenMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showInput, setShowInput] = useState(true);
    const [userMessages, setUserMessages] = useState([]);
    const [botResponses, setResponses] = useState([]);
    const [showFinalMessage, setShowFinalMessage] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8081/opening')
            .then((response) => {
                const data = response.data;
                setOpenMessage(data.message);
            })
            .catch((error) => {
                console.error('Error downloading opening message:', error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUserMessage = inputValue;
        setUserMessages([...userMessages, newUserMessage]);

        axios.post('http://localhost:8081/gpt', { message: inputValue }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                setResponses([...botResponses, response.data.message]);
                setInputValue('');
                setShowInput(false);
            })
            .catch((error) => {
                console.error('Error sending request:', error);
            });
    };

    const handleEnd = async () => {
        axios.get('http://localhost:8081/closing')
            .then((response) => {
                const data = response.data;
                setOpenMessage(data.message);
                setShowFinalMessage(true);
            })
            .catch((error) => {
                console.error('Error downloading closing message:', error);
            });
    };

    return (
        <div className="page-container">
            <div className="chat-container">
                {!userMessages.length && openMessage && <p>{openMessage}</p>}
                <div className="messages-container">
                    {userMessages.map((message, index) => (
                        <div key={index} className="user-message-container">
                            <div className="message user-message">
                                <p>{message}</p>
                            </div>
                            {index < botResponses.length && (
                                <div className="message bot-message">
                                    <p>{botResponses[index]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {!showFinalMessage && (
                    <>
                        <form onSubmit={handleSubmit} className="input-form">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                        <div className="button-container">
                            <button onClick={handleEnd} className="quit-button">Quit</button>
                        </div>
                    </>
                )}
                {showFinalMessage && <p>{openMessage}</p>}
            </div>
        </div>
    )
}

export default App
