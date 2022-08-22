import { usePreloadedQuery } from "react-relay";
import { RelayProps, withRelay } from "relay-nextjs";
import { graphql } from "react-relay/hooks";
import { getClientEnvironment } from "../getClientEnvironment";
import { pagesFrontQuery } from "../queries/__generated__/pagesFrontQuery.graphql";
import Component from "../Component";
import { Suspense } from "react";

const PagesFrontQuery = graphql`
  query pagesFrontQuery($counter: Int) {
    test
    ...ComponentFragment @arguments(counter: $counter)
  }
`;

type Props = RelayProps<Record<string, never>, pagesFrontQuery>;

const HomePage = ({ preloadedQuery }: Props) => {
  const data = usePreloadedQuery(PagesFrontQuery, preloadedQuery);

  return (
    <div>
      <div>{data.test}</div>
      <Suspense fallback="loading">
        <Component fragmentRef={data} />
      </Suspense>
    </div>
  );
};

export default withRelay(HomePage, PagesFrontQuery, {
  createClientEnvironment: () => getClientEnvironment(),
  createServerEnvironment: async (ctx) => {
    const { createServerEnvironment } = await import(
      "../createServerEnvironment"
    );
    return createServerEnvironment();
  },
  variablesFromContext: (ctx) => {
    return {
      counter: ctx.query.counter ? Number(ctx.query.counter) : null,
    };
  },
});
