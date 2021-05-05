const mongoose = require('mongoose');
const Animal = require('../models/Animal');
// We need { ObjectId} to display API items on localhost browser
const { ObjectId } = mongoose.Types;

// const getAnimals = async (req, res, next) => {
//     res.send('get all animals');
// }
// const getAnimal = (req, res, next) => {
//     const { id } = req.params;
//     res.send(`get animal ${id}`)
// }

const getAnimal = async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(id);
      const animal = await Animal.findById(id);
      res.json({ success: true, msg: "show selected animal", data: animal });
    } catch (err) {
      next(err);
    }
  };

const getAnimals = async (req, res, next) => {
    try {
      const animals = await Animal.find();
      res.json({ success: true, msg: "show all animals", data: animals });
    } catch (err) {
      next(err);
    }
  };




module.exports = {
    getAnimal,
    getAnimals
}