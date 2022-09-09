import prisma from '@config/prisma';
import { Resolver } from 'types';

const transformData = (args: any) => ({
	data: {
		user: {
			connect: {
				id: args.data.user,
			},
		},
		interview: {
			connect: {
				id: args.data.interview,
			},
		},
	},
});

const wherePk = (args: any) => ({
	where: {
		id: args.id,
	},
});

const UsersOnInterviewsResolvers: Resolver = {
	UsersOnInterviews: {
		user: async (parent, args) =>
			await prisma.user.findFirst({
				where: {
					id: {
						equals: parent.userId,
					},
				},
			}),
		interview: async (parent, args) =>
			await prisma.interview.findFirst({
				where: {
					id: {
						equals: parent.interviewId,
					},
				},
			}),
	},
	Query: {
		indexUsersOnInterviews: async () =>
			await prisma.usersOnInterviews.findMany(),
		indexUsersOnInterviewsByUser: async (parent, args) =>
			await prisma.usersOnInterviews.findMany({
				where: {
					userId: {
						equals: args.userId,
					},
				},
			}),
		indexUsersOnInterviewsByInterview: async (parent, args) =>
			await prisma.usersOnInterviews.findMany({
				where: {
					interviewId: {
						equals: args.interviewId,
					},
				},
			}),
		showUserOnInterview: async (parent: any, args: { id: any }) =>
			await prisma.usersOnInterviews.findFirst({
				where: {
					id: {
						equals: args.id,
					},
				},
			}),
	},
	Mutation: {
		storeUserOnInterview: async (
			parent: any,
			args: {
				data: any;
			}
		) => await prisma.usersOnInterviews.create(transformData(args)),
		updateUserOnInterview: async (
			parent: any,
			args: {
				id: String;
				data: any;
			}
		) =>
			await prisma.usersOnInterviews.update({
				where: wherePk(args).where,
				data: transformData(args).data,
			}),
		deleteUserOnInterview: async (parent: any, args: { id: String }) =>
			await prisma.usersOnInterviews.delete(wherePk(args)),
	},
};

export { UsersOnInterviewsResolvers };
