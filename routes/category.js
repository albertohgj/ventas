const router = require('express').Router();
const auth = require('../config/auth');

const {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/category');

/**
 * @openapi
 * /category:
 *   get:
 *     description: obtener el listado de categorias
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - get category
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
router.get('/',auth.required,  getCategories);

/**
 * @openapi
 * /category/addCategory:
 *   post:
 *     description: Agregar categoria 
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - add category
 *     parameters:
 *        - name: ctCt_descripcion
 *          in: body
 *          schema:
 *              type: string
 *              description: descripcion de la categoria
 *              required: true
 *        - name: ctCt_activo
 *          in: body
 *          schema:
 *              type: integer
 *              description: estatus de la categoria
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
router.post('/addCategory',auth.isAdmin,  addCategory);

/**
 * @openapi
 * /category/:id:
 *   patch:
 *     description: actualizar categoria de productos
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - update category
 *     parameters:
 *        - name: ctCt_descripcion
 *          in: body
 *          schema:
 *              type: string
 *              description: descripcion de la categoria
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
router.patch('/:id',auth.isAdmin,  updateCategory);

/**
* @openapi
* /category/delete/:id:
*   patch:
*     description: borrado logico de categoria de producto
*     security: 
*       - Bearer: []
*     tags:
*       - delete category
*     parameters:
*        - name: ctCt_activo
*          in: body
*          schema:
*              type: integer
*              description: estatus de la categoria
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
router.patch('/delete/:id',auth.isAdmin,  deleteCategory);

module.exports = router;