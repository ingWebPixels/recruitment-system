import { gql } from "apollo-server-micro";
import { UserTypes } from "@graphql/server/users/types";

const globalTypes = gql`
  scalar Date
`;

const GlobalTypes = [globalTypes, UserTypes];

export { GlobalTypes };
