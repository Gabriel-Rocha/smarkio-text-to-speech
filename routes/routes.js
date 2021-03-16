const express = require('express');
const router = express.Router();
const Comments = require('../controllers/commentsControllers')

router.get("/comments-all", Comments.getAll)
router.get("/comments", Comments.index)
router.post("/comments", Comments.store)


module.exports = router;