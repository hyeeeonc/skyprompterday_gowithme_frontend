import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // 서버에 보낼 데이터를 준비합니다.
    const requestData = { input: message };

    // 서버에 POST 요청을 보냅니다.
    fetch("http://127.0.0.1:5000/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터 받은 응답을 처리합니다.
        if (data.result) {
          // 처리된 결과를 출력합니다.
          this.actionProvider.chatHandler(data.result);
        } else if (data.error) {
          // 오류 메시지를 출력합니다.
          this.actionProvider.chatHandler(data.error);
        }
      })
      .catch((error) => {
        // 요청이 실패한 경우 오류 메시지를 출력합니다.
        console.error("요청 실패:", error);
      });
  }
}

export default MessageParser;
