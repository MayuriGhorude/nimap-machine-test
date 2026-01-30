const db = require("../config/db");

exports.getPaginated = (limit, offset, cb) => {
 const sql = `
 SELECT 
 p.id AS ProductId,
 p.name AS ProductName,
 IFNULL(c.id,0) AS CategoryId,
 IFNULL(c.name,'') AS CategoryName
 FROM products p
 LEFT JOIN categories c ON p.category_id = c.id
 LIMIT ? OFFSET ?
 `;

 db.query(sql,[limit,offset],(err,result)=>{
  cb(err,result);
 });
};

exports.create = (name,cat,cb)=>{
 db.query(
  "INSERT INTO products(name,category_id) VALUES(?,?)",
  [name,cat],
  cb
 );
};
