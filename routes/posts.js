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