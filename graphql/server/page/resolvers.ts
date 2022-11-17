import prisma from 'config/prisma';

const PageResolvers = {
  Page: {
    roles: async (parent: any, args: any) =>
      await prisma.role.findMany({
        where: {
          pages: {
            some: {
              id: {
                equals: parent.id,
              },
            },
          },
        },
      }),
  },
  Query: {
    pages: async () => await prisma.page.findMany({}),
    page: async (_: any, args: any) =>
      await prisma.page.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    createPage: async (_: any, args: any) =>
      await prisma.page.create({
        data: { ...args.data },
      }),
    updatePage: async (_: any, args: any) =>
      await prisma.page.update({
        where: {
          id: args.where.id,
        },
        data: { ...args.data },
      }),
    deletePage: async (_: any, args: any) =>
      await prisma.page.delete({
        where: {
          id: args.where.id,
        },
      }),
  },
};

export { PageResolvers };
