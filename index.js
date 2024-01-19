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

////////New Users Form//////////
const data = [
    {
        id:1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com'
    },
    {
        id:2,
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@example.com'
    },
    {
        id:3,
        name: 'Bob Johnson',
        username: 'bobjohnson',
        email: 'bob@example.com'
    },
    {
        id:4,
        name: 'Alice Brown',
        username: 'alicebrown',
        email: 'alice@example.com'
    },
    {
        id:5,
        name: 'Charlie Davis',
        username: 'charliedavis',
        email: 'charlie@example.com'
    },
    {
        id:6,
        name: 'Emily White',
        username: 'emilywhite',
        email: 'emily@example.com'
    }
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', (req, res) => {
    res.send(data);
});

app.get('/users/new', (req, res) => {
    res.send(`
        <form action="/users" method="POST" >
        id: <input type="text" name="id" /> <br />
        name: <input type="text" name="name" /> <br />
        username: <input type="text" name="username" /> <br />
        email: <input type="email" name="email" /> <br />
        <input type="submit"/>
        </form>
    `);
});

  // The form above is making a request to this route for users
app.post('/users', (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.redirect('/users');
});

///////New Post Form////////
const dataPosts = [
        {
            id: 1,
            userId:1,
            content: "A group of pandas is called an embarrassment."
        },
        {
            id: 2,
            userId:1,
            content: "Honeybees can recognize human faces."
        },
        {
            id: 3,
            userId:1,
            content: 'The longest word with only one vowel is "strengths".'
        },
        {
            id: 4,
            userId:2,
            content: "The world's largest pizza was over 1261 square meters (13,580.28 square feet)."
        },
        {
            id: 5,
            userId:2,
            content: "The world's smallest mammal is the bumblebee bat."
        },
        {
            id: 6,
            userId:2,
            content: 'The original name for the butterfly was "flutterby."'
        },
        {
            id: 7,
            userId:3,
            content: "The average person will spend six months of their life waiting for red lights to turn green."
        },
        {
            id: 8,
            userId:3,
            content: "The largest recorded snowflake was 15 inches in diameter."
        },
        {
            id: 9,
            userId:3,
            content: "The world's largest desert is not the Sahara, but Antarctica."
        },
        {
            id: 10,
            userId:4,
            content: "Bananas are berries, but strawberries aren't."
        },
        {
            id: 11,
            userId:4,
            content: 'A "jiffy" is an actual unit of time, equal to 1/100th of a second.'
        },
        {
            id: 12,
            userId:4,
            content: "The inventor of the frisbee was turned into a frisbee. Walter Morrison's ashes were molded into frisbees after he died."
        },
        {
            id: 13,
            userId:5,
            content: "Octopuses have three hearts and blue blood."
        },
        {
            id: 14,
            userId:5,
            content: "Cows have best friends and can become stressed when they are separated."
        },
        {
            id: 15,
            userId:5,
            content: 'A group of flamingos is called a "flamboyance."'
        },
        {
            id: 16,
            userId:6,
            content: "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron."
        },
        {
            id: 17,
            userId:6,
            content: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."
        },
        {
            id: 18,
            userId:6,
            content: "A crocidile can't stick its tongue out."
        }
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/posts', (req, res) => {
    res.send(dataPosts);
});

app.get('/posts/new', (req, res) => {
    res.send(`
        <form action="/posts" method="POST" >
        id: <input type="text" name="id" /> <br />
        userId: <input type="text" name="userId" /> <br />
        content: <input type="text" name="content" /> <br />
        <input type="submit"/>
        </form>
    `);
});

  // The form above is making a request to this route for posts
app.post('/posts', (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.redirect('/posts');
});


////////New Comment Form//////////
const dataComments = [
    {
        id: 1,
        userId:1,
        comment: "lorem ipsum dolor sit amet, consectetur."
    },
    {
        id: 2,
        userId:2,
        comment: "lorem ipsum."
    },
    {
        id: 3,
        userId:3,
        comment: "lorem ipsum dolor."
    },
    {
        id: 4,
        userId:4,
        comment: "lorem ipsum dolor sit amet."
    },
    {
        id: 5,
        userId:5,
        comment: "lorem ipsum dolor sit amet, consectetur."
    },
    {
        id: 6,
        userId:6,
        comment: "lorem ipsum."
    },
    {
        id: 7,
        userId:1,
        comment: "lorem ipsum dolor."
    },
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/comments', (req, res) => {
    res.send(dataComments);
});

app.get('/comments/new', (req, res) => {
    res.send(`
        <form action="/users" method="POST" >
        id: <input type="text" name="id" /> <br />
        userId: <input type="text" name="userId" /> <br />
        comment: <input type="text" name="comments" /> <br />
        <input type="submit"/>
        </form>
    `);
});

// The form above is making a request to this route comments
app.post('/comments', (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.redirect('/comments');
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





