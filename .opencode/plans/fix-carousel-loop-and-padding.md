# Fix carousel — loop gap, side padding, and animation pauses

## Root cause of pauses
`transition-all` on the scene wrapper makes the browser track ALL property transitions during scene changes, causing repaint contention. The fix:
1. Replace `transition-all` with explicit `transition-[opacity,transform]` on all 3 scene wrappers
2. Add `will-change: transform` to the carousel animated element to promote it to its own GPU layer (isolates it from parent repaints)

---

## 1. Card wrapper — reduce padding & gap

**File:** `src/App.tsx` line 316

```diff
-<div className="flex h-full gap-4 rounded-base border-2 border-border bg-white p-4 shadow-shadow">
+<div className="flex h-full gap-3 rounded-base border-2 border-border bg-white p-3 shadow-shadow">
```

## 2. Scene wrappers — narrow `transition-all` to fix carousel pauses

**File:** `src/App.tsx` lines 321, 342, 370

Apply to all 3 scene wrappers (left, center, right):

```diff
-className="absolute inset-0 transition-all duration-700 ease-in-out"
+className="absolute inset-0 transition-[opacity,transform] duration-700 ease-in-out"
```

## 3. Center column — remove `px-6`

**File:** `src/App.tsx` line 342

```diff
-className="absolute inset-0 flex items-center justify-center px-6 transition-all duration-700 ease-in-out"
+className="absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-700 ease-in-out"
```

## 4. Left panel carousel — add spacer at loop boundary + `will-change`

**File:** `src/App.tsx` lines 328-333

```diff
-                  <div className="absolute inset-0 overflow-hidden [mask-image:...]">
-                    <div className="h-[200%] animate-scroll-down">
-                      <div className="h-1/2">{scene.leftPanel}</div>
-                      <div className="h-1/2">{scene.leftPanel}</div>
-                    </div>
-                  </div>
+                  <div className="absolute inset-0 overflow-hidden [mask-image:...]">
+                    <div className="flex flex-col h-[200%] animate-scroll-down will-change-transform">
+                      <div className="h-[calc(50%-0.375rem)]">{scene.leftPanel}</div>
+                      <div className="h-3" />
+                      <div className="h-[calc(50%-0.375rem)]">{scene.leftPanel}</div>
+                    </div>
+                  </div>
```

## 5. Right panel carousel — same fix

**File:** `src/App.tsx` lines 377-382

```diff
-                  <div className="absolute inset-0 overflow-hidden [mask-image:...]">
-                    <div className="h-[200%] animate-scroll-up">
-                      <div className="h-1/2">{scene.rightPanel}</div>
-                      <div className="h-1/2">{scene.rightPanel}</div>
-                    </div>
-                  </div>
+                  <div className="absolute inset-0 overflow-hidden [mask-image:...]">
+                    <div className="flex flex-col h-[200%] animate-scroll-up will-change-transform">
+                      <div className="h-[calc(50%-0.375rem)]">{scene.rightPanel}</div>
+                      <div className="h-3" />
+                      <div className="h-[calc(50%-0.375rem)]">{scene.rightPanel}</div>
+                    </div>
+                  </div>
```

## Build
```bash
npm run build
```
