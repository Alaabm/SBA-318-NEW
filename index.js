const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("Hello World! This is my server!")
});


// const users = require('./data/users');
// const posts = require('./data/posts');

// //Middleware
// app.use((req, res, next) => {

//     next();
// })

// app.use((req, res, next) => {
//     res.status(404).json({error: 'Resource Not Found'})
// });


// //Route handlers
// app.route('/api/users')
//     .get((req, res) => {
//         res.json(users);
//     })
//     .post((req, res) => {

//     })

// app.route('/api/posts') 
//     .get((req, res) => {

//     })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })

app.listen(PORT, () => {
        console.log(`All Aboard the Express Ship: ${PORT}`);
    });


