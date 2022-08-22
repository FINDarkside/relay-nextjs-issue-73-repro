/**
 * @generated SignedSource<<51369abdf1ed1213ec3a3710b7aecd77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pagesFrontQuery$variables = {
  counter?: number | null;
};
export type pagesFrontQuery$data = {
  readonly test: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"ComponentFragment">;
};
export type pagesFrontQuery = {
  response: pagesFrontQuery$data;
  variables: pagesFrontQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "counter"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "test",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesFrontQuery",
    "selections": [
      (v1/*: any*/),
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
    "name": "pagesFrontQuery",
    "selections": [
      (v1/*: any*/),
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
    "cacheID": "0f822de635a3587ac43135323de90042",
    "id": null,
    "metadata": {},
    "name": "pagesFrontQuery",
    "operationKind": "query",
    "text": "query pagesFrontQuery(\n  $counter: Int\n) {\n  test\n  ...ComponentFragment_4tol41\n}\n\nfragment ComponentFragment_4tol41 on Query {\n  test2(num: $counter)\n}\n"
  }
};
})();

(node as any).hash = "414f09b635270f56a59966f930db47c5";

export default node;
