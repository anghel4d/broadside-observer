import assert from "node:assert/strict";
import {
  THEME_STORAGE_KEY,
  parseTheme,
  readStoredTheme,
  resolveTheme,
  writeStoredTheme,
} from "./theme.ts";

assert.equal(parseTheme("light"), "light");
assert.equal(parseTheme("dark"), "dark");
assert.equal(parseTheme("system"), null);
assert.equal(parseTheme(""), null);
assert.equal(parseTheme(null), null);
assert.equal(parseTheme(undefined), null);

assert.equal(resolveTheme("light", true), "light");
assert.equal(resolveTheme("dark", false), "dark");
assert.equal(resolveTheme("light", false), "light");
assert.equal(resolveTheme("dark", true), "dark");
assert.equal(resolveTheme(null, true), "dark");
assert.equal(resolveTheme(null, false), "light");
assert.equal(resolveTheme(undefined, true), "dark");
assert.equal(resolveTheme(undefined, false), "light");
assert.equal(resolveTheme("", true), "dark");
assert.equal(resolveTheme("nope", false), "light");

assert.equal(readStoredTheme(null), null);
assert.equal(readStoredTheme({ getItem: () => null }), null);
assert.equal(readStoredTheme({ getItem: () => "light" }), "light");
assert.equal(
  readStoredTheme({
    getItem: () => {
      throw new Error("blocked");
    },
  }),
  null,
);

const store = new Map<string, string>();
writeStoredTheme(
  {
    setItem: (key, value) => {
      store.set(key, value);
    },
  },
  "light",
);
assert.equal(store.get(THEME_STORAGE_KEY), "light");
assert.equal(resolveTheme(store.get(THEME_STORAGE_KEY), true), "light");

writeStoredTheme(null, "dark");
writeStoredTheme(
  {
    setItem: () => {
      throw new Error("blocked");
    },
  },
  "dark",
);

console.log("theme.test.ts ok");
