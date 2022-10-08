const router = require('express').Router();

const {
    addSales,
    getSales,
    getSale,
    cancelSale
} = require('../controllers/sales');


router.get('/', getSales)
router.get('/:id', getSale)
router.post('/addSales', addSales);
router.patch('/:id', cancelSale);



module.exports = router;