var express = require('express');
var app = express();
var stormpath = require('express-stormpath');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.use(express.static('client/build'));

app.use(stormpath.init(app, {
  website: true,
  web: {
    register: { enabled: false },
    logout: {
      enabled: true,
      uri: '/logout',
      nextUri: '/'
    }
  }
}));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/messages', upload.single('photo'), (req, res) => {
  console.log("this is a message " + request.body );
  res.send('OK');
});

const port = process.env.PORT || 3001;
app.on('stormpath.ready', () => {
  app.listen(port, () => {
    console.log('bronode running on ' + port);
  });
});
