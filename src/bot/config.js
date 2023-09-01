// bot/config.js
import { createChatBotMessage } from "react-chatbot-kit";
import Header from "../components/ChatbotHeader";

import ChatMessage from "../components/ChatMessage";
import ChatbotAvator from "../components/ChatbotAvator";
import { BotMessage } from "../components/ChatMessage";

const config = {
  initialMessages: [createChatBotMessage("안녕하세요. 무엇을 도와드릴까요?")],
  botName: "가치가",
  customComponents: {
    // Replaces the default header
    header: (props) => <Header setToggle={props.setToggle} />, // 여기서 setToggle을 Header 컴포넌트로 전달
    // Replaces the default bot avatar
    botAvatar: (props) => <ChatbotAvator {...props} />,
    // Replaces the default bot chat message container
    botChatMessage: (props) => <BotMessage {...props} bot />,
    // Replaces the default user icon
    userAvatar: (props) => <div {...props} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <ChatMessage {...props} />,
  },
};

export default config;
