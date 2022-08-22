import { createServer } from "@graphql-yoga/node";
import { NextApiRequest, NextApiResponse } from "next";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

export const executableSchema = makeExecutableSchema({
  typeDefs: loadFilesSync("src/schema.graphql"),
  resolvers: {
    Query: {
      test: () => new Date().toISOString(),
      test2: (_, { num }: { num?: number }) =>
        `${new Date().toISOString()} counter: ${num}`,
    },
  },
});

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: executableSchema,
});

export default server;
