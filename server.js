var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Hello World!adasd');
});

app.listen(process.env.PORT || 3001, function () {
  console.log('bronode running on 3001!');
});