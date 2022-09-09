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
		value: args.data.value,
	},
});

const wherePk = (args: any) => ({
	where: {
		id: args.id,
	},
});

const CommentaryResolvers: Resolver = {
	Commentary: {
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
		indexComentaries: async () => await prisma.commentary.findMany(),
		indexComentariesByUser: async (parent, args) =>
			await prisma.commentary.findMany({
				where: {
					userId: {
						equals: args.userId,
					},
				},
			}),
		indexComentariesByInterview: async (parent, args) =>
			await prisma.commentary.findMany({
				where: {
					interviewId: {
						equals: args.interviewId,
					},
				},
			}),
		showCommentary: async (parent: any, args: { id: any }) =>
			await prisma.commentary.findFirst({
				where: {
					id: {
						equals: args.id,
					},
				},
			}),
	},
	Mutation: {
		storeCommentary: async (
			parent: any,
			args: {
				data: any;
			}
		) => await prisma.commentary.create(transformData(args)),
		updateCommentary: async (
			parent: any,
			args: {
				id: String;
				data: any;
			}
		) =>
			await prisma.commentary.update({
				where: wherePk(args).where,
				data: transformData(args).data,
			}),
		deleteCommentary: async (parent: any, args: { id: String }) =>
			await prisma.commentary.delete(wherePk(args)),
	},
};

export { CommentaryResolvers };
