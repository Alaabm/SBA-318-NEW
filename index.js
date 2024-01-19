const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("Hello World! This is my server!!!")
});


const users = require('./data/users');
const posts = require('./data/posts');
const quotes = require('./data/quotes');

//Middleware

// app.use((req, res, next) => {
    
//     next();
// })



//Route handlers
//Greeting Handler (Ex. Hello, John Doe!)
// app.get("/greeting/data/users/:name", (req, res) =>{
//     const name = req.params.name;
//     res.send(`Hello ${name}!`);
// });

// app
// .route('/data/users')
//     .get((req, res) => {
//         res.send(req.params.users)
//     })
//     .post((req, res) => {

//     })

///////////////////////////
//Route Handler templates
//////////////////////////
//users route
app
.route('/data/users')
    .get((req, res) => {
        res.json(users);
    })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })

app.get("/data/users/:username", (req, res) => {
        res.send(req.params)
});

//posts route
app
.route('/data/posts') 
    .get((req, res) => {
        res.json(posts)
    })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })


//quotes route -static
app
.route('/data/quotes') 
    .get((req, res) => {
        res.json(quotes)
    })
//     .post((req, res) => {

//     })
//     .patch((req, res) => {

//     })
//     .delete((req, res) => {

//     })



app.listen(PORT, () => {
        console.log(`All Aboard the Express Ship: ${PORT}`);
    });


