const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

router.use((req, res, next) => {
    console.log('Request made to /users');
    next();
});

router.route('/')  
    .get((req, res) => {
        res.json(comments)
    })
    // .post((req, res) => {

    // })
    // .patch((req, res) => {

    // })
    // .delete((req, res) => {

    // })

module.exports = router;

//quotes route -static
// app
// .route('/data/quotes') 
//     .get((req, res) => {
//         res.json(quotes)
//     })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })