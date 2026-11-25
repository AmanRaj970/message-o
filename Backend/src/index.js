const express = require ('express');

const dotenv = require('dotenv');
const connectDB = require('./lib/db.js');

const app = express();


dotenv.config();
const port = process.env.PORT || 3000;


app.use(express.json());



app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});