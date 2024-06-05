import { Request, RequestHandler, Response } from "express" 
import catchAsync from "../../../shared/catchAsync"
import httpStatus from "http-status"
import sendResponse from "../../../shared/sendResponse"  
import { Components } from "@prisma/client"
import { componentService } from "./component.service"
import pick from "../../../shared/pick"

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

      const filter = pick(req.query, ["searchTerm", "brand", "model", "category"]);
      const paginationOptions = pick(req.query, ["page", "limit", "skip", "sortBy", "sortOrder"]);

      const result = await componentService.getAllComponent(filter, paginationOptions);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All component show successfully!', 
        data: result.data,
        meta: result.meta,
      })
    },
  ) 

  export const componentsController = {
    createComponents,
    getAllComponents
  }