import { gql } from "apollo-server-micro";

const UsersOnVacanciesTypes = gql`
  type UsersOnVacancies {
    id: ID
    user: User
    vacant: Vacant
    status: VacantStatus
    documents: [UserVacantDocument]
    interviews: String
    createdAt: String
    updatedAt: String
  }
  enum VacantStatus {
    PENDING
    INTERVIEW
    SEND_DOCUMENTS
    REVIEW
    REJECTED
    APPROVED
  }
  input UserVacantCreateInput {
    documents: [UserVacantDocumentInput]!
    status: VacantStatus!
    user: String!
    vacant: String!
  }
  input UserVacantDocumentInput {
    document: String!
    uri: String!
    defaultUri: String!
  }
  input UserVacantUpdateInput {
    documents: [UserVacantDocumentInput]!
    status: VacantStatus!
  }
  type Query {
    showUserVacant(id: String): UsersOnVacancies
  }
  type Mutation {
    storeUserVacant(data: UserVacantCreateInput): UsersOnVacancies
    updateUserVacant(id: String, data: UserVacantUpdateInput): UsersOnVacancies
    deleteUserVacant(id: String): UsersOnVacancies
  }
`;

export { UsersOnVacanciesTypes };
