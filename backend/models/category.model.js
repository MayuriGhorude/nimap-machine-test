const db = require("../config/db");

exports.getAll = cb => db.query("SELECT * FROM categories", cb);

exports.create = (name, cb) =>
  db.query("INSERT INTO categories(name) VALUES(?)", [name], cb);

exports.update = (id, name, cb) =>
  db.query("UPDATE categories SET name=? WHERE id=?", [name, id], cb);

exports.delete = (id, cb) =>
  db.query("DELETE FROM categories WHERE id=?", [id], cb);
