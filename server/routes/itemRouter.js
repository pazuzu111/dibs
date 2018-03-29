const express = require('express');
const cachedItems = require('../data/items.json');

const itemRouter = express.Router();
const cors = require('cors');

const getItem = function (itemId) {
    return cachedItems.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

const getfavorite = function (itemId) {
    return favorites.find(function (item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

itemRouter.get('/:id', cors(), (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

module.exports = itemRouter;
