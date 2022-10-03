const router = require('express').Router();

const {
    signUp,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/users');


router.get('/', getUsers)
router.post('/signUp', signUp);

router.patch('/:id', updateUser);
router.patch('/:id', deleteUser);

//router.patch('/:id',auth.required, updateUser);
//router.put('/:id',auth.isAdmin, deleteUser);

module.exports = router;