import { gql } from "apollo-server-micro";

const VacantTypes = gql`
  type Vacant {
    id: ID
    jobTitle: JobTitle
    maxCandidaties: Int
    minSalary: Float
    maxSalary: Float
    initDate: String
    contractType: ContractType
    createdBy: User
    createdAt: String
    updatedAt: String
    users: [UsersOnVacancies]
    documents: [Document]
  }
  enum ContractType {
    UNDEFINED
    DEFINED
    PROVISION_SERVICE
  }
  enum AttachedType {
    CANDIDATE
    BUSINESS
  }
  input DocumentInput {
    type: AttachedType!
    name: String!
    description: String!
  }
  input CreateInput {
    jobTitle: String!
    maxCandidaties: Int!
    minSalary: Float!
    maxSalary: Float!
    initDate: String!
    createdBy: String!
    contractType: ContractType!
    documents: [DocumentInput]!
  }
  input UpdateInput {
    maxCandidaties: Int!
    minSalary: Float!
    maxSalary: Float!
    initDate: String!
    contractType: ContractType!
    documents: [String]!
  }
  type Query {
    indexVacancies: [Vacant]
    indexVacanciesByJob(jobId: String): [Vacant]
    indexVacanciesByUser(userId: String): [Vacant]
    showVacant(id: String): Vacant
  }
  type Mutation {
    storeVacant(data: CreateInput): Vacant
    updateVacant(id: String, data: UpdateInput): Vacant
    deleteVacant(id: String): Vacant
  }
`;

export { VacantTypes };
