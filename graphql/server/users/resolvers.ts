import prisma from "@config/prisma";
import { Resolver } from "types";

const UserResolvers: Resolver = {
  User: {},
  Query: {
    indexUsers: async () => await prisma.user.findMany(),
    showUser: async (parent: any, args: { email: any }) =>
      await prisma.user.findUnique({
        where: {
          email: args.email,
        },
      }),
  },
  Mutation: {
    storeUser: async (
      parent: any,
      args: {
        data: {
          name: any;
          surname: any;
          email: any;
          phone: any;
          photoUri: any;
          document: any;
          documentType: any;
          role: any;
        };
      }
    ) =>
      await prisma.user.create({
        data: {
          name: args.data.name,
          surname: args.data.surname,
          email: args.data.email,
          phone: args.data.phone,
          photoUri: args.data.photoUri,
          document: args.data.document,
          documentType: args.data.documentType,
          role: args.data.role,
        },
      }),
    updateUser: async (
      parent: any,
      args: {
        id: any;
        data: {
          name: any;
          surname: any;
          email: any;
          phone: any;
          photoUri: any;
          document: any;
          documentType: any;
        };
      }
    ) => {
      return await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          name: args.data.name,
          surname: args.data.surname,
          email: args.data.email,
          phone: args.data.phone,
          photoUri: args.data.photoUri,
          document: args.data.document,
          documentType: args.data.documentType,
        },
      });
    },
    deleteUser: async (parent: any, args: { id: any }) =>
      await prisma.user.delete({
        where: {
          id: args.id,
        },
      }),
  },
};

export { UserResolvers };
