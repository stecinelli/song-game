const express = require('express');
const controller = require('./rounds.controller');

const router = express.Router();

router.get('/', (req, res) => {
    const category = req.query.category || 'song-title';
    const skip = (req.query.skip || '').split(';');
    const round = controller.getRound(category, skip);
    res.json(round);
})

module.exports = router;