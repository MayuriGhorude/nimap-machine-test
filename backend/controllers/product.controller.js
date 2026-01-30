const Product = require("../models/product.model");

exports.get = (req,res)=>{
 const page = parseInt(req.query.page)||1;
 const size = 10;
 const offset = (page-1)*size;

 Product.getPaginated(size,offset,(err,data)=>{
  if(err){
   console.log(err);
   return res.status(500).json(err);
  }
  res.json(data);
 });
};

exports.create=(req,res)=>{
 Product.create(req.body.name,req.body.category_id,(err)=>{
  if(err){
   console.log(err);
   return res.status(500).json(err);
  }
  res.json({message:"Product added"});
 });
};

exports.delete = (req,res)=>{
 const id = req.params.id;

 const db = require("../config/db");

 db.query("DELETE FROM products WHERE id=?", [id], (err)=>{
  if(err) return res.status(500).json(err);
  res.json({message:"Product deleted"});
 });
};

