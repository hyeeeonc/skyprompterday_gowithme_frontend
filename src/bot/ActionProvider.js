// bot/ActionProvider.js

const DUMMY_MESSAGE = "DUMMY_MESSAGE";
const SERVER_URL = process.env.REACT_APP_SERVER_IP + process.env.REACT_APP_SERVER_CHAT;
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

  greet = (botMessage, removeLoading = false) => {
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

  clientMessage = async (clientMessage) => {
    this.addMessageToState(clientMessage);
    const data = { input: clientMessage };
    this.greet(DUMMY_MESSAGE);
    fetch(`${SERVER_URL}`, {
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
          this.greet(data.result, true); // Sending true as second parameter as  i need to stop loading that chat object response once API call is finished. Will discuss it further in next steps
        } else if (data.error) {
          this.greet("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.", true);
        }
      })
      .catch((error) => {
        // 요청이 실패한 경우 오류 메시지를 출력합니다.
        this.greet("일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.", true);
      });
  };
}

export default ActionProvider;
