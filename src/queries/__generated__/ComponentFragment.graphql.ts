/**
 * @generated SignedSource<<44a44edb6a421a5388ab55ee11575927>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ComponentFragment$data = {
  readonly test2: string | null;
  readonly " $fragmentType": "ComponentFragment";
};
export type ComponentFragment$key = {
  readonly " $data"?: ComponentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ComponentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "counter"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./ComponentRefetchQuery.graphql')
    }
  },
  "name": "ComponentFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "num",
          "variableName": "counter"
        }
      ],
      "kind": "ScalarField",
      "name": "test2",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "816e780a179f9a4497ac53180e38ee28";

export default node;
