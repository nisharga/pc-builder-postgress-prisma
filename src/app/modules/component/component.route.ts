import express from 'express'  
import { componentsController } from './component.controller'
const router = express.Router()

router.post('/', componentsController.createComponents)
router.get('/', componentsController.getAllComponents)

export const componentsRoutes = router