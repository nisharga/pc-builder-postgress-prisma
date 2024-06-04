import { Request, RequestHandler, Response } from "express" 
import catchAsync from "../../../shared/catchAsync"
import httpStatus from "http-status"
import sendResponse from "../../../shared/sendResponse"  
import { Components } from "@prisma/client"
import { componentService } from "./component.service"

const createComponents: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...componentData } = req.body
      const result = await componentService.createComponent(componentData)
  
      sendResponse<Components>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Component created successfully!',
        data: result,
      })
    },
  ) 
  
  const getAllComponents: RequestHandler = catchAsync(
    async (req: Request, res: Response) => { 

      const result = await componentService.getAllComponent();
  
      sendResponse<Components[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All component show successfully!',
        data: result,
      })
    },
  ) 

  export const componentsController = {
    createComponents,
    getAllComponents
  }