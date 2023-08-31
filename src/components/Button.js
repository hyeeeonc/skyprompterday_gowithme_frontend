import React from "react";
import styled from "styled-components";

export const BaseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 171px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 60px;
  background: linear-gradient(180deg, #6b9eff 0%, rgba(49, 116, 245, 0) 240.2%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-family: KoreanDREAM5R;
  font-size: 22px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;

  curosr: pointer;
`;
