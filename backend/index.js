const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT | 3001;

app.use(bodyParser.json());

app.get('/', (req, res) =>  {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.status(200).send('Google');
});

app.get('/message', (req, res) =>  {
  res.status(200).send(JSON.stringify(message.getMessage()))
});

app.post('/newMessage', (req, res) => {
	message.addMessage(req.body.message);
	res.status.send(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


