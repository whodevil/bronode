var express = require('express');
var app = express();
var stormpath = require('express-stormpath');

app.use(express.static('client/build'));

app.use(stormpath.init(app, {
  website: true,
  web: {register: {enabled: false}
        logout:   {enabled: true,
                   uri: '/logout',
                   nextUri: '/'
  }}
}));

app.get('/hello', (req, res) => {
  res.send('Hello World!adasd');
});

app.post()

const port = process.env.PORT || 3001;
app.on('stormpath.ready', () => {
  app.listen(port, () => {
    console.log('bronode running on ' + port);
  });
});