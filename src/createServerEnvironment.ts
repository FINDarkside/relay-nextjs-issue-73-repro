import { graphql } from "graphql";
import {
  Environment,
  GraphQLResponse,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

import { executableSchema } from "./pages/api/graphql";

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    const results = await graphql({
      schema: executableSchema,
      source: params.text,
      variableValues: variables,
    });
    const data = JSON.parse(JSON.stringify(results)) as GraphQLResponse;

    return data;
  });
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
