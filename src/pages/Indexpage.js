import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { PcLogo } from "../components/Logo";
import { BaseButton } from "../components/Button";

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

const IndexLogoContainer = styled.div`
  position: absolute;
  top: 41px;
  left: 54px;
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

  /* 초기 스타일 */
  transform: translateY(100%);
  opacity: 0;

  /* 애니메이션 적용 */
  animation: ${slideUp} 0.5s ease-out 0.5s forwards;
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

  /* 초기 스타일 */
  transform: translateY(100%);
  opacity: 0;

  /* 애니메이션 적용 */
  animation: ${slideUp} 0.5s ease-out 0.5s forwards;
`;

const IndexStartButtonContainer = styled.div`
  position: absolute;
  top: 431px;
  left: 110px;

  font-weight: bold;

  /* 초기 스타일 */
  transform: translateY(100%);
  opacity: 0;

  /* 애니메이션 적용 */
  animation: ${slideUp} 1s ease-out 1s forwards;
`;

const IndexMockupFirst = styled.img`
  position: absolute;
  top: 20%;
  right: 5%;

  width: 500px;
  height: auto;

  /* 초기 스타일 */
  transform: translateY(100%);
  opacity: 0;

  /* 애니메이션 적용 */
  animation: ${slideUp} 0.9s ease-out 0.9s forwards;
`;

const IndexMockupSecond = styled.img`
  position: absolute;
  top: calc(20% + 100px);
  right: calc10% - 300px);

  width: 600px;
  height: auto;

  /* 초기 스타일 */
  transform: translateY(100%);
  opacity: 0;

  /* 애니메이션 적용 */
  animation: ${slideUp} 1s ease-out 1s forwards;
`;

const IndexMockupThird = styled.img`
  position: absolute;
  top: calc(30% + 100px);
  right: calc10% - 300px);

  width: 600px;
  height: auto;

  /* 초기 스타일 */
  transform: translateY(10px);
  opacity: 0;

  /* 애니메이션 적용 */
  animation: ${slideUp} 1.1s ease-out 1.1s forwards;
`;

const IndexPage = () => {
  const [showBot, togggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("messages"));
    return messages;
  };

  return (
    <IndexBlock>
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

      <IndexMockupFirst src="/images/imagecenter.png" />
      {/* <IndexMockupSecond src="/images/imageleft.png" />
      <IndexMockupThird src="/images/imageright.png" /> */}
      {showBot && <Chatbot toggleBot={togggleBot} saveMessages={saveMessages} messageHistory={loadMessages()} config={config} messageParser={MessageParser} actionProvider={ActionProvider} />}
    </IndexBlock>
  );
};

export default IndexPage;
