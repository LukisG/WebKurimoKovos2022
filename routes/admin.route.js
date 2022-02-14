const express = require('express');
const router = express.Router();
const array = require("../index")
const route = '/';

router.get('/admin', (req, res) =>{
    // res.send('hello world!');
    // res.json({})
    res.render('pages/admin', { arr: array.array }, renderall());
});
const renderall = () => {
    // console.log(array.array)
    const arr =  array.array.map(elem => (
            {
                name: elem.name,
                location: elem.location,
                floor: elem.location,
                bedrooms: elem.bedrooms,
                living_spaces: elem.living_spaces,
                car_spaces: elem.car_spaces,
                status: elem.status,
                
            }
    ))
    
}
module.exports = {route, router}