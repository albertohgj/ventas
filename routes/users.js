const router = require('express').Router();

const {
    signUp,
    getUsers
} = require('../controllers/users');

router.post('/signUp', signUp);
router.get('/', getUsers)

module.exports = router;