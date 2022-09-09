import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID
    email: String
    name: String
    document: String
    documentType: DocumentType
    phone: String
    role: String
    firstLogin: String
    image: String
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
    surname: String
    document: String
    documentType: DocumentType!
    phone: String!
    role: RoleType!
    image: String!
  }
  input UserUpdateInput {
    name: String!
    surname: String
    document: String
    documentType: DocumentType!
    phone: String!
    image: String!
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
