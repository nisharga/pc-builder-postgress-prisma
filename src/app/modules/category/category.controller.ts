import { Request, RequestHandler, Response } from "express" 
import catchAsync from "../../../shared/catchAsync"
import httpStatus from "http-status"
import sendResponse from "../../../shared/sendResponse"  
import { categoryService } from "./category.service"
import { Categories } from "@prisma/client"

const createCategory: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...categoriesData } = req.body
      const result = await categoryService.createCategory(categoriesData)
  
      sendResponse<Categories>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'categories created successfully!',
        data: result,
      })
    },
  ) 

  export const categoriesController = {
    createCategory
  }