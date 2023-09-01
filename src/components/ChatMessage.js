import styled from "styled-components";

const ChatMessageContainer = styled.div`
  max-width: 85%;
  width: fit-content;
  display: flex;
  justify-content: center;
  margin-left: 0.4rem;
  font-size: 0.97rem;
  line-height: 1.3rem;
  word-break: keep-all;
  font-size: 14px;
`;

const ChatMessageBot = styled(ChatMessageContainer)`
  background: #cbe0ff;
  border-radius: 5px 5px 5px 0px;
  color: #3d4f6e;
  padding: 0.8rem 1.2rem;
  font-weight: 500;

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translateY(-5px);
    }
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    animation-delay: 0.4s;
  }

  div {
    width: 8px;
    height: 8px;
    margin: 3px 6px;
    border-radius: 50%;
    background-color: #a3a1a1;
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }
`;

const ChatMessageUser = styled(ChatMessageContainer)`
  background: #ffce51;
  border-radius: 5px 5px 0px 5px;
  padding: 0.7rem 1.1rem;
  font-weight: 400;
`;

const ChatMessageBox = ({ isBot }) => {
  return isBot ? <ChatMessageBot /> : <ChatMessageUser />;
};

function ChatMessage({ message, bot }) {
  return bot ? <ChatMessageBot>{message}</ChatMessageBot> : <ChatMessageUser>{message}</ChatMessageUser>;
}

export function BotMessage({ message }) {
  if (message === "DUMMY_MESSAGE")
    return (
      <ChatMessageBot>
        <div></div>
        <div></div>
        <div></div>
      </ChatMessageBot>
    );
  else return <ChatMessageBot>{message}</ChatMessageBot>;
}

export default ChatMessage;
