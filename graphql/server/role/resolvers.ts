import prisma from 'config/prisma';

const RoleResolvers = {
    Role: {
        users: async (parent:any, _:any) => {
                  return await prisma.user.findMany({
                    where: {
                      roles: {
                        some: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  });
                },pages: async (parent:any, _:any) => {
                  return await prisma.page.findMany({
                    where: {
                      roles: {
                        some: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  });
                }
    },
    Query: {
        roles: async () => {
        return await prisma.role.findMany({});
        },
        role: async (_:any, args:any) => {
        return await prisma.role.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createRole:async (_:any, args:any)=>{
        return await prisma.role.create({
          data:{...args.data,  }
        })
      },
      updateRole:async (_:any, args:any)=>{
        return await prisma.role.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteRole:async (_:any, args:any)=>{
        return await prisma.role.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
}

export { RoleResolvers };

    