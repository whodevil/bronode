var express = require('express');
var app = express();

app.use(express.static('client/build'));

app.get('/hello', function (req, res) {
  res.send('Hello World!adasd');
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('bronode running on '+port);
});