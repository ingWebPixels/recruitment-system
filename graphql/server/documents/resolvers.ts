import prisma from "@config/prisma";
import { Resolver } from "types";

const DocumentResolver: Resolver = {
  Document: {},
  Query: {},
  Mutation: {
    updateDocument: async (parent: any, args: { id: any; data: any }) => {
      await prisma.document.update({
        where: {
          id: args.id,
        },
        data: { type: args.data.type },
      });
    },
    deleteDocument: async (parent: any, args: { id: any }) =>
      await prisma.document.delete({
        where: {
          id: args.id,
        },
      }),
  },
};

export { DocumentResolver };
