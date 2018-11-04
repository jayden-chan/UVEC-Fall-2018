const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT | 3001;

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

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

app.post('/newmessage', (req, res) => {
  // parse jSON
  //
  // add to messages
  res.status(200).send('Google');
});

app.get('/message', (req, res) =>  {
  res.send(JSON.stringify(message.getMessage()))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
