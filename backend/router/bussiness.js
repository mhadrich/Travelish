const express = require("express");
const route = express.Router();
// const { db, bussiness } = require('../models/index.js'); 
const db =require ("./../models/index")


route.post("/createBussiness", (req, res) => {
 db.Bussiness.create({
    name:req.body.name,
    adresse:req.body.adresse,
    description:req.body.description,
    category:req.body.category,
    images:req.body.images,
    hours:req.body.hours,
    phone:req.body.phone,
    zone:req.body.zone,
    adminID:req.body.adminID

 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getOneBussiness/:id", (req, res) => {
  db.Bussiness.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getAllBussinesss", (req, res) => {
  db.Bussiness.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.put("/updateOneBussiness/:id", (req, res) => {
  db.Bussiness.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteOneBussiness/:id", (req, res) => {
  db.Bussiness.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
