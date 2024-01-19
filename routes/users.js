const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Request made to /users');
    next();
});

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

module.exports = router;