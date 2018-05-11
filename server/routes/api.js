const express = require('express');
const {Glass, User, Silverware, Wine} = require('../models');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

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
  Glass.findOneAndUpdate({glass: id}, {total: req.body.total}).then(glass => {
    res.json(glass)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/glass/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Glass.findOneAndUpdate({glass: id}, {par: req.body.par}).then(glass => {
    res.json(glass)
  }).catch(err => {
    res.json(err);
  });
});

router.get('/silver', (req, res) => {
  Silverware.find({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

router.post('/silver', (req, res) => {
  console.log(req.body)
  let silver = new Silverware(req.body)
  console.log(silver);
  Silverware.create(silver).then(silver => {
    let silverObj = {
      silver: data
    }
    res.json(silverObj);
  }).catch(err => {
    res.json(err);
  });
});

router.post('/silver/:id', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Silverware.findOneAndUpdate({silver: id}, {total: req.body.total}).then(silver => {
    res.json(silver)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/silver/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Silverware.findOneAndUpdate({silver: id}, {par: req.body.par}).then(item => {
    res.json(item)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/wine', (req, res) => {
  console.log(req.body)
  let wine = new Wine(req.body)
  console.log(wine);
  Wine.create(wine).then(wine => {
    let wineObj = {
      wine: data
    }
    res.json(wineObj);
  }).catch(err => {
    res.json(err);
  });
});

router.post('/wine/:id', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Wine.findOneAndUpdate({wine: id}, {total: req.body.total}).then(wine => {
    res.json(wine)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/wine/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Wine.findOneAndUpdate({wine: id}, {par: req.body.par}).then(item => {
    res.json(item)
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
