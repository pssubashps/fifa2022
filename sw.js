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
