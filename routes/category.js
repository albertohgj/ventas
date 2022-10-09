const router = require('express').Router();
const auth = require('../config/auth');

const {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/category');

router.get('/',auth.required,  getCategories);
router.post('/addCategory',auth.isAdmin,  addCategory);
router.patch('/:id',auth.isAdmin,  updateCategory);
router.patch('/:id',auth.isAdmin,  deleteCategory);

module.exports = router;