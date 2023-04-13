// to create, update a fruit in database
// This is a blueprint for new fruit to be added 

const mongoose =require('mongoose')


// creating the schema and setting the rules of creation 
const fruitSchema = new mongoose.Schema({
    name:{type: String, required:true},
    color: {type: String, required:true},
    readToEat: Boolean
});


const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;