var needle = require('needle');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/bearychat', (req, res) => {
  const vchannel = req.body.vchannel;
  const sender = req.body.sender;
  const subdomain = req.body.subdomain;
  const token = req.body.token;
  const text = 'This is a test response';
  const attachments = [{
    title: 'Attachment title',
    text: 'attachment text',
    color: "#ffa500",
    images: [{ url: 'http://misc.360buyimg.com/lib/img/e/logo-201305.png' }],
  }];
  res.end();
  needle.post(`https://${subdomain}.bearychat.com/api/hubot_hook/${token}`,
              { vchannel, sender, text, attachments },
              { json: true }, (err) => err && console.error(err));
});

app.listen(6666);
