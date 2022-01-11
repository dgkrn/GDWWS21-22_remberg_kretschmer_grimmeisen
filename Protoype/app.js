const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const Blog = require('./models/blog');
const Comment = require('./models/commentary');
const Anzahl = require('./models/anzahl');
const { result } = require('lodash');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://lucaremb:01111999@cluster0.vjkxa.mongodb.net/note-js?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
//register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
   res.redirect('/routes');
});

app.get('/routes/:id/comment', (req, res) => {
    id= req.params.id;
    res.render('createComment', { title: 'Kommentar erstellen', id: id});
});

app.post('/routes/:id/comment', (req, res) => { 
    const comment = new Comment(req.body);
    var count = 0;
    Anzahl.findOne({id: 2})
    .then((result) => {
        count = result.anzahl;
        Comment.find()
        .then((result) => {
                comment.enumId = count + 1;
                comment.id= req.params.id;
                comment.save()
                    .then((result) => {
                        count = count + 1;
                        Anzahl.findOneAndUpdate({id: 2}, {anzahl: count})
                        .then( (result) => {
                            res.redirect('/routes');
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
        })
        .catch((err) => {
            console.log(err);
        });
     })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/routes/:id/comment/:comment_id', (req, res) => {
    const id = req.params.id;
    const comment_id = req.params.comment_id;
    Comment.findOne({enumId: comment_id, id: id})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.delete('/routes/:id/comment/:comment_id', (req, res) => {
    const id = req.params.id;
    const comment_id = req.params.comment_id;
    Comment.findOneAndDelete({enumId: comment_id})
        .then((result) => {
            res.json({ redirect: '/routes' });
        })
        .catch((err) => {
            console.log(err);
        });
});

//blog routes
app.use(blogRoutes);

// 404 pages (MUSS am Ende der Klasse stehen!!!)
app.use((req, res) => {
    //res.sendFile('./views/404.html', { root: __dirname});
    res.render('404', { title: '404'});
});