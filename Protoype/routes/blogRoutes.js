const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        });
});


router.post('/blogs', (req, res) => { 
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/route/create', (req, res) => {
    res.render('create', { title: 'Create a new Route'});
});

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('map', {blog: result , title: result.title});
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render( '404', { title: 'Blog not found' });
        });
});


router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
         })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;