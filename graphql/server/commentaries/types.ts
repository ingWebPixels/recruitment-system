import { gql } from 'apollo-server-micro';

const CommentaryTypes = gql`
	type Commentary {
		id: ID
		interview: Interview
		user: User
		value: String
		createdAt: String
		updatedAt: String
	}
	input CommentaryInput {
		interview: String!
		user: String!
		value: String!
	}
	type Query {
		indexComentaries: [Commentary]
		indexComentariesByInterview(interviewId: String): [Commentary]
		indexComentariesByUser(userId: String): [Commentary]
		showCommentary(id: String): Commentary
	}
	type Mutation {
		storeCommentary(data: CommentaryInput): Commentary
		updateCommentary(id: String, data: CommentaryInput): Commentary
		deleteCommentary(id: String): Commentary
	}
`;

export { CommentaryTypes };
