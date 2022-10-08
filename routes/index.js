const router = require('express').Router();
const users = require('./users');
const category = require('./category');
const products = require('./products');


router.use('/users', users);
router.use('/category', category);
router.use('/products', products);


module.exports  = router;