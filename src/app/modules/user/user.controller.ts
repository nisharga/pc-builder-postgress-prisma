import { Request, RequestHandler, Response } from "express"
import { userService } from "./user.service"
import catchAsync from "../../../shared/catchAsync"
import httpStatus from "http-status"
import sendResponse from "../../../shared/sendResponse"
import { Users } from "@prisma/client"

const createUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...userData } = req.body
      const result = await userService.createUser(userData)
  
      sendResponse<Users>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User created successfully!',
        data: result,
      })
    },
  )


  const updateUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params
      const { ...userData } = req.body
      const result = await userService.updateUser(id, userData)
  
      sendResponse<Users>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User updated successfully!',
        data: result,
      })
    },
  )
  
  const deleteUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params
      const result = await userService.deleteUser(id)
  
      sendResponse<Users>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User deleted successfully!',
        data: result,
      })
    },
  )
  
  const getUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { id } = req.params
      const result = await userService.getUser(id)
  
      sendResponse<Users>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User fetched successfully!',
        data: result,
      })
    },
  )
  
  const getUsers: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const result = await userService.getUsers()
  
      sendResponse<Users[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Users fetched successfully!',
        data: result,
      })
    },
  ) 
  

  export const userController = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers
  }