const express = require ('express');
const clerkMiddleware = require('@clerk/express');
const dotenv = require('dotenv');
const connectDB = require('./lib/db.js');
const cors = require('cors');


const port = process.env.PORT || 3000;
dotenv.config(); 
const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));    







app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});