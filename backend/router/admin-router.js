const express = require("express");
const bcrypt = require("bcrypt")
const route = express.Router();
const { sequelize, DataTypes } = require('./../models'); 
const md = require ("./../models/"); 
const jwt = require("jsonwebtoken");
const admin = require("../models/admin");


const Admin = md.Admin; 
console.log(Admin,"admin");


route.post("/register", async (req, res) => {
  try {
    const { Admin } = md; 

    const existingAdmin = await Admin.findOne({ where: { email: req.body.email } });
    if (existingAdmin) {
      return res.status(400).json({ error: "This email is already in use." });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = await Admin.create({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
    });
    

    res.status(201).json({ admin: newAdmin, msg: "added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create admin" });
  }
})


route.post("/login", async (req, res) => {
  try {
    const privateKey = "1015@sdggsds999sds}%%%%%";
    const exist = await Admin.findOne({ where: { email: req.body.email } });

    if (!exist) {
      return res.status(400).json({ error: "we don't have this email in our database " });
    } else {
      const comparing = await bcrypt.compare(req.body.password, exist.password);

      if (comparing) {
        const token = jwt.sign(
          { id: exist.id, userName: exist.userName },
          privateKey,
          { expiresIn: "9999999012005120h" }
        );

        return res.status(200).json({ token }); 
      } else {
        return res.status(401).json({ error: "Invalid email or password" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



route.get("/getOneAdmin/:id", (req, res) => {
  Admin.findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

route.get("/getAllAdmins", (req, res) => {
  Admin.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

route.put("/updateOneAdmin/:id", (req, res) => {
  Admin.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

route.delete("/deleteOneAdmin/:id", (req, res) => {
  Admin.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = route;
