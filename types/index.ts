import { NextApiRequest } from "next/types";
import { Session } from "next-auth";

export interface Context {
  session: Session;
  req: NextApiRequest;
}

interface ResolverFunction {
  [key: string]: (parent: any, args: any, context: Context, info: any) => any;
}

export interface Resolver {
  Query: ResolverFunction;
  Mutation: ResolverFunction;
  [key: string]: ResolverFunction;
}
