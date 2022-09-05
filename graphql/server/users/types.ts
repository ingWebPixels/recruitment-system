import { gql } from "apollo-server-micro";

const UserTypes = gql`
  type User {
    id: ID
    email: String
    name: String
    surname: String
    document: String
    documentType: DocumentType
    phone: String
    role: String
    firstLogin: String
    photoUri: String
    createdAt: String
    updatedAt: String
    interviews: String
    vacancies: [Vacant]
    userVacantDocuments: [UserVacantDocument]
    commentaries: String
  }
  enum DocumentType {
    CC
    NIT
  }
  enum RoleType {
    ADMIN
    CANDIDATE
  }
  input UserCreateInput {
    email: String!
    name: String!
    surname: String!
    document: String!
    documentType: DocumentType!
    phone: String!
    role: RoleType!
    photoUri: String!
  }
  input UserUpdateInput {
    name: String!
    surname: String!
    document: String!
    documentType: DocumentType!
    phone: String!
    photoUri: String!
  }
  type Query {
    indexUsers: [User]
    showUser(id: String): User
  }
  type Mutation {
    storeUser(data: UserCreateInput): User
    updateUser(id: String, data: UserUpdateInput): User
    deleteUser(id: String): User
  }
`;

export { UserTypes };
