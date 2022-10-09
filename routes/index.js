const router = require('express').Router();
const users = require('./users');
const category = require('./category');
const products = require('./products');
const sales = require('./sales');

router.get('/',(req,res)=>{
    res.json({'info':'welcome to API SALES!!!!'});
});

router.use('/users', users);
router.use('/category', category);
router.use('/products', products);
router.use('/sales', sales);

module.exports  = router;