const express = require('express');
const mongoose = require('mongoose');

const MenuItem = require('./models/MenuItem'); // Import the schema

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB (use your local URI or MongoDB Atlas URI)
mongoose.connect('mongodb://localhost:27017/hotelmenu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// POST route to add a new menu item
// app.post('/menuItem', async (req, res) => {
//     const { name, category, price, description, ingredients } = req.body;

//     try {
//         const newMenuItem = new MenuItem({
//             name,
//             category,
//             price,
//             description,
//             ingredients
//         });
//         await newMenuItem.save();
//         res.status(201).send('Menu item added successfully');
//     } catch (error) {
//         res.status(500).send('Error adding menu item');
//     }
// });

// // GET route to get all menu items
// app.get('/menu', async (req, res) => {
//     try {
//         const menu = await MenuItem.find();
//         res.json(menu);
//     } catch (error) {
//         res.status(500).send('Error retrieving menu');
//     }
// });
// //---------------------------------------------------------------------------------------------------
// // for /menu/how many chef or manager or waiter 
// app.get('/menu/:category', async (req, res) => {
//     try {
//         const category = req.params.category; // Get category from URL params

//         // Check if category matches allowed values (case-insensitive)
//         const allowedCategories = ['chef', 'waiter', 'manager'].map(cat => cat.toLowerCase());
        
//         if (allowedCategories.includes(category.toLowerCase())) {
//             // Query the MenuItem model by category (case-insensitive)
//             const response = await MenuItem.find({ category: { $regex: new RegExp(category, 'i') } });

//             if (response.length > 0) {
//                 console.log('Response Fetched:', response);
//                 res.status(200).json(response); // Send found items
//             } else {
//                 res.status(404).json({ message: 'No items found for this category' });
//             }
//         } else {
//             res.status(400).json({ error: 'Invalid category type' });
//         }
//     } catch (err) {
//         console.log('Error:', err);
//         res.status(500).json({ error: 'Server error' });
//     }
// });


 // for personroutes.js file
const personroutes=require('./routes/personroutes');
const menuItemsroutes=require('./routes/menuItemsroutes');


// app.use('/menu',personroutes);
app.use('/person',personroutes);
app.use('/menu',menuItemsroutes);

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
