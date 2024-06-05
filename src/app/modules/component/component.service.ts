/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Components, PrismaClient } from "@prisma/client"; 
import { IGenericResponse } from "../../../interfaces/common";
import { equal } from "assert";
import { paginationHelpers } from "../../../helpers/paginationHelper";

const prisma = new PrismaClient();

const createComponent = async (data: Components): Promise<Components> => {
    const newComponents = await prisma.components.create({  data  }) 
    return newComponents
} 

const componentSearchableFields = ["brand", "model"];

const getAllComponent = async (
    filter: any,
    paginationOptions: any
): Promise<IGenericResponse<Partial<Components>[]>> => {

   const { searchTerm, ...filterData } = filter; 
   const { page, limit, skip, sortBy, sortOrder } = paginationHelpers.calculatePagination(paginationOptions);

   const andCondition = []

   if (searchTerm) {
    andCondition.push({
      OR: componentSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    })
  }


  if(filterData) {
     const filterKeys = Object.keys(filterData); 
     filterKeys.forEach(key => {
        andCondition.push({
            [key]: {
                equals: filterData[key],
            }
        })
     }) 
  }

  const orderBy: any = {}
  if(sortBy && sortOrder) {
    orderBy[sortBy] = sortOrder
  }

    const allComponents = await prisma.components.findMany({ 
         where: {
            AND: [ 
                ...andCondition 
            ]
         },
         orderBy,
         skip,
         take: limit, 
    });


    const total = await prisma.components.count();

    return {
        meta: {
            page,
            limit,
            total
        },
        data: allComponents,
    }
  }
  

export const componentService = {
    createComponent, 
    getAllComponent
}