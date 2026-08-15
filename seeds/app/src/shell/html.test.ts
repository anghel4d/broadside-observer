import assert from "node:assert/strict";
import { closestFromTarget, resolveEventNode, type Eventish } from "./html.ts";

const button: Eventish & { dataset: { view: string } } = {
  nodeType: 1,
  dataset: { view: "cards" },
  closest(selector: string) {
    return selector === "button[data-view]" ? this : null;
  },
};

const label: Eventish = {
  nodeType: 3,
  parentElement: button,
};

assert.equal(resolveEventNode(null), null);
assert.equal(resolveEventNode(undefined), null);
assert.equal(resolveEventNode(button), button);
assert.equal(
  resolveEventNode(label),
  button,
  "click on the Cards label text must resolve to the button",
);

assert.equal(closestFromTarget(null, "button[data-view]"), null);
assert.equal(closestFromTarget(button, "button[data-view]"), button);
assert.equal(
  closestFromTarget(label, "button[data-view]"),
  button,
  "closest() must run from the parent Element, not the Text node",
);
assert.equal(closestFromTarget(label, "button[data-theme]"), null);

const themeSvg: Eventish = {
  nodeType: 1,
  closest(selector: string) {
    return selector === "button[data-view]" ? null : null;
  },
};
assert.equal(
  closestFromTarget(themeSvg, "button[data-view]"),
  null,
  "theme-toggle internals must not resolve as a view control",
);

console.log("html.test.ts ok");
