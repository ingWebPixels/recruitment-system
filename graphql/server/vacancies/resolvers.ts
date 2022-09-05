import prisma from "@config/prisma";
import { Resolver } from "types";
import arg from "arg";

const transformData = (args: any) => ({
  data: {
    jobTitle: {
      connect: {
        id: args.data.jobTitle,
      },
    },
    maxCandidaties: args.data.maxCandidaties,
    minSalary: args.data.minSalary,
    maxSalary: args.data.maxSalary,
    initDate: new Date(args.data.initDate),
    contractType: args.data.contractType,
    createdBy: {
      connect: {
        id: args.data.createdBy,
      },
    },
    documents: {
      create: args.data.documents.map((document: any) => ({
        type: document.type,
        name: document.name,
        description: document.description,
      })),
    },
  },
});

const wherePk = (args: any) => ({
  where: {
    id: args.id,
  },
});

const VacanciesResolvers: Resolver = {
  Vacant: {
    users: async (parent, args) =>
      await prisma.usersOnVacancies.findMany({
        where: {
          vacantId: {
            equals: parent.id,
          },
        },
      }),
    jobTitle: async (parent, args) =>
      await prisma.jobTitle.findFirst({
        where: {
          id: {
            equals: parent.jobTitleId,
          },
        },
      }),
    createdBy: async (parent, args) =>
      await prisma.user.findFirst({
        where: {
          id: {
            equals: parent.createdBy,
          },
        },
      }),
    documents: async (parent, args) =>
      await prisma.document.findMany({
        where: {
          vacantId: {
            equals: parent.id,
          },
        },
      }),
  },
  Query: {
    indexVacancies: async () => await prisma.vacant.findMany(),
    indexVacanciesByJob: async (parent: any, args: { jobId: any }) =>
      await prisma.vacant.findMany({
        where: {
          jobTitleId: {
            equals: args.jobId,
          },
        },
      }),
    indexVacanciesByUser: async (parent: any, args: { userId: any }) =>
      await prisma.vacant.findMany({
        where: {
          users: {
            some: {
              userId: args.userId,
            },
          },
        },
      }),
    showVacant: async (parent: any, args: { id: any }) =>
      await prisma.vacant.findUnique({
        where: {
          id: args.id,
        },
      }),
  },
  Mutation: {
    storeVacant: async (
      parent: any,
      args: {
        data: any;
      }
    ) => await prisma.vacant.create(transformData(args)),
    updateVacant: async (
      parent: any,
      args: {
        id: String;
        data: any;
      }
    ) =>
      await prisma.vacant.update({
        where: wherePk(args).where,
        data: transformData(args).data,
      }),
    deleteUser: async (parent: any, args: { id: String }) =>
      await prisma.vacant.delete(wherePk(args)),
  },
};

export { VacanciesResolvers };
