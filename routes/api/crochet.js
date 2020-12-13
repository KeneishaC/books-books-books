const express = require('express');
const router = express.Router();
const crochetCtrl = require('../../controllers/crochet');

router.get('/', crochetCtrl.crochetProject);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// router.use(require("../../config/auth"));
router.post("/", crochetCtrl.create);
router.delete("/:id", crochetCtrl.delete)
router.put("/:id", crochetCtrl.update)
router.get("/:id", crochetCtrl.show)
router.get('/id', crochetCtrl.showOne)



// Restrict access so ONLY valid authenticated users can access the route:
// function checkAuth(req, res, next) {
//   if (req.user) return next();
//   return res.status(401).json({ msg: "Not Authorized" });
// }


module.exports = router;