const express = require('express');
const router = express.Router();

const route = '/';

router.get('/', (req, res) =>{
    // res.send('hello world!');
    // res.json({})
    res.render('pages/index');
});

module.exports = {route, router}