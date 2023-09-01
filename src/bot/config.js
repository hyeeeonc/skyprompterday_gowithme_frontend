// bot/config.js
import { createChatBotMessage } from "react-chatbot-kit";
import Header from "../components/ChatbotHeader";

import ChatMessage from "../components/ChatMessage";

const config = {
  initialMessages: [createChatBotMessage("안녕하세요. 무엇을 도와드릴까요?")],
  customComponents: {
    // Replaces the default header
    header: () => <Header />,
    // Replaces the default bot avatar
    // botAvatar: (props) => <BotAvatar {...props} />,
    // Replaces the default bot chat message container
    botChatMessage: (props) => <ChatMessage {...props} bot />,
    // Replaces the default user icon
    // userAvatar: (props) => <UserAvatar {...props} />,
    // Replaces the default user chat message
    userChatMessage: (props) => <ChatMessage {...props} />,
  },
};

export default config;
