const router = require("express").Router();
const p = require("../controllers/product.controller");

router.get("/",p.get);
router.post("/",p.create);
router.delete("/:id",p.delete);


module.exports = router;
