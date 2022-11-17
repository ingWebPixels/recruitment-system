import { gql } from 'apollo-server-micro';

const RoleTypes = gql`
  type Role {
    id: ID!
    name: Enum_RoleName!
    createdAt: DateTime!
    updatedAt: DateTime!
    users: [User]
    pages: [Page]
  }

  type Query {
    roles: [Role]
    role(id: String!): Role
  }

  input RoleCreateInput {
    name: Enum_RoleName!
  }

  input RoleWhereUniqueInput {
    id: String!
  }

  input RoleUpdateInput {
    name: Enum_RoleNameInput
  }

  type Mutation {
    createRole(data: RoleCreateInput): Role

    updateRole(where: RoleWhereUniqueInput!, data: RoleUpdateInput): Role

    deleteRole(where: RoleWhereUniqueInput!): Role
  }
`;
export { RoleTypes };
