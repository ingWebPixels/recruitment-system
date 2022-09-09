import prisma from '@config/prisma';
import { Resolver } from 'types';

const transformData = (args: any) => ({
	data: {
		userVacant: {
			connect: {
				id: args.data.userVacant,
			},
		},
		users: {
			connect: args.data.users.map((user: any) => ({
				id: user,
			})),
		},
		title: args.data.title,
		description: args.data.description,
		location: args.data.location,
		type: args.data.type,
		initDate: new Date(args.data.initDate),
		finalDate: new Date(args.data.finalDate),
	},
});

const wherePk = (args: any) => ({
	where: {
		id: args.id,
	},
});

const InterviewResolvers: Resolver = {
	Interview: {
		userVacant: async (parent, args) =>
			await prisma.usersOnVacancies.findFirst({
				where: {
					id: {
						equals: parent.userVacantId,
					},
				},
			}),
		users: async (parent, args) =>
			await prisma.usersOnInterviews.findMany({
				where: {
					interviewId: {
						equals: parent.id,
					},
				},
			}),
		commentaries: async (parent, args) =>
			await prisma.commentary.findMany({
				where: {
					interviewId: {
						equals: parent.id,
					},
				},
			}),
	},
	Query: {
		indexInterviews: async () => await prisma.interview.findMany(),
		indexInterviewsByUser: async (parent, args) =>
			await prisma.interview.findMany({
				where: {
					users: {
						some: {
							id: {
								equals: args.userId,
							},
						},
					},
				},
			}),

		showInterview: async (parent: any, args: { id: any }) =>
			await prisma.interview.findFirst({
				where: {
					id: {
						equals: args.id,
					},
				},
			}),
	},
	Mutation: {
		storeInterview: async (
			parent: any,
			args: {
				data: any;
			}
		) => await prisma.interview.create(transformData(args)),
		updateJob: async (
			parent: any,
			args: {
				id: String;
				data: any;
			}
		) =>
			await prisma.interview.update({
				where: wherePk(args).where,
				data: transformData(args).data,
			}),
		deleteJob: async (parent: any, args: { id: String }) =>
			await prisma.interview.delete(wherePk(args)),
	},
};

export { InterviewResolvers };
