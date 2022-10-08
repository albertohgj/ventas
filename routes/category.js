const router = require('express').Router();

const {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/category');


router.get('/', getCategories)
router.post('/addCategory', addCategory);
router.patch('/:id', updateCategory);
router.patch('/:id', deleteCategory);



module.exports = router;