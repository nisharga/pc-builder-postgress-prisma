import { Categories, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: Categories): Promise<Categories> => {
    const newCategory = await prisma.categories.create({  data  }) 
    return newCategory
} 

export const categoryService = {
    createCategory, 
}