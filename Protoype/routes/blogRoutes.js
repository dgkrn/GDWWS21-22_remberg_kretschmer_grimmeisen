const express = require('express');
const Blog = require('../models/blog');
const Anzahl = require('../models/anzahl');

const router = express.Router();

// Ausgabe einer Liste aller Routen
router.get('/routes', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Routes', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        });
});

//  Erstellen einer neuen Route; Update der Anzahl Datenbank, dass eine Route mehr im System hinterlegt ist (aus title: String; snippet: String (Link zur .GPX Datei); body: String) 
router.post('/routes', (req, res) => { 
    const blog = new Blog(req.body);
    var count = 0;
    Anzahl.findOne({id: 1})
    .then((result) => {
        count = result.anzahl;
        Blog.find()
        .then((result) => {
                count = count + 1;
                blog.enumId = count;
                blog.save()
                    .then((result) => {
                        Anzahl.findOneAndUpdate({id: 1}, {anzahl: count})
                        .then( (result) => {
                            res.write('Die Route ist nun in RoutenID: ' + count + ' angelegt worden.');
                            res.end();
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

// nur front end; Aufrufen einer Seite zum Erstellen einer neuen Route 
router.get('/route/create', (req, res) => {
    res.render('create', { title: 'Create a new Route'});
});

// Aufrufen der XML Datei der Route, welche mit der ID spezifiziert wurde
router.get('/routes/:id/map', (req, res) => {
    const id = req.params.id;
    Blog.findOne({enumId: id})
        .then((result) => {
            res.redirect(result.snippet)
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render( '404', { title: 'Route not found' });
        });
});

// Zugriff auf Routen mit Front End Karte des Webservices, welcher mit der ID spezifiziert wurde
router.get('/routes/:id', (req, res) => {
    const id = req.params.id;
    Blog.findOne({enumId: id})
        .then((result) => {
            res.render('map', {blog: result , title: result.title});
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render( '404', { title: 'Route not found' });
        });
});

// Löschen eines ausgewählten Eintrags, welcher mit der ID spezifiziert wurde
router.delete('/routes/:id', (req, res) => {
    const id = req.params.id;

    Blog.findOneAndDelete({enumId: id})
        .then((result) => {
            res.json({ redirect: '/routes' });
         })
        .catch((err) => {
            console.log(err);
        });
});

// Export der Router "Informationen"
module.exports = router;