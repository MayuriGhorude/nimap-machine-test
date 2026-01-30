const router = require("express").Router();
const c = require("../controllers/category.controller");

router.get("/",c.get);
router.post("/",c.create);
router.put("/:id",c.update);
router.delete("/:id",c.delete);


module.exports = router;
