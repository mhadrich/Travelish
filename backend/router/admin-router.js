const express = require("express");
const bcrypt = require("bcrypt")
const route = express.Router();
const { sequelize, DataTypes } = require('./../models'); 
const md = require ("./../models/"); 
const admin = require("../models/admin");
const jwt = require("jsonwebtoken")


const Admin = md.Admin; 
console.log(Admin,"admin");


const privateKey = "1015@sdggsds999sds}%%%%%";

verifyToken=(req,res,next)=>{
  const token = req.headers.authorization
  if(!token){
    res.status(400).json({msg:"access rejected.....!!!!!"})
  }

try {
  jwt.verify(token,privateKey)
  next()
}catch(err){
  res.status(400).json({msg:err})
}
  
}


route.post("/register" , async (req, res) => {
  try {
    const { Admin } = md; 

    const existingAdmin = await Admin.findOne({ where: { email: req.body.email } });
    if (existingAdmin) {
      return res.status(400).json({ error: "This email is already in use." });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    
    let roleData = {}; 

    const newAdmin = await Admin.create({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role === "0" ? 'admin' : 'user' 
    });
    
    roleData[newAdmin.role] = newAdmin; 

    res.status(201).json(roleData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create admin" });
  }
})


route.post("/login" ,  async (req, res) => {
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



route.get("/getOneAdmin/:id", verifyToken ,  (req, res) => {
  Admin.findOne({ where: { id: req.params.id }},{includes : [Admin.id]})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getAllAdmins", verifyToken , (req, res) => {
  Admin.findAll({includes:req.body.authorization})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.put("/updateOneAdmin/:id", verifyToken ,  (req, res) => {
  Admin.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.delete("/deleteOneAdmin/:id", verifyToken , (req, res) => {
  Admin.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = route;
