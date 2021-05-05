const express = require('express');

const {
    getAnimal,
    getAnimals
} = require('../controllers/animals.js')
const api = express.Router();

api
  .route('/')
  .get(getAnimals)


api  
  .route('/:id')
  .get(getAnimal)


module.exports = api;