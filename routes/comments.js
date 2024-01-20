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

//get indiviual comments 
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const comment = comments.find((u) => u.id == req.params.id);
    console.log(comment);
    res.json(comment);
})


router.delete('/:id', (req, res, next) => {
    const comment = comments.find((u, i) => {
    if (u.id == req.params.id) {
        comments.splice(i, 1);
        return true;
    }
    });

    if (comment) res.json(comment);
    else next();
    });

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