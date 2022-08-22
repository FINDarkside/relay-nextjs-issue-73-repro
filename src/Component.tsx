import { useRouter } from "next/router";
import { useEffect } from "react";
import { graphql, useRefetchableFragment } from "react-relay/hooks";
import { ComponentFragment$key } from "./queries/__generated__/ComponentFragment.graphql";

const ComponentFragment = graphql`
  fragment ComponentFragment on Query
  @refetchable(queryName: "ComponentRefetchQuery")
  @argumentDefinitions(counter: { type: "Int" }) {
    test2(num: $counter)
  }
`;

type Props = { fragmentRef: ComponentFragment$key };

const Component = ({ fragmentRef }: Props) => {
  const [data, refetch] = useRefetchableFragment(
    ComponentFragment,
    fragmentRef
  );

  const router = useRouter();
  const counter = router.query.counter ? Number(router.query.counter) : null;

  useEffect(() => {
    refetch({ counter });
  }, [counter, refetch]);

  const onClick = () => {
    router.replace(
      {
        query: { counter: counter + 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <div>{data.test2}</div>
      <button onClick={onClick}>REFRESH</button>
    </div>
  );
};

export default Component;
