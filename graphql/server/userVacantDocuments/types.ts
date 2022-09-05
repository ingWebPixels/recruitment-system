import { gql } from "apollo-server-micro";

const UserVacantDocumentsTypes = gql`
  type UserVacantDocument {
    id: ID
    user: User
    vacant: Vacant
    document: Document
    uri: String
    defaultUri: String
    UsersOnVacancies: UsersOnVacancies
    createdAt: String
    updatedAt: String
  }
`;

export { UserVacantDocumentsTypes };
