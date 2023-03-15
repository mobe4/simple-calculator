const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const operation = req.body.operation;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      res.send('Invalid operation');
      return;
  }

  res.send(`The answer is: ${result}`);
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
