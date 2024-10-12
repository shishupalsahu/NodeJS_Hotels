
const express = require('express');
const router=express.Router();

const MenuItem = require('./../models/MenuItem'); // Import the schema
router.post('/', async (req, res) => {
    const { name, category, price, description, ingredients } = req.body;

    try {
        const newMenuItem = new MenuItem({
            name,
            category,
            price,
            description,
            ingredients
        });
        await newMenuItem.save();
        res.status(201).send('Menu item added successfully');
    } catch (error) {
        res.status(500).send('Error adding menu item');
    }
});

// GET route to get all menu items
router.get('/', async (req, res) => {
    try {
        const menu = await MenuItem.find();
        res.json(menu);
    } catch (error) {
        res.status(500).send('Error retrieving menu');
    }
});

module.exports=router;
