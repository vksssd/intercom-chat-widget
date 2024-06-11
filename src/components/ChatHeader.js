// src/components/ChatHeader.js
import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({ toggleChat }) => {
  return (
    <div className="chat-header" onClick={toggleChat}>
      Chat with us!
    </div>
  );
};

export default ChatHeader;
