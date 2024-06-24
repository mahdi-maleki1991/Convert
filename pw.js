

let catchVersion = 1.1;
// ----------------------------------


self.addEventListener('install', event => {
    skipWaiting()
    event.waitUntil(
        caches.open(`catchConvert-${catchVersion}`)
            .then(cash => {
                cash.addAll(['/', 'index.css', 'pw.js', 'index.js', 'manifest.json'])
            })
    )
})

// ---------------------------------

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(res => {
            res.forEach((cash, index) => {
                if (index !== res.length - 1) {
                    caches.delete(cash)
                }
            })
        })
    )
})

// ---------------------------------

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(res => {
            if (res) {
                return res
            } else {
                return fetch(event.request).then(serverRes => {
                    caches.open(`catchConvert-${catchVersion}`).then(cash => {
                        cash.put(event.request, serverRes.clone())
                        return serverRes
                    })
                })
            }
        })
    )
})








