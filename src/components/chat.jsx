import React, { useState, useEffect } from 'react';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Fetch chat history when the component mounts
    fetch('http://localhost:3001/api/chat')
      .then(response => response.json())
      .then(data => setChatHistory(data));
  }, []);

  const handleSendMessage = async () => {
    // Send message to the server
    await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    // Update chat history
    setChatHistory([...chatHistory, message]);
    setMessage('');
  };

  return (
    <div>
      <div>
        {chatHistory.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
