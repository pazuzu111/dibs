const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('./build'));
// }
app.use(express.static('build'));

app.get('*', function (req, res) {
  res.sendFile('index.html');
});

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
