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

app.post('/newmessage', (req, res) => {
  // parse jSON
  //
  // add to messages
  res.status(200).send('Google');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
