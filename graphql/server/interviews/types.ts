import { gql } from "apollo-server-micro";

const InterviewTypes = gql`
  type Interview {
    id: ID
    userVacant: UsersOnVacancies
    users: [UsersOnInterviews]
    title: String
    description: String
    location: String
    type: InterviewType
    initDate: String
    finalDate: String
    createdAt: String
    updatedAt: String
    commentaries: [Commentary]
  }
  enum InterviewType {
    PRESENTIAL
    VIRTUAL
  }
  input InterviewInput {
    userVacant: String!
    users: [String]!
    title: String!
    description: String!
    location: String!
    type: InterviewType!
    initDate: String!
    finalDate: String!
  }
  type Query {
    indexInterviews: [Interview]
    indexInterviewsByUser(userId: String): [Interview]
    indexInterviewsByVacant(vacantId: String): [Interview]
    showInterview(id: String): Interview
  }
  type Mutation {
    storeInterview(data: InterviewInput): Interview
    updateInterview(id: String, data: InterviewInput): Interview
    deleteInterview(id: String): Interview
  }
`;

export { InterviewTypes };
