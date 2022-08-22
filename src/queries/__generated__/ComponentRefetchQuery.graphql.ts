/**
 * @generated SignedSource<<0125c8b0298ef07dbaf2c2075a936ad0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ComponentRefetchQuery$variables = {
  counter?: number | null;
};
export type ComponentRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ComponentFragment">;
};
export type ComponentRefetchQuery = {
  response: ComponentRefetchQuery$data;
  variables: ComponentRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "counter"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ComponentRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "counter",
            "variableName": "counter"
          }
        ],
        "kind": "FragmentSpread",
        "name": "ComponentFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ComponentRefetchQuery",
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
    ]
  },
  "params": {
    "cacheID": "e405cb3c67d8bcdac383bbe4b39bdc63",
    "id": null,
    "metadata": {},
    "name": "ComponentRefetchQuery",
    "operationKind": "query",
    "text": "query ComponentRefetchQuery(\n  $counter: Int\n) {\n  ...ComponentFragment_4tol41\n}\n\nfragment ComponentFragment_4tol41 on Query {\n  test2(num: $counter)\n}\n"
  }
};
})();

(node as any).hash = "816e780a179f9a4497ac53180e38ee28";

export default node;
