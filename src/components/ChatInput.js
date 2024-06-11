// src/components/ChatInput.js
import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    if (e.key === 'Enter') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <input
      className="chat-input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={handleSendMessage}
    />
  );
};

export default ChatInput;
