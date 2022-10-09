const router = require('express').Router();
const auth = require('../config/auth');

const {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

router.get('/',auth.required, getProducts)
router.post('/addProduct',auth.isAdmin, addProduct);
router.patch('/:id', auth.isAdmin, updateProduct);
router.patch('/:id',auth.isAdmin, deleteProduct);

module.exports = router;