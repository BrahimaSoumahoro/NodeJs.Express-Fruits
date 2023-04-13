require('dotenv').config();
const express = require('express')
// Data
const fruits = require('./Models/fruits');
const Fruit = require('./Models/Fruit')
const { default: mongoose } = require('mongoose');
// const Index = require('./views/Index');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const app = express()
const port = 3000
// ==== setting/configuration

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine());


// Setting up the middleware to run in our app
app.use((req, res, next) => {
    // console.log('I run for all routes');
    /**
     * To see where the request is coming from
     */
    console.log(req.url);
    next();
})

/**
 * This is to tell the app not to use the extended url just newest urlencoded
 * parse the data from the request
 */
app.use(express.urlencoded({extended: false}))

// const fruits = ['apple', 'banana', 'pear']

app.get('/', (req, res) => {res.send('<h1>Welcome to Healthy Eating, smart choice!</h1>')
})


/**
 * Index Route: (returns the entire list  of fruits). This is like entire basket of fruits
 */
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    // res.render('fruits/Index', {fruits: fruits})
    Fruit.find({}, (error, allFruits) => {
        res.render('fruits/Index', {fruits: allFruits})
    })
})

app.get('/vegetables', (req, res) => {
    // res.send(Vegetables)
    // res.render('vegetables/Index', {vegetables: vegetables})
    Fruit.find({}, (error, allvegetables) => {
        res.render('vegetables/Index', {vegetables_Mong: allvegetables})
    })
})

// POST: To send data from a form being accept here
app.post('/fruits', (req, res) => {
    console.log(req.body);
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    // fruits.push(req.body)
    Fruit.create(req.body, (error, createdFruit) => {
        // res.send(createdFruit)
        res.redirect('/fruits')
    })
    
})

// New Route:  (return a form to create a new fruit)
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})


/**
 * Show Route: (returns an single fruit). This is as picking and showing 
 * one specific fruit of choice in the basket.
 */
app.get('/fruits/:id', (req, res) => {
    // res.send(fruits[req.params.indexOfFruits])
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitArray]}
    Fruit.findById(req.params.id, (error, foundFruit) => {
        res.render('fruits/Show', {fruit: foundFruit})
    })
});
// })


/**
 * This is to redirect user to the list page if his request is not found
 */
app.get('*', (req, res) => {
    res.render('404')
    res.redirect('/fruits')
})


app.listen(port, () => {
    console.log(`Fruits and Vegetables are listening on port ${port}!`)

// to get rid off the warning message 
mongoose.set('strictQuery', true)
// connect to mongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
})
});
