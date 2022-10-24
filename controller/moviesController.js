const moviesDatabase = require('../database');

const movie_index = (req,res)=>{
    const movies = moviesDatabase.sort();
    try {
      res.render('index', {title: 'All Movies', movies })
    } catch (error) {
      console.log(error);
}};

const movie_about = (req,res)=>{
    try {
      res.render('about',{title: 'About us' })
    } catch (error) {
      console.log(error);
}};                                                                                      

const movie_create = (req,res)=>{
    try {
      res.render('create', {title: 'new movie' })
    } catch (error) {
      console.log(error);
}};

const movie_get = (req,res)=>{
    let movies = moviesDatabase.find((c)=> {return c.id ===  parseInt(req.params.id)})
    try {
      res.render('movieDetail',{title: 'detail', movies })
    } catch (error) {
      console.log(error);
}};

const movie_post = (req,res)=>{
    let movies = {
        id : moviesDatabase.length + 1,
        title : req.body.title,
        release_date: req.body.release_date,
        original_language: req.body.original_language,
        popularity: req.body.popularity,
        overview: req.body.overview
    }
    moviesDatabase.push(movies);
    try {
      res.redirect(301,'/');
    } catch (error) {
      console.log(error);
}};

const movie_delete = (req,res)=>{
    let movies = moviesDatabase.find((c)=> {return c.id ===  parseInt(req.params.id)});
    let index = moviesDatabase.indexOf(movies)
    moviesDatabase.splice(index, 1)
    try {
        res.json({redirect : '/'})
    } catch (error) {
        console.log(error)
    }
};


module.exports = {
    movie_index,
    movie_about,
    movie_create,
    movie_get,
    movie_post,
    movie_delete
}