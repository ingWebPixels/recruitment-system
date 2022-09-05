import { gql } from "apollo-server-micro";

const JobTitleTypes = gql`
  type JobTitle {
    id: ID
    code: String
    name: String
    description: String
    createdAt: String
    updatedAt: String
    vacancies: [Vacant]
  }
  input JobCreateInput {
    code: String!
    name: String!
    description: String!
  }
  input JobUpdateInput {
    code: String!
    name: String!
    description: String!
  }
  type Query {
    indexJobs: [JobTitle]
    showJob(id: String): JobTitle
  }
  type Mutation {
    storeJob(data: JobCreateInput): JobTitle
    updateJob(id: String, data: JobUpdateInput): JobTitle
    deleteJob(id: String): JobTitle
  }
`;

export { JobTitleTypes };
