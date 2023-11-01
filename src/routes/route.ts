import express from 'express';
import { createUser } from '../controllers/userController.js';
import { renderAbout, renderAdmin, renderHome } from '../controllers/viewsControllers.js';

const router = express.Router();



//Page Home
router.get('/', renderHome);


//Page About
router.get('/about', renderAbout);

//Page Admin
router.get('/admin', renderAdmin)


router.post('/admin/createUser', createUser)

export default router;