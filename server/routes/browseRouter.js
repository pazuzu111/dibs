const express = require('express');
const cachedItems = require('../data/items.json');
const browseRouter = express.Router();

const cors = require('cors');

var bodyParser = require('body-parser');

let favorites = []

const getItems = payload => {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 12;
    const items = cachedItems.slice(start, start + limit);

    return {
        items: items,
        totalItems: cachedItems.length
    };
};

//function to retrive specific favorite
const getfavorite = function (itemId) {
    return favorites.find(item => {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

//for parsing body requests
browseRouter.use(cors())
browseRouter.use(bodyParser.json());
browseRouter.use(bodyParser.urlencoded({ extended: true }));


//*******************************************
browseRouter.get('', cors(),(req, res) => {
    const response = getItems(req.query);
    res.status(200).json(response);
});

//output favs
browseRouter.get('/favs', (req, res) => {

    //respond with JSON
    res.status(200).json(favorites);
});

//output fav by id
browseRouter.get('/favs/:id', (req, res) => {
    const id = req.params.id;
    const item = getfavorite(id);

    //respond with JSON
    res.status(200).json(item);
});

browseRouter.post('/favs', (req, res) => {

    //push into favorites array
    favorites.push(req.body)

    //repsond with JSON
    res.json(favorites)
});

browseRouter.delete('/favs/:id',  (req, res) => {
    const item = getfavorite(req.params.id);
    const index = favorites.indexOf(item)

    //if index is greater than -1
    if(index > -1)
    {
        //remove the spicified element
        favorites.splice(index, 1);
    }
});

//catch 500 error for all routes if it exists
browseRouter.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      error: err,
      message: err.message,
    });
});

//export browser router for use in other files
module.exports = browseRouter;
