const express = require('express');
const movieRoute = require('./Router/movieRouter');



const app = express();

//middlewares
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//routes
app.use
app.use(movieRoute)
app.use((req,res)=>{
    res.status(302).render('404',{ title: 404 })
})
app.listen(8080);