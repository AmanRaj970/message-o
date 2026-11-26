const express = require ('express');
const { clerkMiddleware } = require("@clerk/express");
const dotenv = require('dotenv');
const connectDB = require('./lib/db.js');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

dotenv.config(); 
const port = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
const app = express();
app.use(express.json());


const publicdir = path.join(process.cwd(), 'public');
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));    

if (fs.existsSync(publicdir)) {
    app.use(express.static(publicdir));

    app.get('/{*any}', (req, res,next) => {
        res.sendFile(path.join(publicdir, 'index.html'), (err) => next(err));
    });
}
app.use(clerkMiddleware());






app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});