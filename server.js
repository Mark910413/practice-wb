const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('static', express.static(path.resolve(__dirname, 'static')));

app.get('/api/getmsg', (req, res, next) => {
  res.send('Get a messgae from server!');
})

app.use((req, res, next) => {
  res.render('public/index.html', (err, html) => {
    if (!err) {
      console.log(err);
    } else {
      res.send(html);
    }
  });
});

app.listen(3000, (err) => {
  if (!err) {
    console.log('The server run scuccess!');
  }
});