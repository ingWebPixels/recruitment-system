import prisma from "@config/prisma";
import { Resolver } from "types";

const transformData = (args: any) => ({
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

const wherePk = (args: any) => ({
  where: {
    id: args.id,
  },
});

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
          name: String;
          surname: String;
          email: String;
          phone: String;
          photoUri: String;
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
          photoUri: String;
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
