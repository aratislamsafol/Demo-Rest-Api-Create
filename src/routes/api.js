const express = require("express");
const router = express.Router();
const HelloController = require('../controllers/HelloController');

router.get("/hello-get", HelloController.Hello1);
router.post("/hello-post", HelloController.Hello2);

module.exports = router;