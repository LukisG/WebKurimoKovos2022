const express = require('express');
const router = express.Router();
const route = '/';
const array = require("../index")
router.get('/user', (req, res) => {
    // res.send(arr);
    // res.json({})

    res.render('pages/user', { arr: array.array }, renderall());

    // console.log(array)
});
const renderall = () => {
    // console.log(array.array)
    const arr =  array.array.map(elem => (
        elem.status == "available" ?
            {
                name: elem.name,
                location: elem.location,
                floor: elem.location,
                bedrooms: elem.bedrooms,
                living_spaces: elem.living_spaces,
                car_spaces: elem.car_spaces,
            }
            : {}

    ))
    
}
module.exports = { route, router }