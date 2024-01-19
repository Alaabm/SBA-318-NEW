const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.use((req, res, next) => {
    console.log('Request made to /users');
    next();
});

router.route('/')
        .get((req, res) => {
            res.json(users);
        })
        // .get((req, res) => {
        //     const name = req.params.name;
        //     res.json(req.params.name);
        // })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })


module.exports = router;

// router
//   .route('/') // localhost:3000/users
//     .get((req, res) => {
//     res.send('This a is GET request to get the user');
//     })
//     .post((req, res) => {
//     res.send('This a is POST request to create the user');
//   });

// router.get('/:userID/profile/:data', (req, res) => {
//   res.send(req.params);
// });