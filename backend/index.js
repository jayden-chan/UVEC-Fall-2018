const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const message = require('./message.js');

app.use(bodyParser.json());

app.get('/', (req, res) =>  {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.status(200).send('Google');
});

app.post('/login', (req, res) => {

  client.connect();
  client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

});

app.get('/messages', (req, res) =>  {
  res.send(JSON.stringify({
    messages: message.getMessages()
  }));
});

app.post('/newMessage', (req, res) => {
  message.addMessage(req.body.message);
  res.status(200).send('Good');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


