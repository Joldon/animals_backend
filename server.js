require('dotenv').config();
// require(colors);
require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');

const animals = require('./api/animals');
const errorHandler = require('./middlewares/error');
const connectDB = require('./dbinit');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('hello'));
// app.get('/animals', (req, res) => res.send('hello animals'));
app.use('/animals', animals);
app.use(errorHandler);

// app.use('*', (req, res) => res.status(404).json({error: 'not found'}));



app.listen(process.env.PORT || 5000, () => console.log(`backend app listeninig at http://localhost:5000`.rainbow.bold.inverse)); 

