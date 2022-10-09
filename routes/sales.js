const router = require('express').Router();
const auth = require('../config/auth');


const {
    addSales,
    getSales,
    getSale,
    cancelSale
} = require('../controllers/sales');


router.get('/',auth.required, getSales)
router.get('/:id',auth.required, getSale)
router.post('/addSales',auth.required, addSales);
router.patch('/:id',auth.isAdmin, cancelSale);

module.exports = router;