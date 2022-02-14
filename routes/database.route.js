const express = require('express');
const router = express.Router();
const array = require("../index")
const route = '/';
const databasearray = array.databasearray;
console.log(array)
router.get('/database', (req, res) =>{
    // res.send('hello world!');
    // res.json({})
    res.render('pages/database', { arr: databasearray }, renderall());
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
module.exports = {route, router}