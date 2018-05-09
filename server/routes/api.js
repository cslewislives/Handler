const express = require('express');
const {Glass, User} = require('../models');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

// db.User.create({firstName: "Josh",
// 	lastName: "Lewis",
// 	username: "cslewislives",
// 	password: "20drama09"}).then(user => {
//     console.log('user');
//     res.json(user);
//   }).catch(err => {
//     console.log(err);
//   });

router.get('/glass', (req, res) => {
  db.Glass.find({}).then(data => {
    let glassObj = {
      glasses: data
    }
    console.log(glassObj);
    res.json(glassObj);
  }).catch(err => {
    console.log(err);
  });
});

router.post('/glass', (req, res) => {
  console.log(req.body)
  let glass = new Glass(req.body)
  console.log(glass);
  Glass.create(glass).then(glass => {
    let glassObj = {
      glass: data
    }
    res.end();
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
