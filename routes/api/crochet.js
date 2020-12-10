const express = require('express');
const router = express.Router();
const crochetCtrl = require('../../controllers/crochet');

router.get('/', crochetCtrl.crochetProject);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require("../../config/auth"));
// Adds checkAuth so if a user is NOT signed in or token is not valid, gives "Not Authorized" error.
// If user is valid, allows them to hit the route:
router.post("/", checkAuth, crochetCtrl.create);

// Restrict access so ONLY valid authenticated users can access the route:
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;

module.exports = router;