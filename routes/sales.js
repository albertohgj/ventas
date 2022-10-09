const router = require('express').Router();
const auth = require('../config/auth');


const {
    addSales,
    getSales,
    getSale,
    cancelSale
} = require('../controllers/sales');

/**
 * @openapi
 * /sales:
 *   get:
 *     description: obtener el listado de ventas
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - get sale
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
router.get('/',auth.required, getSales)
/**
 * @openapi
 * /sales/:id:
 *   get:
 *     description: obtener el detalle de una venta
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - get sale detail
 *     parameters:
 *        - name: id
 *          in: querystring
 *          schema:
 *              type: string
 *              description: Venta id
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
router.get('/:id',auth.required, getSale)

/**
 * @openapi
 * /sales/addSales:
 *   post:
 *     description: Crear una venta
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - add sale
 *     parameters:
 *        - name: Vn_importe
 *          in: body
 *          schema:
 *              type: decimal
 *              description: importe de la venta
 *              required: true
 *        - name: Vn_idCtlgMnda
 *          in: body
 *          schema:
 *              type: integer
 *              description: moneda de la venta
 *              required: true
 *        - name: Vn_pagado
 *          in: body
 *          schema:
 *              type: integer
 *              description: pagado o pendiente
 *              required: true
 *        - name: Vn_idCtlgFrmaPago
 *          in: body
 *          schema:
 *              type: integer
 *              description: forma de pago
 *              required: true
 *        - name: Vn_activo
 *          in: body
 *          schema:
 *              type: integer
 *              description: estatus de la venta
 *              required: true
 *        - name: VnDetalle
 *          in: body
 *          schema:
 *              type: array
 *              description: detalle de la venta
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
router.post('/addSales',auth.required, addSales);
/**
 * @openapi
 * /sales/delete:
 *   patch:
 *     description: Borrado lógico de ventas
 *     security: 
 *       - Bearer: []
 *     tags:
 *       - delete logical sales
 *     parameters:
 *        - name: id
 *          in: querystring
 *          schema:
 *              type: string
 *              description: venta id
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
router.patch('/:id',auth.isAdmin, cancelSale);

module.exports = router;