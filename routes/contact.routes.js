import express from 'express';
import contactCtrl from '../controllers/contact.controllers';

const router = express.Router();

router.route('/contact').post(contactCtrl.createContact);

export default router