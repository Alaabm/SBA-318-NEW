const express = require('express');
const app = express();
const PORT = 3000;

const users = require('./routes/users');
app.use("/data/users", users);

const posts = require('./routes/posts');
app.use("/data/posts", posts);

const comments = require('./routes/comments');
app.use("/data/comments", comments);



//Display "Hello World... on localhost:3000"
app.get("/", (req, res) =>{
    res.send("Hello World! This is my server!!!")
});

////////////Middleware/////////////

////////////Function///////////////
// app.use((req, res, next) => {
//     next();
// })
////////////////////////////////////
//Middleware
app.use(express.json());

const data = [
    {
        title: '1',
        content: '1a',
    },
    {
        title: '2',
        content: '2a',
    },
    {
        title: '3',
        content: '3a',
    },
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/posts', (req, res) => {
    res.send(data);
});

app.get('/posts/new', (req, res) => {
    res.send(`
        <form action="/posts" method="POST" >
        Title: <input type="text" name="title" /> <br />
        Content: <input type="text" name="content" /> <br />
        <input type="submit"/>
        </form>
    `);
});

  // The form above is making a request to this route
app.post('/posts', (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.redirect('/posts');
});






app.listen(PORT, () => {
        console.log(`All Aboard the Express Ship: ${PORT}`);
    });




/////////Middleware API KEY////////////
// apiKeys = ["perscholas", "fun-Fact"];

// app.use("../data", function(req, res, next) {
//     var key = req.query["api-key"];

//     if(!key) next(error(400, "API Key Required"));
//     if(apiKeys.indexOf(key) === -1) next(error(400, "Invalid API Key"));

//     req.key = key;
//     next();
// });


//Middleware
// const logger = ((req, res, next) => {
//     console.log(`Request was made at: ${req.method} ${req.url}`)
//     console.log(1);
//     next();
// })

// const validateData = ((req, res, next) => {
//     const num1 =parseInt(req.params.num1)
//     const num2 = parseInt(req.params.num2)

//     if (num1 === NaN | num2 ==-NaN) {
//         res.status(400).send("The 2 params must be numbers!")
//     }
//     next()
// });

// app.use(logger);





