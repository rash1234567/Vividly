const express = require('express');
const app = express();

app.use(express.json());

const movies = [
    {
        id : 1,
        genre : 'comedy'
    },
    {
        id : 2,
        genre : 'action'
    },
    {
        id : 3,
        genre : 'romance'
    }
]


app.get('/movies', (req, res) => {
    res.send(movies)
});

app.get('/movies/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('specify a genre atleast three characters long'); 
    res.send(movie);
});

app.post('/movies', (req, res) => {
    const movie = {
        id : movies.length + 1,
        genre : req.body.genre
    }
    movies.push(movie);
    if(!req.body.genre || req.body.genre < 3) {
        res.send('specify a genre atleast three characters long')
    }
    res.send(movie)
})

app.put('/movies/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('The movie with this id does not exist');
    movies.genre = req.body.genre;
    res.send(movie)
});

app.delete('/movies/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    const index = movies.findIndexOf(movie);
    movies.splice(index, 1);
    if(!req.body.genre || req.body.genre < 3) {
        res.send('specify a genre atleast three characters long')
    }
    res.send(movie)
})
    
app.listen(5000)