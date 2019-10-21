const express = require('express')
const request = require('request')
const express_handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const body_parser = require('body-parser')
 const users = require('users')

const app = express()

app.engine('handlebars', express_handlebars({defaultLayout : 'app',

}))
app.set('view engine', 'handlebars')


app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/login', (err) => {
    if (err){
        console.log('Unable to connect to the database')
    }
    else{
        console.log('Connected to the database')
    }
})

app.get('/', (req, res)=>{
    res.render('app')
})

app.post('/register', (req, res) => {
    res.render('register')
})

app.post('/login', (req, res) => {
    res.render('login')
})

app.post('/register', (req, res) => {

    var data = new User(req.body);
    data.save().then(() => {
        res.render('login');
    }).catch((e) => {
        res.status(400).send(e);
    })
});


app.listen('3000', ()=>{
    console.log('Server is running at 3000')
})


