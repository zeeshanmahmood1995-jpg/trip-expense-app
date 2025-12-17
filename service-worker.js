self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("trip-app").then(cache =>
      cache.addAll(["./index.html"])
    )
  );
});
