const CACHE="tabungan-pribadi-pacar-exact-layout-v2";
const FILES=["./","./index.html","./style.css","./app.js","./manifest.json","./icon.svg"];
self.addEventListener("install",event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)))});
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;event.respondWith((async()=>{const url=new URL(event.request.url);if(url.pathname.endsWith("/app.js")||url.pathname.endsWith("/index.html")||url.pathname.endsWith("/")){try{return await fetch(event.request,{cache:"no-store"})}catch(e){return (await caches.match(event.request))||Response.error()}}return (await caches.match(event.request))||fetch(event.request)})())});
