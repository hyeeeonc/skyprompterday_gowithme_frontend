class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if (message === "" || undefined || null) {
    } else this.actionProvider.clientMessage(message);
  }
}

export default MessageParser;
