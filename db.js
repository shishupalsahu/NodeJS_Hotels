// vide-7
// CONNECT THE NDEJS TO MONGODB USING MONGOOSE DRIVER/LIBRARY .
// Import the mongoose library
const mongoose = require('mongoose');

// Define the MongoDB connection string
const mongoURL = 'mongodb://localhost:27017/Hotels' // replace 'mydatabase' with your database name

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

const db=mongoose.connection;

db.on('connected',()=> 
   {
    console.log('mongodb  server connected');
   })
db.on('error',(error)=> 
    {
        console.log(' some Error in mongodb  server connected',error);
    })
db.on('disconnected',(disconnected)=> 
     {
        console.log('mongodb  server connected',disconnected);
     })

module.exports=db;


