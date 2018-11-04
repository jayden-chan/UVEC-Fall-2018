const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) =>  {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  console.log('Req');
  res.status(200).send('Hello World!!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/newMessage', (req, res) => {
	
	message.addMessage(req.body.message);
	res.status.send(200);
  
});
