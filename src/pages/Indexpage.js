import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { PcLogo } from "../components/Logo";
import { BaseButton } from "../components/Button";
import { useMediaQuery } from "react-responsive";

import Chatbot from "react-chatbot-kit";

import config from "../bot/config.js";
import MessageParser from "../bot/MessageParser.js";
import ActionProvider from "../bot/ActionProvider.js";

import "react-chatbot-kit/build/main.css";
import "./chatbot.css";

import "remixicon/fonts/remixicon.css";

const IndexBlock = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(178deg, #8abbff 1.82%, #fefefe 136.37%);
  overflow: hidden;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const mockupSlideUp = keyframes`
  0% {
    transform: rotate(-45deg) translateY(100px);
    opacity: 0;
  }
  100% {
    transform: rotate(-45deg) translateY(0);
    opacity: 1;
  }
`;

const IndexLogoContainer = styled.div`
  position: absolute;
  top: 41px;
  left: 54px;

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
  }
`;

const IndexTitle = styled.div`
  position: absolute;
  top: 230px;
  left: 81px;

  width: 500px;
  height: 100px;

  color: #002459;
  font-family: KoreanDREAM5R;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  transform: translateY(100%);
  opacity: 0;

  animation: ${slideUp} 0.5s ease-out 0.5s forwards;

  @media (max-width: 768px) {
    top: 120px;
    left: 20px;
    width: 300px;
    font-size: 30px;
  }
`;

const IndexSubTitle = styled.div`
  position: absolute;
  top: 345px;
  left: 81px;

  width: 500px;
  height: 100px;

  color: #646464;
  font-family: KoreanDREAM3R;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transform: translateY(100%);
  opacity: 0;

  animation: ${slideUp} 0.5s ease-out 0.5s forwards;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IndexStartButtonContainer = styled.div`
  position: absolute;
  top: 431px;
  left: 110px;

  font-weight: bold;

  transform: translateY(100%);
  opacity: 0;

  animation: ${slideUp} 1s ease-out 1s forwards;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IndexMockupContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 10vh;

  display: flex;
  justify-content: space-between;

  width: 700px;

  transform: rotate(-45deg) translateY(100%);
  opacity: 0;

  animation: ${mockupSlideUp} 0.9s ease-out 0.9s forwards;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const IndexMockupImage = styled.img`
  width: 218px;
  height: 440px;
`;

const IndexPage = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [showBot, togggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("messages"));
    return messages;
  };

  const validator = (input) => {
    if (input.length >= 1) return true;
    alert("질문을 입력해 주세요");
    return false;
  };

  return (
    <IndexBlock>
      <IndexMockupContainer>
        <IndexMockupImage style={{ marginTop: 120 }} src="/images/home.png" />
        <IndexMockupImage src="/images/chat.png" />
        <IndexMockupImage style={{ marginTop: 140 }} src="/images/landing.png" />
      </IndexMockupContainer>
      {/* <IndexMockupFirst src="/images/imagecenter.png" /> */}
      <IndexLogoContainer>
        <PcLogo />
      </IndexLogoContainer>

      <IndexTitle>
        당신과의 가치있는 동행, <br />
        지금부터 시작합니다.
      </IndexTitle>
      <IndexSubTitle>서울시 지하철의 승강기 위치 정보를 물어보세요!</IndexSubTitle>
      <IndexStartButtonContainer>
        <BaseButton onClick={() => togggleBot((prev) => !prev)}>{showBot ? <p>종료하기</p> : <p>시작하기</p>} </BaseButton>
      </IndexStartButtonContainer>

      {/* <IndexMockupSecond src="/images/imageleft.png" />
      <IndexMockupThird src="/images/imageright.png" /> */}
      {showBot ||
        (isMobile && (
          <Chatbot
            validator={validator}
            placeholderText="질문을 입력하세요."
            toggleBot={togggleBot}
            saveMessages={saveMessages}
            messageHistory={loadMessages()}
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        ))}
    </IndexBlock>
  );
};

export default IndexPage;
