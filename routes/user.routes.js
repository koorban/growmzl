import express from 'express';
import userCtrl from './../controllers/user.controllers.js';
import authCtrl from './../controllers/auth.controllers.js';

const router = express.Router();

router.route('/users').post(userCtrl.create)
router.route('/users').get(userCtrl.list)

router.route('/users/:userId')
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove)
router.param('userId', userCtrl.userById)

export default router