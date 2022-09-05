import { gql } from "apollo-server-micro";

const DocumentTypes = gql`
  type Document {
    id: ID
    vacant: Vacant
    type: AttachedType
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }
  input DocumentCreateInput {
    vacant: String!
    type: AttachedType!
    name: String!
    description: String!
  }
  input DocumentUpdateInput {
    type: AttachedType!
  }
  type Query {
    indexDocuments: [Document]
  }
  type Mutation {
    storeDocument(data: DocumentCreateInput): Document
    updateDocument(id: String, data: DocumentUpdateInput): Document
    deleteDocument(id: String): Document
  }
`;

export { DocumentTypes };
