const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')
const http = require("http");

app.use('/browse', require('./server/routes/browseRouter'));
app.use('/item', require('./server/routes/itemRouter'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('./build'));
// }

// app.get('*', function (req, res) {
//   res.sendFile("index.html", { root: path.join(__dirname, 'build') })
// });


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


setInterval(function() {
    http.get("https://firstdibs.herokuapp.com/browse/");
}, 1200000);

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});

