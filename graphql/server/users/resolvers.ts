import prisma from '@config/prisma';
import { Resolver } from 'types';

const transformData = (args: any) => ({
  data: {
    name: args.data.name,
    surname: args.data.surname,
    email: args.data.email,
    phone: args.data.phone,
    image: args.data.image,
    document: args.data.document,
    documentType: args.data.documentType,
  },
});

const wherePk = (args: any) => ({
  where: {
    id: args.id,
  },
});

const UserResolvers: Resolver = {
  User: {
    vacancies: async (parent, args) =>
      await prisma.usersOnVacancies.findMany({
        where: {
          userId: {
            equals: parent.id,
          },
        },
      }),
    roles: async (parent, args) =>
      await prisma.role.findMany({
        where: {
          users: {
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
    indexUsers: async () => await prisma.user.findMany(),
    showUser: async (parent: any, args: { id: any }) =>
      await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    storeUser: async (
      parent: any,
      args: {
        data: {
          name: String;
          surname: String;
          email: String;
          phone: String;
          image: String;
          document: String;
          documentType: String;
          role: String;
        };
      }
    ) => await prisma.user.create(transformData(args)),
    updateUser: async (
      parent: any,
      args: {
        id: String;
        data: {
          name: String;
          surname: String;
          phone: String;
          image: String;
          document: String;
          documentType: DocumentType;
        };
      }
    ) =>
      await prisma.user.update({
        where: wherePk(args).where,
        data: transformData(args).data,
      }),
    deleteUser: async (parent: any, args: { id: String }) =>
      await prisma.user.delete(wherePk(args)),
  },
};

export { UserResolvers };
