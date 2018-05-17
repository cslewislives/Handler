const express = require('express');
const {Glass, User, Silverware, Wine, Employee, Regular} = require('../models');

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
  Glass.findOneAndUpdate({item: id}, {totalDay: req.body.total}).then(glass => {
    res.json(glass)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/glass/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Glass.findOneAndUpdate({item: id}, {parDay: req.body.par}).then(glass => {
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
  Silverware.findOneAndUpdate({item: id}, {totalDay: req.body.total}).then(silver => {
    res.json(silver)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/silver/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Silverware.findOneAndUpdate({item: id}, {parDay: req.body.par}).then(item => {
    res.json(item)
  }).catch(err => {
    res.json(err);
  });
});

router.get('/wine', (req, res) => {
  Wine.find({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

router.post('/wine', (req, res) => {
  console.log(req.body)
  let {item, total, distributor} = req.body;
  let newWine = {
    item: item,
    total: total,
    distributor: distributor,
    par: 6
  }
  let wine = new Wine(newWine);
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
  Wine.findOneAndUpdate({item: id}, {total: req.body.total}).then(wine => {
    res.json(wine)
  }).catch(err => {
    res.json(err);
  });
});

router.post('/wine/:id/par', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Wine.findOneAndUpdate({item: id}, {par: req.body.par}).then(item => {
    res.json(item)
  }).catch(err => {
    res.json(err);
  });
});

router.get('/employees', (req, res) => {
  Employee.find({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

router.post('/employees', (req, res) => {
  console.log(req.body)
  let employee = new Employee(req.body)
  console.log(employee);
  Employee.create(employee).then(employee => {
    let employeeObj = {
      employee: data
    }
    res.json(employeeObj);
  }).catch(err => {
    res.json(err);
  });
});

router.get('/regulars', (req, res) => {
  Regular.find({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    console.log(err);
  });
});

router.post('/regulars', (req, res) => {
  console.log(req.body)
  let regular = new Regular(req.body)
  console.log(regular);
  Regular.create(regular).then(regular => {
    let regularObj = {
      regular: data
    }
    res.json(regularObj);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
