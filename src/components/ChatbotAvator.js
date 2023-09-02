import styled from "styled-components";

const ChatbotAvatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 49px;
  height: 49px;
  flex-shrink: 0;

  background: #6bc7fb;
  border-radius: 50%;
`;

const ChatbotAvatorImg = styled.img`
  width: 21px;
  height: 38px;
`;

const ChatbotAvator = () => {
  return (
    <ChatbotAvatorContainer>
      <ChatbotAvatorImg src="images/avator.png" />
    </ChatbotAvatorContainer>
  );
};

export default ChatbotAvator;
