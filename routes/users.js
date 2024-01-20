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



router.route('/:new')
        .post((req, res, next) => {
            if (req.body.name && req.body.username && req.body.email) {
            if (users.find((u) => u.username == req.body.username)) {
                next(error(409, "Username Already Taken"));
            }
            const user = {
                id: users[users.length - 1].id + 1,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
            };
        
            users.push(user);
            res.json(users[users.length - 1]);
            } else next(error(400, "Insufficient Data"));
        });


router.route('/:id')
        //to get individual users
        .get((req, res, next) => {
            console.log(req.params.id);
            const user = users.find((u) => u.id == req.params.id);
            console.log(user);
            res.json(user);
            })
        //to delte user
        .delete((req, res, next) => {
            const user = users.find((u, i) => {
            if (u.id == req.params.id) {
                users.splice(i, 1);
                return true;
            }
            });

            if (user) res.json(user);
            else next();
            })
        //to update user
        .patch((req, res, next) => {
            const user = users.find((u, i) => {
            if (u.id == req.params.id) {
            for (const key in req.body) {
            users[i][key] = req.body[key];
            }
            return true;
            }
            });
            
            if (user) res.json(user);
            else next();
            })
        
        
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