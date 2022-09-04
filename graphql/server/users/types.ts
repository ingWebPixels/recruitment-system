import { gql } from "apollo-server-micro";

const UserTypes = gql`
  type User {
    id: ID
    email: String
    name: String
    surname: String
    document: String
    documentType: String
    phone: String
    role: String
    firstLogin: Date
    photoUri: String
    createdAt: Date
    updatedAt: Date
    interviews: String
    vacancies: String
    userVacantDocuments: String
    commentaries: String
  }
  input UserCreateInput {
    email: String
    name: String
    surname: String
    document: String
    documentType: String
    phone: String
    role: String
    photoUri: String
  }
  type Query {
    indexUsers: [User]
    showUser(email: String): User
  }
  type Mutation {
    storeUser(data: UserCreateInput): User
    updateUser(id: String, data: UserCreateInput): User
    deleteUser(id: String): User
  }
`;

export { UserTypes };
