var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hello there',
    user: 'Daniel',
    added: new Date(),
  },
  {
    text: 'Hello world',
    user: 'Pete',
    added: new Date(),
  },
  {
    text: 'Hi',
    user: 'John',
    added: new Date(),
  },
  {
    text: 'Hi everybody',
    user: 'Charles',
    added: new Date(),
  },
]

const pushNewMsg = (messageText, userName) => {
  messages.push(
    {
      text: messageText,
      user: userName,
      add: new Date()
    }
 )
}

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'test'})
});

// POST the a new message

router.post('/new', (req, res) => {
  console.log(req.body)
  pushNewMsg(req.body.messageText, req.body.userName)
  console.log(messages)
  res.redirect('/')
});

module.exports = router;
