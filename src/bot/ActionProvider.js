// bot/ActionProvider.js

const DUMMY_MESSAGE = "DUMMY_MESSAGE";
class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  chatHandler = (res) => {
    const message = this.createChatbotMessage(res);
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({ ...state, messages: [...state.messages, message] }));
  };

  apiCall = async (resData) => {
    console.log(resData);
    fetch("http://127.0.0.1:5000/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터 받은 응답을 처리합니다.
        if (data.result) {
          // 처리된 결과를 출력합니다.
          console.log(data.result);
          return data.result;
        } else if (data.error) {
          console.log(data.error);
          // 오류 메시지를 출력합니다.
          return data.error;
        }
      })
      .catch((error) => {
        // 요청이 실패한 경우 오류 메시지를 출력합니다.
        console.error("요청 실패:", error);
      });
  };

  greet = (botMessage, removeLoading = false) => {
    console.log(botMessage);
    const message = this.createChatbotMessage(botMessage);
    this.addMessageToState(message, removeLoading);
  };

  addMessageToState = (message, removeLoading = false) => {
    this.setState((prevstate) => ({
      ...this.removeLoadingMessage(prevstate, removeLoading),
      messages: [...prevstate.messages, message],
    }));
  };

  removeLoadingMessage = (prevstateArray, removeLoading) => {
    if (removeLoading) {
      prevstateArray?.messages?.splice(
        prevstateArray?.messages?.findIndex((a) => a?.message?.message === DUMMY_MESSAGE),
        1
      );
      return prevstateArray;
    } else {
      return prevstateArray;
    }
  };

  // clientMessage = async (clientMessage) => {
  //   console.log(clientMessage);
  //   this.addMessageToState(clientMessage);
  //   const data = {
  //     input: clientMessage,
  //   };
  //   try {
  //     this.greet(DUMMY_MESSAGE); // I am using message object, you can use string too
  //     const apiResp = await this.apiCall(data);
  //     console.log(apiResp);
  //     if (apiResp.status == 200) {
  //       this.greet({ message: apiResp?.data?.response }, true); // Sending true as second parameter as  i need to stop loading that chat object response once API call is finished. Will discuss it further in next steps
  //     } else {
  //       this.greet(
  //         "FAIL_TO_ANSWER",

  //         true
  //       );
  //     }
  //   } catch {
  //     this.greet(
  //       "FAIL_TO_ANSWER",

  //       true
  //     );
  //   }
  // };

  clientMessage = async (clientMessage) => {
    this.addMessageToState(clientMessage);
    const data = { input: clientMessage };
    this.greet(DUMMY_MESSAGE);
    fetch("http://127.0.0.1:5000/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버로부터 받은 응답을 처리합니다.
        if (data.result) {
          // 처리된 결과를 출력합니다.
          console.log(data.result);
          this.greet(data.result, true); // Sending true as second parameter as  i need to stop loading that chat object response once API call is finished. Will discuss it further in next steps
        } else if (data.error) {
          console.log(data.error);
          this.greet("FAIL_TO_ANSWER", true);
        }
      })
      .catch((error) => {
        // 요청이 실패한 경우 오류 메시지를 출력합니다.
        console.error("요청 실패:", error);
        this.greet("FAIL_TO_ANSWER", true);
      });
  };
}

export default ActionProvider;
