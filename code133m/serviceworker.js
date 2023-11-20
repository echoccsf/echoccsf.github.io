const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", event => {
    event.waitUntil(
        addResourcesToCache([
            "index.html",
            "style.css",
            "app.js",
            "lightblue.jpg",
            "lightgold.jpg",
            "manifest.json",
            "go-128.png",
            "go-512.png"
        ]),
    );
});

self.addEventListener("activate", event => {
    console.log("Service worker activated");
});

const putInCache = async (request, response) => {
    const cache = await caches.open("v1");

    if (request.method === 'POST') {
        console.log('Cannot cache POST requests')
        return
    }

    await cache.put(request, response);
};

const cacheFirst = async (request) => {
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request));
});