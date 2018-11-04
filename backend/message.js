let messages = []

exports.addMessage = (user, contents) => {
  messages.push({[user]: contents});
}

exports.getMessages = () => {
  return messages;
}

