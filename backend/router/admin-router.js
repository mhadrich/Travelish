const express = require("express");
const route = express.Router();

//const {db,admin } = require('../models'); 
//const db =require ("./../models/index")
const md = require ("./../models")
route.post("/createAdmin", (req, res) => {
 md.Admin.create({
  userName: req.body.userName , 
  password : req.body.password , 
  email : req.body.email , 
  role : req.body.role
 })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
})

route.get("/getOneAdmin/:id", (req, res) => {
  md.Admin.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

route.get("/getAllAdmins", (req, res) => {
  md.Admin.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

route.put("/updateOneAdmin/:id", (req, res) => {
  md.Admin.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

route.delete("/deleteOneAdmin/:id", (req, res) => {
  md.Admin.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
})

module.exports = route;
