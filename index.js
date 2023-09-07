//Dependencies - pulls all the packages
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//MIDDLEWARE (Express Settings)
app.set('views', __dirname + '/views')
//Defines the view engine used (JSX in this case)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//Lets Express know you are calling the 'static' or public folder
app.use(express.static('public'))
//"body parser"
app.use(express.urlencoded({ extended: true }))
//Sets _method as the keyword to change methods when needed
app.use(methodOverride('_method'))


//Controllers & Routes (MUST COME AFTER MIDDLEWARE!!)
//Renders Homepage (home.jsx file)
app.get('/', (req, res) => {
    res.render('home')
})

//Imports the router from the places.js file
app.use('/places', require('./controllers/places'))

//Wildcard route with 404 error (for page that doesn't exist)
//Wildcard should always be at the end of your code!! Or it will override your other pages. :(     
app.get('*', (req, res) => {
    res.render('error404')
})     

// **** PREVIOUS EXAMPLE ****
// app.get('*', (req, res) => {
//     //Calling .status(404) on the response giveS a legit 404 code
//     res.status(404).send('<h1>404 Page</h1>')
// })

app.listen(process.env.PORT)