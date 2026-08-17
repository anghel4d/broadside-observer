import { transform } from "sucrase";
import { err, ok, type Result } from "../domain/result.ts";
import * as canvas from "./index.ts";
import { Fragment, h, mount, type Child, type Component } from "./h.ts";
import { useHostTheme } from "./theme.ts";

function requireCanvas(specifier: string): typeof canvas {
  if (specifier === "cursor/canvas") return canvas;
  throw new Error(`Canvas can only import "cursor/canvas" (got ${specifier})`);
}

export function compileCanvas(source: string): Result<string, Component> {
  let code: string;
  try {
    code = transform(source, {
      transforms: ["typescript", "jsx", "imports"],
      jsxRuntime: "classic",
      jsxPragma: "h",
      jsxFragmentPragma: "Fragment",
      production: true,
    }).code;
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    return err(message);
  }
  try {
    const factory = new Function(
      "exports",
      "require",
      "h",
      "Fragment",
      `${code}\nreturn exports.default;`,
    ) as (
      exports: Record<string, unknown>,
      require: typeof requireCanvas,
      jsx: typeof h,
      fragment: typeof Fragment,
    ) => unknown;
    const exports: Record<string, unknown> = {};
    const component = factory(exports, requireCanvas, h, Fragment);
    if (typeof component !== "function") return err("Canvas must default-export a function component");
    return ok(component as Component);
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    return err(message);
  }
}

export function renderCanvas(source: string, host: Element): Result<string, void> {
  const compiled = compileCanvas(source);
  if (compiled._tag === "Err") return compiled;
  try {
    const tree: Child = compiled.value({});
    if (host instanceof HTMLElement) {
      const theme = useHostTheme();
      host.style.background = theme.bg.editor;
      host.style.color = theme.text.primary;
    }
    mount(tree, host);
    return ok(undefined);
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    return err(message);
  }
}
