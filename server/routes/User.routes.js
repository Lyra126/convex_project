import express from 'express';
import { createUser, getAllUsers, getUserById, getUserByEmailAndPassword, getUserByEmail} from '../controllers/User.controller.js';

const router = express.Router();

router.route('/getAll').get(getAllUsers);
router.route('/createUser').post(createUser);
router.route('/user').get(getUserById);
router.route('/get').get(getUserByEmailAndPassword);
router.route('/getUser').get(getUserByEmail);

export default router;