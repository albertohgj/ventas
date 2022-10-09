const router = require('express').Router();
const auth = require('../config/auth');


const {
    signUp,
    getUsers,
    updateUser,
    deleteUser,
    logIn
} = require('../controllers/users');

/**
 * @openapi
 * /users/signUp:
 *   post:
 *     description: Alta de usuarios
 *     tags:
 *       - users sign up
 *     parameters:
 *        - name: usro_nmbrUsro
 *          in: body
 *          schema:
 *              type: string
 *              description: nombre de usuario
 *              required: true
 *        - name: usro_password
 *          in: body
 *          schema:
 *              type: string
 *              description: clave de acceso 
 *              required: true
 *        - name: usro_idCtlgTipoUsro
 *          in: body
 *          schema:
 *              type: string
 *              description: tipo de usuario (1 admin, 2 usuario)
 *              required: true
*        - name: usro_email
 *          in: body
 *          schema:
 *              type: string
 *              description: correo electónico del usuario
 *              required: true
 *        - name: usro_usroCrcn
 *          in: body
 *          schema:
 *              type: string
 *              description: usuario que crea
 *              required: true
 *        - name: usro_nombre
 *          in: body
 *          schema:
 *              type: string
 *              description: nombre completo del usuario
 *              required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.post('/signUp', signUp);
/**
 * @openapi
 * /users/logIn:
 *   post:
 *     description: logIn de usuarios
 *     tags:
 *       - users logIn up
 *     parameters:
 *        - name: usro_nmbrUsro
 *          in: body
 *          schema:
 *              type: string
 *              description: user name
 *              required: true
*        - name: usro_password
 *          in: body
 *          schema:
 *              type: string
 *              description: user password
 *              required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.post('/logIn', logIn);

/**
 * @openapi
 * /users/:
 *   get:
 *     description: Consulta de usuarios
 *     tags:
 *       - get users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/',auth.isAdmin, getUsers);
/**
 * @openapi
 * /users/:
 *   patch:
 *     description: Actualización de usuarios
 *     tags:
 *       - update users
 *     parameters:
 *        - name: id
 *          in: querystring
 *          schema:
 *              type: string
 *              description: user id
 *              required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.patch('/:id', auth.required, updateUser);
/**
 * @openapi
 * /users/delete:
 *   patch:
 *     description: Borrado lógico de usuarios
 *     tags:
 *       - delete logical users
 *     parameters:
 *        - name: id
 *          in: querystring
 *          schema:
 *              type: string
 *              description: user id
 *              required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.patch('/delete/:id',auth.isAdmin,  deleteUser);

module.exports = router;