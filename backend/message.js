let messages = []
let managers = []

exports.addMessage = (user, contents) => {
  messages.push({
    name: user,
    message: contents
  });
}

exports.getMessages = () => {
  return messages;
}

exports.addManagerMessage = (user, contents) => {
  managers.push({
    name: user,
    message: contents
  });
}

exports.getManagerMessages = () => {
  return managers;
}

