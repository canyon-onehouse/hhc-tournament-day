/* Huntsville Hope Classic — day-of service worker.
   Goal: the site keeps working on flaky / no signal once it's been opened.
   - Page navigations: network-first (fresh when online), fall back to cache,
     then to the cached home page as a last resort.
   - Static assets (_next/static, fonts, images, icons): cache-first; they're
     content-hashed and safe to serve from cache indefinitely.
   Bump CACHE_VERSION to invalidate old caches on deploy. */

const CACHE_VERSION = "hhc-v1";
const PRECACHE = [
  "/",
  "/players",
  "/special-guests",
  "/sponsors",
  "/volunteers",
  "/sponsors-wall",
  "/course",
  "/faq",
  "/manifest.webmanifest",
  "/icon-ohp-square-color.svg",
  "/symbol-ohp-glyph.svg",
  "/logo-ohp-white.svg",
  "/golfer.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))),
      )
      .then(() => self.clients.claim()),
  );
});

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    /\.(?:woff2?|ttf|otf|png|jpg|jpeg|gif|svg|webp|ico)$/.test(url.pathname)
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // let cross-origin pass through

  // Page navigations → network-first.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request).then((hit) => hit || caches.match("/"))),
    );
    return;
  }

  // Static assets → cache-first.
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(request, copy));
            return res;
          }),
      ),
    );
  }
});
