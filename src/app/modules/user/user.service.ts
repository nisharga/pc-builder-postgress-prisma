import { PrismaClient, Users } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: Users): Promise<Users> => {
    const newUser = await prisma.users.create({  data  }) 
    return newUser
  }
  
  const getUser = (id : string): Promise<Users | null> => {
    console.log(typeof id);
    const user = prisma.users.findUnique({
      where: { id },
    }) 
    return user
  }
  
  const getUsers = (): Promise<Users[]> => {
    const users = prisma.users.findMany() 
    return users
  }
  

  const updateUser = ( id: string, data: Users): Promise<Users | null> => {
    const updatedUser = prisma.users.update({
      where: { id }, 
      data 
    })
    return updatedUser
  }
  
  const deleteUser = (id: string): Promise<Users | null> => {
    const deletedUser = prisma.users.delete({
      where: { id },
    }) 
    return deletedUser
  }
  
 

export const userService = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}