// src/components/ChatWidget.js
import React, { useState, useEffect, useRef } from 'react';
import './ChatWidget.css';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
// import { setupWebSocket } from '../utils/socket';

const ChatWidget = ({ position }) => {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatBodyRef = useRef(null);

//   useEffect(() => {
//     const socket = setupWebSocket((message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//       chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//     });

//     return () => socket.close();
//   }, []);

  const sendMessage = (message) => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, message]);
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  const toggleChatWidget = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {!isChatOpen && <div className={`chat-icon ${position}`} onClick={toggleChatWidget}>
        <img src="/chat-icon.png" alt="Chat Icon" />
      </div>}
      {isChatOpen && (
        <div className={`chat-widget ${position}`}>
          <ChatHeader toggleChat={toggleChatWidget} />
          <ChatBody messages={messages} ref={chatBodyRef} />
          <ChatInput sendMessage={sendMessage} />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
