import prisma from "@config/prisma";
import { Resolver } from "types";

const transformData = (args: any) => ({
  data: {
    code: args.data.code,
    name: args.data.name,
    description: args.data.description,
  },
});

const wherePk = (args: any) => ({
  where: {
    id: args.id,
  },
});

const JobTitleResolvers: Resolver = {
  JobTitle: {
    vacancies: async (parent, args) =>
      await prisma.vacant.findMany({
        where: {
          jobTitleId: {
            equals: parent.id,
          },
        },
      }),
  },
  Query: {
    indexJobs: async () => await prisma.jobTitle.findMany(),
    showJob: async (parent: any, args: { id: any }) =>
      await prisma.jobTitle.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    storeJob: async (
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
    ) => await prisma.jobTitle.create(transformData(args)),
    updateJob: async (
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
      await prisma.jobTitle.update({
        where: wherePk(args).where,
        data: transformData(args).data,
      }),
    deleteJob: async (parent: any, args: { id: String }) =>
      await prisma.jobTitle.delete(wherePk(args)),
  },
};

export { JobTitleResolvers };
