const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('./build'));
// }

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
