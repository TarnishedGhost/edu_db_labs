/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "216736332354b319b071155b333bf428"
  },
  {
    "url": "assets/css/0.styles.1e5a53e3.css",
    "revision": "e1675fee86bc6d1e693787c4d261d0d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.68614f6a.js",
    "revision": "e1eb7944fe137159fa8207378a5f80a7"
  },
  {
    "url": "assets/js/10.70312636.js",
    "revision": "266ac7d94d5ae16655657069635c41f2"
  },
  {
    "url": "assets/js/13.d7ea9f54.js",
    "revision": "bb4dc5de41e6477d70492e83d739b38e"
  },
  {
    "url": "assets/js/14.a9eda1ca.js",
    "revision": "8f031e2b8dc2f8a9882d4b63566f5af7"
  },
  {
    "url": "assets/js/15.c8412884.js",
    "revision": "dc4946033ab64d2c79cc381f10669a80"
  },
  {
    "url": "assets/js/16.b26bee09.js",
    "revision": "5ee50e592b2eac140e28126bc88f857b"
  },
  {
    "url": "assets/js/17.590c51b3.js",
    "revision": "d0471aa10d577d5505eccbbfe6e2207c"
  },
  {
    "url": "assets/js/18.2d541e5e.js",
    "revision": "74a9e7a94d1c153e841cca6cc24b8a76"
  },
  {
    "url": "assets/js/19.cc25beeb.js",
    "revision": "0aac9ec5b621badf69b9a85c3e13b64c"
  },
  {
    "url": "assets/js/2.35c47c43.js",
    "revision": "8b510e437c17d369f1f6b3a53f75a3ac"
  },
  {
    "url": "assets/js/20.0debcd2c.js",
    "revision": "77a3e2f6961bc6f8f0818306bb80e37d"
  },
  {
    "url": "assets/js/21.90b77ca3.js",
    "revision": "01dc25a7634ecab3d90d1b04e476688a"
  },
  {
    "url": "assets/js/22.8115c12e.js",
    "revision": "15852d24631770cbf43977e322c695ef"
  },
  {
    "url": "assets/js/23.de8cd8fd.js",
    "revision": "c2aa4a1bddd9e907dab9824b58ed0fb8"
  },
  {
    "url": "assets/js/24.674adce6.js",
    "revision": "26df2978efef5898df7bb50e54ada84d"
  },
  {
    "url": "assets/js/25.9b8963e1.js",
    "revision": "6fd19c68e926a76c1897942ec79ef469"
  },
  {
    "url": "assets/js/26.0987628b.js",
    "revision": "fa09640eb133b89f2e21a0901effce65"
  },
  {
    "url": "assets/js/27.7e09bd0c.js",
    "revision": "8c098f83e26146ed8dc1c1fd6039b281"
  },
  {
    "url": "assets/js/28.9def706a.js",
    "revision": "885f2aa0f86ac79347d4e598e7b4dec1"
  },
  {
    "url": "assets/js/29.690359e4.js",
    "revision": "fcba5a597f22a87bb60e3030dfaf6775"
  },
  {
    "url": "assets/js/3.6aebb14a.js",
    "revision": "41d08f7f36759d8d129be94665a91ad7"
  },
  {
    "url": "assets/js/30.27e47661.js",
    "revision": "00b100e28123a16bdd691fb34f1ae3f3"
  },
  {
    "url": "assets/js/31.0dc042fc.js",
    "revision": "db4e3a43159f8c3f50e753a7eee9fbcf"
  },
  {
    "url": "assets/js/32.cc7f8cad.js",
    "revision": "f084e1f43f9b668f077a1de60487cd28"
  },
  {
    "url": "assets/js/33.5d521115.js",
    "revision": "41697a8d864093a640c9f180f5078eba"
  },
  {
    "url": "assets/js/34.86a8768f.js",
    "revision": "8704d6d3ddc71d5b669a1e7be755c531"
  },
  {
    "url": "assets/js/35.ba12da88.js",
    "revision": "f0c2538cb4542d557fa8bf91c3d34767"
  },
  {
    "url": "assets/js/36.457b689c.js",
    "revision": "43a6465438ae31fdb37654797c593362"
  },
  {
    "url": "assets/js/37.b32609e2.js",
    "revision": "e59e24c7286accc0999a10df7877e151"
  },
  {
    "url": "assets/js/38.dc53bdf9.js",
    "revision": "abe136e3214bcc78cef8a461237c9e9e"
  },
  {
    "url": "assets/js/39.7e35d427.js",
    "revision": "ea612bc11137a3809aa04d7118f68903"
  },
  {
    "url": "assets/js/4.73aaa767.js",
    "revision": "66451e4e016c95dc879f9c543b960d4b"
  },
  {
    "url": "assets/js/41.b7ad4f39.js",
    "revision": "4a64eabbfdab15775cabe77202431645"
  },
  {
    "url": "assets/js/5.38b471fb.js",
    "revision": "759cffccf773683f75fc28c0bb57af5b"
  },
  {
    "url": "assets/js/6.72637f41.js",
    "revision": "c09722846abf09ad935e046b364ac298"
  },
  {
    "url": "assets/js/7.584c7a9a.js",
    "revision": "3b7b1b9590b737a2b0369f39712cfc10"
  },
  {
    "url": "assets/js/8.b92cfe00.js",
    "revision": "af2e0ee9c73c1a0cdee062eeb78c38f0"
  },
  {
    "url": "assets/js/9.47470e96.js",
    "revision": "919b9f0643e716960e5f9ac6db6310d1"
  },
  {
    "url": "assets/js/app.3e442b2c.js",
    "revision": "857dc0ce84db8fae6ad5128fb6e4af13"
  },
  {
    "url": "assets/js/vendors~docsearch.3cefa927.js",
    "revision": "a771ffaa589785db57bba23b6f8f053b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f80adf44c69d64ec3f26058da09d73d9"
  },
  {
    "url": "design/index.html",
    "revision": "41af13b6637f485d920697358cdcf9d0"
  },
  {
    "url": "index.html",
    "revision": "8f6af4d790259e7bd570fb1bab5260a7"
  },
  {
    "url": "intro/index.html",
    "revision": "bf25b9528f205bab9891601e5eada8e9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "04ac4603a972d33ff59d4c40542baba1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ac5545b87828595cf29152fbeb40116f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "250508c323335768f3eaa3dbb5d7945e"
  },
  {
    "url": "software/index.html",
    "revision": "921282e093e9d70684feeeae039094be"
  },
  {
    "url": "test/index.html",
    "revision": "c5597a35ad4595eb3c0d58db6c0e3026"
  },
  {
    "url": "use cases/index.html",
    "revision": "6ee8625c387cecfb34eb90d65782f3bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
