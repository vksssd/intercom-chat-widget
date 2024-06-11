// src/components/ChatIcon.js
import React from 'react';
import './ChatIcon.css';

const ChatIcon = ({ toggleChatWidget }) => {
  return (
    <div className="chat-icon" onClick={toggleChatWidget}>
      <img src="/chat-icon.png" alt="Chat Icon" />
    </div>
  );
};

export default ChatIcon;
