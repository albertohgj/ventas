const router = require('express').Router();
const auth = require('../config/auth');

const {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

/**
 * @openapi
 * /products:
 *   get:
 *     description: obtener el listado de productos
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - get products
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
router.get('/',auth.required, getProducts)

/**
 * @openapi
 * /products/addProduct:
 *   post:
 *     description: Agregar artículo a el listado de productos
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - add products
 *     parameters:
 *        - name: ctPr_descripcion
 *          in: body
 *          schema:
 *              type: string
 *              description: descripcion del producto
 *              required: true
 *        - name: ctPr_idCtlgCtgr
 *          in: body
 *          schema:
 *              type: integer
 *              description: categoría del producto
 *              required: true
 *        - name: ctPr_costo
 *          in: body
 *          schema:
 *              type: decimal
 *              description: costo del producto
 *              required: true
 *        - name: ctPr_activo
 *          in: body
 *          schema:
 *              type: decimal
 *              description: estatus del producto
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
router.post('/addProduct',auth.isAdmin, addProduct);

/**
 * @openapi
 * /products/:id:
 *   patch:
 *     description: Actualizar articulo del listado de productos
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - update product
 *     parameters:
 *        - name: id
 *          in: querystring
 *          schema:
 *              type: integer
 *              description: Id del producto
 *              required: true
 *        - name: ctPr_descripcion
 *          in: body
 *          schema:
 *              type: string
 *              description: descripcion del producto
 *              required: true
 *        - name: ctPr_idCtlgCtgr
 *          in: body
 *          schema:
 *              type: integer
 *              description: categoría del producto
 *              required: true
 *        - name: ctPr_costo
 *          in: body
 *          schema:
 *              type: decimal
 *              description: costo del producto
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
router.patch('/:id', auth.isAdmin, updateProduct);

/**
 * @openapi
 * /products/delete/id:
 *   patch:
 *     description: borrado lógido del listado de productos
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - delete product
 *     parameters:
 *        - name: id
 *          in: body
 *          schema:
 *              type: integer
 *              description: id del producto
 *              required: true
 *        - name: ctPr_activo
 *          in: body
 *          schema:
 *              type: integer
 *              description: estatus del producto
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
router.patch('/delete/:id',auth.isAdmin, deleteProduct);

module.exports = router;