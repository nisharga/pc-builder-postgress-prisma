import { Components, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createComponent = async (data: Components): Promise<Components> => {
    const newComponents = await prisma.components.create({  data  }) 
    return newComponents
} 

const getAllComponent = (): Promise<Components[]> => {
    const components = prisma.components.findMany() 
    return components
  }
  

export const componentService = {
    createComponent, 
    getAllComponent
}