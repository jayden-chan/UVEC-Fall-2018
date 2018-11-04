const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const SqlString = require('sqlstring');
const jwt = require('jsonwebtoken');

const { Pool } = require('pg');
const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const message = require('./message.js');

let jwtSecret = 'ed0Bu7alNujDEMHSFAymJqA3mMtuDlxXaOYKEww4cUemzpUKean2wnCtuvOpbFRF';

app.use(bodyParser.json());

app.get('/', (req, res) =>  {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.status(200).send('Google');
});

app.post('/messages', (req, res) =>  {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).send('Auth error');
      return;
    }

    res.send(JSON.stringify({
      messages: message.getMessages()
    }));
  });
});

app.post('/manager', (req, res) =>  {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).send('Auth error');
      return;
    }

    if (decoded.position === null) {
      res.status(401).send('Auth error');
    }

    if (decoded.position.toLowerCase().includes("manager")) {
      res.status(200).send(JSON.stringify({
        messages: message.getManagerMessages()
      }));
    } else {
      res.status(401).send('Auth error');
    }

  });
});

app.post('/newManagerMessage', (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).send('Auth error');
      return;
    }

    if (decoded.position === null) {
      res.status(401).send('Auth error');
    }

    if (decoded.position.toLowerCase().includes("manager")) {
      message.addManagerMessage(decoded.first_name, req.body.message);
      res.status(200).send('Ok');
    } else {
      res.status(401).send('Auth error');
    }

  });
});

app.post('/newMessage', (req, res) => {
  jwt.verify(req.body.token, jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).send('Auth error');
      return;
    }

    message.addMessage(decoded.first_name, req.body.message);
    res.status(200).send('Ok');
  });
});

app.post('/login', (req, res) => {
  const query = SqlString.format('SELECT first_name, position FROM users WHERE email = ? AND password = crypt(?, password)', [req.body.email, req.body.password])

  client.query(query, (err, response) => {
    let result = []
    if (err) {
      console.log(err);
    }

    for (let row of response.rows) {
      result.push(row)
    }

    switch (result.length) {
      case 1:
        let token = jwt.sign(JSON.stringify(result[0]), jwtSecret);
        res.status(200).send(JSON.stringify({token: token}));
        break;

      default:
        res.status(401).send('Bad username or password');
        break;
    }
  });
});

app.listen(port, () => console.log(`Example app Listening on port ${port}!`));
