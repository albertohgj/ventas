const router = require('express').Router();
const users = require('./users');
const category = require('./category')

router.use('/users', users);
router.use('/category', category);


module.exports  = router;