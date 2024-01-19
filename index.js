const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("Hello World! This is my server!!!")
});


const users = require('./routes/users');
app.use("/data/users", users);

const posts = require('./routes/posts');
app.use("/data/posts", posts);

const quotes = require('./routes/quotes');
app.use("/data/quotes", quotes);



//Middleware

app.use(express.json());

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
app.listen(PORT, () => {
        console.log(`All Aboard the Express Ship: ${PORT}`);
    });


