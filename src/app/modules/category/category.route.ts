import express from 'express'  
import { categoriesController } from './category.controller'
const router = express.Router()

router.post('/', categoriesController.createCategory)  

export const categoriesRoutes = router