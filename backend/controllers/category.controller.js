const Category = require("../models/category.model");

exports.get = (req,res)=>{
 Category.getAll((err,data)=>{
  res.send(data);
 });
};

exports.create=(req,res)=>{
 Category.create(req.body.name,()=>res.send("Created"));
};

exports.update=(req,res)=>{
 Category.update(req.params.id,req.body.name,()=>res.send("Updated"));
};

exports.delete=(req,res)=>{
 const id = req.params.id;

 const db = require("../config/db");

 db.query("DELETE FROM categories WHERE id=?", [id], (err)=>{
  if(err) return res.status(500).json(err);
  res.json({message:"Category deleted"});
 });
};
