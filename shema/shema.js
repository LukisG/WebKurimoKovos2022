const mongoose = require('mongoose')

const apartment = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, maxLength: 255 },
    location: { type: String, maxLength: 255 },
    floor: { type: String, min: [0, 'Not valid number for floor'] },
    bedrooms: { type: Number, min: [0, 'Not valid number for bedrooms'] },
    car_spaces: { type: Number, min: [0, 'Not valid number for car spaces'] },
    living_spaces: { type: Number, min: [0, 'Not valid number for living spaces'] },
    bathrooms: { type: Number, min: [0, 'Not valid number for bathrooms'] },
    area: { type: Number, min: [0, 'Not valid number for area'] },
    price: { type: Number, min: [0, 'Not valid number for price'] },
    status: { type: String },
    date_sell_from: { type: Date },
    date_sell_to: { type: Date },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
const reservation = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    first_name: {  type:String, min: [3, 'your name is too short'], max: [60, "your name is too big"] },
    last_name: {  type:String, min: [3, 'your name is too short'], max: [60, "your name is too big"] },
    email: {  type:String, min: [3, 'your email is too short'], max: [255, "your email is too big"] },
    phone: {  type:String, min: [6, 'your phone number is too short'], max: [20, "your phone number is too big"] },
    message: {  type:String, max: [5000, "your message is too big"] },
    reserved_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
exports.apartment = apartment;
exports.reservation = reservation;