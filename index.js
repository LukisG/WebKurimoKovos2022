require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const path = require('path');
const {readdirSync} = require('fs');
const app = express()
const port = 3000;
const csv = require('csv-parser');
const fs = require('fs');
const sheme = require("./shema/shema")
const apartment = sheme.apartment;
const reservation = sheme.apartment;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//router stuff-----------------------------------
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
const routeFiles = readdirSync('./routes').filter((file) => file.endsWith('route.js'));
for (const routeFile of routeFiles){
    const route = require(`./routes/${routeFile}`);
    app.use(route.route, route.router);
}

//database hook--------------------------------------------------------

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@maindatabase.hmoiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => console.log("connected"))
    .catch(err => console.error("nepavyko"))


//csv reader--------------------------------------------------------------
async function sendtodatabase(elem){
    const zone = new Zone({
        name: elem.name,
        location: elem.location,
        floor: elem.location,
        bedrooms: elem.bedrooms,
        living_spaces: elem.living_spaces,
        car_spaces: elem.car_spaces,
        status: elem.status,
    })
    const result = await zone.save();
    // console.log(result)
    // course = await course.save();
    
}

const arr = [];
fs.createReadStream('apartments.csv')
  .pipe(csv())
  .on('data', (row) => {
      arr.push(row)
    // console.log(row)
    
    // sendtodatabase(row)
  })
  .on('end', () => {
    // console.log(arr)
    console.log('CSV file successfully processed');
    // console.log(arr[0])
    const zone = new Zone(arr.map(elem => ({
        name:  elem.name,
        location: elem.location,
        floor: elem.floor,
        bedrooms: elem.bedrooms,
        living_spaces: elem.living_spaces,
        car_spaces: elem.car_spaces,
        status: elem.status,
        bathrooms: elem.bathrooms,
        area: elem.area,
        price: elem.price,
        created_at: "",
        updated_at: "",
    })))
  });
  const Zone = mongoose.model('Zone', apartment)

const all = Zone.findById();
// console.log(all)
exports.array =  arr;
exports.databasearray = all;

