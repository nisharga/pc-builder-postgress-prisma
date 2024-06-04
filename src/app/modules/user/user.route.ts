import express from 'express' 
import { userController } from './user.controller'
const router = express.Router()

router.post('/create-user', userController.createUser) 

router.get('/', userController.getUsers)

router.get('/:id', userController.getUser)

router.patch('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)


export const UserRoutes = router