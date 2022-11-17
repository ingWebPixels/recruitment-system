import { gql } from 'apollo-server-micro';

const PageTypes = gql`
  type Page {
    id: ID!
    name: String!
    path: String!
    isPublic: Boolean!
    roles: [Role]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    pages: [Page]
    page(id: String!): Page
  }

  input PageCreateInput {
    name: String!
    path: String!
    isPublic: Boolean!
  }

  input PageWhereUniqueInput {
    id: String!
  }

  input PageUpdateInput {
    name: StringInput
    path: StringInput
    isPublic: BooleanInput
  }

  type Mutation {
    createPage(data: PageCreateInput): Page

    updatePage(where: PageWhereUniqueInput!, data: PageUpdateInput): Page

    deletePage(where: PageWhereUniqueInput!): Page
  }
`;
export { PageTypes };
