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
  Glass.find({}).then(data => {
    console.log(data);
    res.json(data);
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
    res.json(glassObj);
  }).catch(err => {
    res.json(err);
  });
});

router.post('/glass/:id', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Glass.findOneAndUpdate({_id: id}, {total: req.body.total}).then(glass => {
    res.json(glass)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/glass/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Glass.findOneAndUpdate({_id: id}, {par: req.body.par}).then(glass => {
    res.json(glass)
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
