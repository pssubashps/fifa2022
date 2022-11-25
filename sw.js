let beforeInstallPrompt = null;
let window = self;
window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

function eventHandler(event){
    console.log('event triggered');
    beforeInstallPrompt = event;        
}
function errorHandler(e){
    console.log('error: ' + e);
}
self.addEventListener('fetch', function(event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});