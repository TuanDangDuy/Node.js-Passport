const express = require('express')
const app = express()
const { connectMongoose, User } = require('./database') //database
connectMongoose()
const ejs = require('ejs') //ejs
const passport = require('passport') //passport
const initializingPassport = require('./passportConfig')
initializingPassport(passport)



//? middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ejs
app.set('view engine', 'ejs')


//GET
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/login', (req, res) => {
    res.render('login')
})


app.post('/register', async (req, res) => {
    //check user
    const user = await User.findOne({ username: req.body.username })
    if(user) return res.status(400).send('User already exists')

    //tao user
    const newUser = await User.create(req.body)
    res.status(201).send(newUser)

})





app.listen(5000, () => {
    console.log("listening on 5000")
})