console.log("hello-pwa");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service_worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}