import { gql } from 'apollo-server-micro';

const UsersOnInterviewsTypes = gql`
	type UsersOnInterviews {
		id: ID
		interview: Interview
		user: User
		createdAt: String
		updatedAt: String
	}
	input UserOnInterviewInput {
		interview: String!
		user: String!
	}
	type Query {
		indexUsersOnInterviews: [UsersOnInterviews]
		indexUsersOnInterviewsByInterview(interviewId: String): [UsersOnInterviews]
		indexUsersOnInterviewsByUser(userId: String): [UsersOnInterviews]
		showUserOnInterview(id: String): UsersOnInterviews
	}
	type Mutation {
		storeUserOnInterview(data: UserOnInterviewInput): UsersOnInterviews
		updateUserOnInterview(
			id: String
			data: UserOnInterviewInput
		): UsersOnInterviews
		deleteUserOnInterview(id: String): UsersOnInterviews
	}
`;

export { UsersOnInterviewsTypes };
