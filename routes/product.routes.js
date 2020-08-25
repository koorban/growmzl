import express from 'express';
import productCtrl from '../controllers/product.controller';
import authCtrl from '../controllers/auth.controllers';

const router = express.Router();

router.route('/list/all').get(productCtrl.listAll);

router.route('/new').post(productCtrl.createProduct);

router.route('/product/:productId')
    .put(authCtrl.jwtRequired, authCtrl.isAuthorized, productCtrl.update)
    .delete(authCtrl.jwtRequired, authCtrl.isAuthorized, productCtrl.remove)
    .get(productCtrl.read)
router.param('productId', productCtrl.productById);

router.route('/by/:category').get(productCtrl.listByCategory);
router.param('category', productCtrl.productByCategory);

export default router