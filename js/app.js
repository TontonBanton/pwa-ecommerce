if ('serviceWorker' in navigator) {            //Navigator - object for the browser used
  navigator.serviceWorker.register('/sw.js')   //Register the sw.js as a service worker
  .then((regObj) => console.log('Service worker is registered', regObj))
  .catch((err) => console.log('Service worker not registered or supported', err))
}