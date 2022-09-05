import prisma from "@config/prisma";
import { Resolver } from "types";

const transformData = (args: any) => ({
  data: {
    status: args.data.status,
    user: {
      connect: {
        id: args.data.user,
      },
    },
    vacant: {
      connect: {
        id: args.data.vacant,
      },
    },
    documents: {
      create: args.data.documents.map((document: any) => ({
        document: {
          documentId: document.id,
          uri: document.uri,
          defaultUri: document.defaultUri,
        },
      })),
    },
  },
});

const wherePk = (args: any) => ({
  where: {
    id: args.id,
  },
});

const UserOnVacanciesResolvers: Resolver = {
  UsersOnVacancies: {
    user: async (parent, args) =>
      await prisma.user.findFirst({
        where: {
          id: {
            equals: parent.userId,
          },
        },
      }),
    vacant: async (parent, args) =>
      await prisma.vacant.findFirst({
        where: {
          id: {
            equals: parent.vacantId,
          },
        },
      }),
    documents: async (parent, args) =>
      await prisma.userVacantDocuments.findMany({
        where: {
          usersOnVacanciesId: {
            equals: parent.id,
          },
        },
      }),
  },
  Query: {
    showUserVacant: async (parent: any, args: { id: any }) =>
      await prisma.usersOnVacancies.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    storeUserVacant: async (
      parent: any,
      args: {
        data: any;
      }
    ) => await prisma.usersOnVacancies.create(transformData(args)),
    updateUserVacant: async (
      parent: any,
      args: {
        id: String;
        data: any;
      }
    ) =>
      await prisma.usersOnVacancies.update({
        where: wherePk(args).where,
        data: transformData(args).data,
      }),
    deleteUser: async (parent: any, args: { id: String }) =>
      await prisma.usersOnVacancies.delete(wherePk(args)),
  },
};

export { UserOnVacanciesResolvers };
