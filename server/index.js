const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
