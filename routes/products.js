const router = require('express').Router();

const {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/products');


router.get('/', getProducts)
router.post('/addProduct', addProduct);
router.patch('/:id', updateProduct);
router.patch('/:id', deleteProduct);

module.exports = router;