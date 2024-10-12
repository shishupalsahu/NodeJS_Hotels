//seatch on Chatgpt- " create schema for hotel menu" You will get all code of Menuitem.js, app.js 



const mongoose= require('mongoose');

const MenuItemSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    category: {
        type: String,
        enum: ['Starter', 'Main Course', 'Dessert', 'Beverage', 'Snack'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    availability: {
        type: Boolean,
        default: true
    },
    ingredients: {
        type: [String], // Array of strings representing ingredients
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const MenuItem=mongoose.model('MenuItem',MenuItemSchema);
module.exports = MenuItem;
