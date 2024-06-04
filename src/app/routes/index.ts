/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { categoriesRoutes } from '../modules/category/category.route'
import { componentsRoutes } from '../modules/component/component.route'

const router = express.Router()

const moduleRoutes: any[] = [
    {
        path: "/users",
        route: UserRoutes
    },
    {
        path: "/categories",
        route: categoriesRoutes
    },
    {
        path: "/component",
        route: componentsRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
