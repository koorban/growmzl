import express from 'express';
import authCtrl from './../controllers/auth.controllers.js';

const router = express.Router();

router.route('/signin').post(authCtrl.signIn)
router.route('/signout').get(authCtrl.signOut)

export default router