import assert from "node:assert/strict";
import { buildCorpus } from "../domain/corpus.ts";
import { defaultQuery } from "../domain/schema.ts";
import { parseQueryFromSearch, printQuerySearch, searchHasQueryParams } from "./queryUrl.ts";

const empty = buildCorpus([]);

assert.equal(searchHasQueryParams(""), false);
assert.equal(searchHasQueryParams("?view=cards"), false);
assert.equal(searchHasQueryParams("?q="), true);
assert.equal(searchHasQueryParams("?sort=year"), true);

assert.equal(printQuerySearch("", "list", defaultQuery), "");
assert.equal(printQuerySearch("", "cards", defaultQuery), "?view=cards");
assert.equal(printQuerySearch("", "list", { ...defaultQuery, search: "radiance" }), "?q=radiance");
assert.equal(
  printQuerySearch("?view=cards", "cards", { ...defaultQuery, sort: "year", sortReversed: true }),
  "?view=cards&sort=year&rev=1",
);

const parsed = parseQueryFromSearch("?q=hi&sort=year&rev=1&ymin=2010&ymax=2000", empty);
assert.ok(parsed !== null);
assert.equal(parsed.search, "hi");
assert.equal(parsed.sort, "year");
assert.equal(parsed.sortReversed, true);
assert.equal(parsed.year.min, 2000);
assert.equal(parsed.year.max, 2010);
assert.equal(parseQueryFromSearch("?view=cards", empty), null);

console.log("queryUrl.test.ts ok");
