const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Works')
})
router.get('/admin', (req, res) => {
    res.send("admmin")
})
router.get('/user', (req, res) => {
    res.send("user")
})
router.get('/database', (req, res) => {
    res.send("database")
})

module.exports = router;