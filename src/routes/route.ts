import express from 'express';
import { registerUser , loginUser, logoutUser } from '../controllers/userController.js';
import { renderAbout, renderHome ,renderLogin , renderProfile, renderRegister } from '../controllers/renderController.js';

const router = express.Router();



//Page Home
router.get('/', renderHome);


//Page Login
router.get('/login', renderLogin)
router.post('/login', loginUser)

//Page Register
router.get('/register', renderRegister)
router.post('/register', registerUser)

//Page Profile
router.get('/profile', renderProfile)

//Logout
router.get('/logout', logoutUser)

//Page Admin
// router.get('/admin', renderAdmin)

//Page About
router.get('/about', renderAbout);



export default router;