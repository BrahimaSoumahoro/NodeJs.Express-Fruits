// This is the blueprint for the Vegetables schema onto MongoBD server

const { Mongoose, default: mongoose } = require("mongoose");

const VegetableSchema = new mongoose.Schema ({
    name:{type: String, required:true},
    color: {type: String, required:true},
    readToEat: Boolean
})

const Vegetables_Mong = mongoose.model('Vegetable, VegetableSchema')

module.exports = Vegetables_Mong; 