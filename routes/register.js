const express = require('express');
const {request, response} = require('express');
const fs = require('fs');
const router = express.Router();
const USERS_FILE = 'users.json';
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('register', {title: 'Express'});
});

router.post('/', function (req, res, next) {

    const {email, password, confirmPassword} = req.body;
    if (password !== confirmPassword) {
        res.render('register', {error: 'Password don\'t match'});
    }

    const data = fs.readFileSync(USERS_FILE)
    const users = JSON.parse(data)
    users.push({email, password, confirmPassword});
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), function (err) {
    })

    res.render('register', {title: 'Express'});
});

module.exports = router;