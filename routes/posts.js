const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

router.use((req, res, next) => {
    console.log('Request made to /users');
    next();
});

router.route('/')  
    .get((req, res) => {
        res.json(posts)
    })


//get indiviual post
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const post = posts.find((u) => u.id == req.params.id);
    console.log(post);
    res.json(post);
})

router.delete('/:id', (req, res, next) => {
    const post = posts.find((u, i) => {
    if (u.id == req.params.id) {
        posts.splice(i, 1);
        return true;
    }
    });

    if (post) res.json(post);
    else next();
    });


    // .post((req, res) => {

    // })
    // .patch((req, res) => {

    // })
    // .delete((req, res) => {

    // })


module.exports = router;

//index.js
//posts route
// app
// .route('/data/posts') 
//     .get((req, res) => {
//         res.json(posts)
//     })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })