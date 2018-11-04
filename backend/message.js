let messages = []

exports.addMessage = (user, contents) => {
  messages.push({
    name: user,
    message: contents
  });
}

exports.getMessages = () => {
  return messages;
}

