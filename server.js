var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World!adasd');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});