const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) =>  {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.status(200).send('Hello world!');
});

app.get('/test', (req, res) => {

});

app.get('/message', (req, res) =>  {
  res.send(JSON.stringify(message.getMessage()))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
