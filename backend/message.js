let messages = []

exports.addMessage = (contents) => {
  messages.push(contents);
}

exports.getMessages = () => {
  return messages;
}

