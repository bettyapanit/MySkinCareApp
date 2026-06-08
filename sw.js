const CACHE='skincare-v6';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(clients.claim());});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const cl=r.clone();caches.open(CACHE).then(ca=>ca.put(e.request,cl));return r;}).catch(()=>c)));});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='NOTIFY'){const{title,body,tag}=e.data;e.waitUntil(self.registration.showNotification(title,{body,tag,renotify:true,icon:'icon-192.png',vibrate:[200,100,200],dir:'rtl',lang:'he'}));}});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus'in c)return c.focus();}return clients.openWindow('./');}));});
