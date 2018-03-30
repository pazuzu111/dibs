const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')
const http = require("http");
const cors = require('cors');
app.use(cors({
    origin: ['http://firstdibss.surge.sh/'],
    credentials: true
}));

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
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
});


app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});


setInterval(function() {
    http.get("https://firstdibs.herokuapp.com/browse/");
}, 300000);
