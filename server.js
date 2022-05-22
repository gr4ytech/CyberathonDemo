const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended :false }))



app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.post('/signup', (req, res) => {

})


app.listen(3000)
