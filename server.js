var express = require('express');
var app = express();
var stormpath = require('express-stormpath');

app.use(express.static('client/build'));

app.use(stormpath.init(app, {
  website: true,
  web: {
    register: { enabled: false },
    logout: {
      enabled: true,
      uri: '/logout',
      nextUri: '/index.html'
    }
  }
}));

app.get('/hello', function(req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 3001;
app.on('stormpath.ready', function() {
  app.listen(port, function() {
    console.log('bronode running on ' + port);
  });
});
