import { CanvasIdSchema, type CanvasId, type CardId, type Route, type SeedCanvas } from "../domain/schema.ts";
import { isCanvasHash, parseRoute } from "../domain/route.ts";

const VIEW_MODES = ["canvas", "list", "cards"] as const;
export type ViewMode = (typeof VIEW_MODES)[number];

export const DEFAULT_VIEW: ViewMode = "list";
export const VIEW_STORAGE_KEY = "broadside.seed-browser.view";
const VIEW_QUERY_KEY = "view";

export const CANVAS_SURFACES = ["raw", "render"] as const;
export type CanvasSurface = (typeof CANVAS_SURFACES)[number];
export const DEFAULT_CANVAS_SURFACE: CanvasSurface = "render";
export const CANVAS_BUFFER_KEY = "broadside.seed-browser.canvas-buffer";

export type CanvasBuffer = {
  readonly source: string;
  readonly id: string | null;
  readonly surface: CanvasSurface;
};

export function parseViewMode(value: string | null | undefined): ViewMode | null {
  if (value === "canvas" || value === "list" || value === "cards") return value;
  return null;
}

export function parseCanvasSurface(value: string | null | undefined): CanvasSurface | null {
  if (value === "raw" || value === "render") return value;
  return null;
}

export function parseViewFromSearch(search: string): ViewMode | null {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  return parseViewMode(new URLSearchParams(raw).get(VIEW_QUERY_KEY));
}

/** Keep other query params; omit `view` when it is the default (list). */
export function printViewSearch(search: string, view: ViewMode): string {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(raw);
  if (view === DEFAULT_VIEW) params.delete(VIEW_QUERY_KEY);
  else params.set(VIEW_QUERY_KEY, view);
  const qs = params.toString();
  return qs === "" ? "" : `?${qs}`;
}

export function readStoredView(storage: Pick<Storage, "getItem"> | null): ViewMode {
  if (storage === null) return DEFAULT_VIEW;
  try {
    return parseViewMode(storage.getItem(VIEW_STORAGE_KEY)) ?? DEFAULT_VIEW;
  } catch {
    return DEFAULT_VIEW;
  }
}

export function writeStoredView(storage: Pick<Storage, "setItem"> | null, view: ViewMode): void {
  if (storage === null) return;
  try {
    storage.setItem(VIEW_STORAGE_KEY, view);
  } catch {
    // private mode / blocked storage
  }
}

export function parseCanvasBuffer(raw: string | null | undefined): CanvasBuffer | null {
  if (raw == null || raw === "") return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    const record = parsed as Record<string, unknown>;
    if (typeof record.source !== "string") return null;
    const surface = parseCanvasSurface(typeof record.surface === "string" ? record.surface : null);
    const id = typeof record.id === "string" && record.id.length > 0 ? record.id : null;
    return { source: record.source, id, surface: surface ?? DEFAULT_CANVAS_SURFACE };
  } catch {
    return null;
  }
}

export function readStoredCanvasBuffer(storage: Pick<Storage, "getItem"> | null): CanvasBuffer | null {
  if (storage === null) return null;
  try {
    return parseCanvasBuffer(storage.getItem(CANVAS_BUFFER_KEY));
  } catch {
    return null;
  }
}

export function writeStoredCanvasBuffer(
  storage: Pick<Storage, "setItem"> | null,
  buffer: CanvasBuffer,
): void {
  if (storage === null) return;
  try {
    storage.setItem(CANVAS_BUFFER_KEY, JSON.stringify(buffer));
  } catch {
    // private mode / blocked storage
  }
}

/** URL `?view=` wins over localStorage; a URL hit is written back to storage. */
export function resolveView(
  search: string,
  storage: Pick<Storage, "getItem" | "setItem"> | null,
): ViewMode {
  const fromUrl = parseViewFromSearch(search);
  if (fromUrl !== null) {
    writeStoredView(storage, fromUrl);
    return fromUrl;
  }
  return readStoredView(storage);
}

export function restoreCanvas(
  canvases: ReadonlyArray<SeedCanvas>,
  buffer: CanvasBuffer | null,
): { readonly id: CanvasId | null; readonly source: string; readonly surface: CanvasSurface } {
  if (buffer !== null) {
    const parsed = buffer.id === null ? null : CanvasIdSchema.safeParse(buffer.id);
    return {
      id: parsed?.success === true ? parsed.data : null,
      source: buffer.source,
      surface: buffer.surface,
    };
  }
  const first = canvases[0];
  return { id: first?.id ?? null, source: first?.source ?? "", surface: DEFAULT_CANVAS_SURFACE };
}

export type CanvasOpen = {
  readonly route: Route;
  readonly view: ViewMode;
  readonly lastCardId: CardId | null;
  readonly canvasId: CanvasId | null;
  readonly canvasSource: string;
  readonly canvasSurface: CanvasSurface;
};

/**
 * Hash `#canvas/<stem>` selects that packed canvas and forces canvas view.
 * Packed source wins when the leftover buffer is a different canvas.
 * Invalid / unknown canvas slug → canvas catalog (no selection hash).
 * `?view=canvas` with no hash still opens canvas (first / stored buffer).
 */
export function openCanvas(args: {
  readonly hash: string;
  readonly view: ViewMode;
  readonly canvases: ReadonlyArray<SeedCanvas>;
  readonly buffer: CanvasBuffer | null;
}): CanvasOpen {
  const route = parseRoute(args.hash);
  const restored = restoreCanvas(args.canvases, args.buffer);
  const lastCardId = route._tag === "Card" ? route.id : null;

  if (route._tag === "Canvas" || isCanvasHash(args.hash)) {
    const hit = route._tag === "Canvas" ? args.canvases.find((canvas) => canvas.id === route.id) : undefined;
    if (hit !== undefined) {
      return {
        route,
        view: "canvas",
        lastCardId,
        canvasId: hit.id,
        canvasSource: restored.id === hit.id ? restored.source : hit.source,
        canvasSurface: restored.surface,
      };
    }
    return {
      route: { _tag: "Catalog" },
      view: "canvas",
      lastCardId,
      canvasId: restored.id,
      canvasSource: restored.source,
      canvasSurface: restored.surface,
    };
  }

  const view = args.view;
  const promoted: Route =
    view === "canvas" && route._tag === "Catalog" && restored.id !== null
      ? { _tag: "Canvas", id: restored.id }
      : route;
  return {
    route: promoted,
    view,
    lastCardId,
    canvasId: restored.id,
    canvasSource: restored.source,
    canvasSurface: restored.surface,
  };
}

export function browserStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
