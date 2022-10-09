const router = require('express').Router();
const auth = require('../config/auth');


const {
    signUp,
    getUsers,
    updateUser,
    deleteUser,
    logIn
} = require('../controllers/users');

router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.get('/',auth.isAdmin, getUsers);
router.patch('/:id', auth.required, updateUser);
router.patch('/delete/:id',auth.isAdmin,  deleteUser);

module.exports = router;