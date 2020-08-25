import express from 'express';
import userCtrl from './../controllers/user.controllers.js';
import authCtrl from './../controllers/auth.controllers.js';

const router = express.Router();

router.route('/users').post(userCtrl.create)

router.route('/users/:userId')
  .get(authCtrl.jwtRequired, userCtrl.read)
  .put(authCtrl.jwtRequired, authCtrl.isAuthorized, userCtrl.update)
  .delete(authCtrl.jwtRequired, authCtrl.isAuthorized, userCtrl.remove)

router.param('userId', userCtrl.userById)

export default router