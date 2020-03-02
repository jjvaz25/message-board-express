const express = require('express');
var router = express.Router();

/* GET new form */
router.get('/', (req, res, next) => {
  res.render('form', {formTitle: 'Create a new post'})
});


module.exports = router;
