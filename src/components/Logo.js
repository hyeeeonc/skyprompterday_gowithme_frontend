import React from "react";
import styled from "styled-components";

const PcLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PcLogoText = styled.div`
  margin-left: 10px;
  color: #fff;

  font-family: KoreanDREAM7R;
  font-size: 35px;
  font-weight: 800;
  line-height: normal;
`;

export const PcLogo = () => {
  return (
    <PcLogoContainer>
      <svg width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12.1851" y="31.9418" width="1.6686" height="16.686" transform="rotate(15 12.1851 31.9418)" fill="white" />
        <rect x="31" y="43" width="2" height="21" transform="rotate(90 31 43)" fill="white" />
        <rect width="1.6686" height="16.686" transform="matrix(-0.965926 0.258819 0.258819 0.965926 28.7861 31.9418)" fill="white" />
        <rect width="41" height="39" rx="8" fill="white" />
        <rect x="4" y="10" width="33" height="16" fill="#71ABFB" />
        <rect x="10" y="4" width="20" height="2" rx="1" fill="#71ABFB" />
        <circle cx="10.5" cy="32.5" r="3.5" fill="#71ABFB" />
        <circle cx="30.5" cy="32.5" r="3.5" fill="#71ABFB" />
      </svg>
      <PcLogoText>가치가</PcLogoText>
    </PcLogoContainer>
  );
};
