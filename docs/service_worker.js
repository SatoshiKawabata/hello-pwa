// キャッシュファイルの指定
var CACHE_NAME = 'hello-pwa-caches';
var urlsToCache = [
    '/index.js',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                console.log("installed sw", event, cache);
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                console.log("installed sw", event, response);
                return response ? response : fetch(event.request);
            })
    );
});