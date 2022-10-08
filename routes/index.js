const router = require('express').Router();
const users = require('./users');
const category = require('./category');
const products = require('./products');
const sales = require('./sales');


router.use('/users', users);
router.use('/category', category);
router.use('/products', products);
router.use('/sales', sales);


module.exports  = router;