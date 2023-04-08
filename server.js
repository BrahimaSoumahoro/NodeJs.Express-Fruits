const express = require('express')

// Data
const fruits = require('./Models/fruits');
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

app.get('/', (req, res) => {res.send('<h1>Hello World!</h1>')
})


/**
 * Index Route: (returns the entire list  of fruits). This is like entire basket of fruits
 */
app.get('/fruits', (req, res) => {
    res.render('Index', {fruits: fruits})
})

// POST: To send data from a form being accept here
app.post('/fruits', (req, res) => {
    console.log(req.body);
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    fruits.push(req.body)
    res.redirect('/fruits')
})

// New Route:  (return a form to create a new fruit)
app.get('/fruits/new', (req, res) => {
    res.render('New')
})


/**
 * Show Route: (returns an single fruit). This is as picking and showing 
 * one specific fruit of choice in the basket.
 */
app.get('/fruits/:indexOfFruitArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruits])
    res.render('Show', {fruit: fruits[req.params.indexOfFruitArray]}
    );
})


/**
 * This is to redirect user to the list page if his request is not found
 */
app.get('*', (req, res) => {
    res.render('404')
    res.redirect('/fruits')
})


app.listen(port, () => console.log(`Fruits are listening on port ${port}!`))