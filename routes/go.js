const express = require("express");
const router = express.Router();

//http://localhost:8080/go/
router.get('/',function (req, res, next) {
    res.render('go')
});

/* Get*/
router.get('/do',function (req,res,next) {
    res.render('go')
});

module.exports = router;