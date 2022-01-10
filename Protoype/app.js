const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const Blog = require('./models/blog');
const Comment = require('./models/commentary');
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


//middleware & static files
/*
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});
*/
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
    });


app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('61d42634f200bca039a0e4b4')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

//routes
app.get('/', (req, res) => {
    /*
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', { root: __dirname});
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs});
    */
   res.redirect('/routes');
});

app.get('/about', (req, res) => {
    //res.send('<p>home page</p>');
    //res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', { title: 'About'});
});

app.get('/map', (req, res) => {
    Blog.findById('61d964758dcce026552ae33c')
        .then((result) => {
            res.render('map', { title: 'The Map', blog: result});
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render( '404', { title: 'Map not found' });
        });
    
});

app.get('/map/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            Comment.find().sort({ createdAt: -1 })
            .then((result2) => {
                res.render('map', {blog: result , title: result.title, comments: result2});
            })
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render( '404', { title: 'Blog not found' });
        });
});

app.delete('/map/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs'});
         })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/route', (req, res) => {
    res.render('route', { title: 'Route'});
});

app.get('/comment', (req, res) => {
    res.render('createComment', { title: 'Kommentar erstellen'});
});

app.get('/comment/:id', (req, res) => {
    id= req.params.id;
    res.render('createComment', { title: 'Kommentar erstellen', id: id});
});

app.post('/comment/:id', (req, res) => { 
    const comment = new Comment(req.body);
    comment.id= req.params.id;

    comment.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
});


app.get('/comments', (req, res) => {
    Comment.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('showComments', { title: 'All Comments', comments: result })
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    Comment.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('showComments', { title: 'All Comments', comments: result, map_id : id})
        })
        .catch((err) => {
            console.log(err);
        });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//blog routes
app.use(blogRoutes);

// 404 pages (MUSS am Ende der Klasse stehen!!!)
app.use((req, res) => {
    //res.sendFile('./views/404.html', { root: __dirname});
    res.render('404', { title: '404'});
});