// src/components/ChatBody.js
import React from 'react';
import './ChatBody.css';

const ChatBody = React.forwardRef(({ messages }, ref) => {
  return (
    <div className="chat-body" ref={ref}>
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg}
        </div>
      ))}
    </div>
  );
});

export default ChatBody;
