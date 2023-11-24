import express from 'express';
const router = express.Router();

import { isAuth$ , renderAdmin , renderUsersList , updateUser , deleteUser } from '../controllers/adminController.js';

router.use(isAuth$)

router.get('/', renderAdmin)

router.get('/usersList', renderUsersList)

router.put('/:userID', updateUser)

router.delete('/:userID', deleteUser)


export default router;