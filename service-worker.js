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
    "revision": "08f1b41ca341dbce00534ce9b8fdd298"
  },
  {
    "url": "assets/css/0.styles.ea3e2451.css",
    "revision": "2a1ff0417d6d451f10a44a834c879a51"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/image-20231211104953774.a8c870be.png",
    "revision": "a8c870bec32f1970e13ae84a438fe64e"
  },
  {
    "url": "assets/js/1.3dd38cc1.js",
    "revision": "e072642a79d8d69fed32d3271696211c"
  },
  {
    "url": "assets/js/10.f17ddb0e.js",
    "revision": "8935e6937dc9645b969c330417b4cec3"
  },
  {
    "url": "assets/js/14.67852bd1.js",
    "revision": "cac87de481163e270eb3b8264e4de840"
  },
  {
    "url": "assets/js/15.98c3a5c1.js",
    "revision": "b48177aab31236e5a2ca6ee655d92d71"
  },
  {
    "url": "assets/js/16.3146bbe2.js",
    "revision": "ef34d46b4011f7c481ff0c4134d22798"
  },
  {
    "url": "assets/js/17.e724d3dc.js",
    "revision": "ef9885d0f38bbc404f2eef179a29e96f"
  },
  {
    "url": "assets/js/18.0bc5c796.js",
    "revision": "286359adf2900722790a8ed03ef2fbab"
  },
  {
    "url": "assets/js/19.082e68ab.js",
    "revision": "9637550e889bb9896d6aa12c69efe6a2"
  },
  {
    "url": "assets/js/2.06dd8c1c.js",
    "revision": "233680bcd4ca97a7bf05a5064c11663b"
  },
  {
    "url": "assets/js/20.6ef1fddc.js",
    "revision": "35649c4d28827b9e25dc746063520420"
  },
  {
    "url": "assets/js/21.d538f228.js",
    "revision": "8c520fd23b8a89e8e3ff83fd42adab93"
  },
  {
    "url": "assets/js/22.2232c37b.js",
    "revision": "a1a5ddb65a39c229efe13a5831cd7098"
  },
  {
    "url": "assets/js/23.c307c3dd.js",
    "revision": "d204548c3fa38045932995ea67ef8311"
  },
  {
    "url": "assets/js/24.e519b815.js",
    "revision": "369b246bf3263904d96e65da74221a39"
  },
  {
    "url": "assets/js/25.42f942c6.js",
    "revision": "7b81dee8812d8a6b3fa10a17d5046808"
  },
  {
    "url": "assets/js/26.8654bb51.js",
    "revision": "61fc2e9d2eedd96b0f5cf4d1dd81838a"
  },
  {
    "url": "assets/js/27.b3e0e8f2.js",
    "revision": "a7697e453a5215e90a10af8352302071"
  },
  {
    "url": "assets/js/28.6622f9e0.js",
    "revision": "ffdb7c8388ccd11e63627193757d4e3f"
  },
  {
    "url": "assets/js/29.50ed4699.js",
    "revision": "c29898b32a90fab77bc12f9957748de1"
  },
  {
    "url": "assets/js/3.b109ee6c.js",
    "revision": "5eaed04a9b9f976e243838a7eb79ca0a"
  },
  {
    "url": "assets/js/30.491a1135.js",
    "revision": "8a8fb6bad3cfc737de7f288dcf3cb4fb"
  },
  {
    "url": "assets/js/31.de26f643.js",
    "revision": "e80461d315562d1438ce6bf2e042d91a"
  },
  {
    "url": "assets/js/32.9b5a6801.js",
    "revision": "5aac30fa1300706f8c969cb43b3c58ce"
  },
  {
    "url": "assets/js/33.e36d12b9.js",
    "revision": "c3d2ba1e4e7750be8d9797ad45bf3a8d"
  },
  {
    "url": "assets/js/34.2c23fdf9.js",
    "revision": "a4e5349a5f863a231b01ceba3bdfe4ce"
  },
  {
    "url": "assets/js/35.5c84f8e5.js",
    "revision": "dd9b70e7523cca698dc94f98be051adb"
  },
  {
    "url": "assets/js/36.c514f201.js",
    "revision": "76667bfd6c819306230aa802374ff6bd"
  },
  {
    "url": "assets/js/37.b9c52ffc.js",
    "revision": "592295ca18f83608e589a731c9b1c545"
  },
  {
    "url": "assets/js/38.8ca88835.js",
    "revision": "89f5000b4a7351f5eab81ec18c16ed01"
  },
  {
    "url": "assets/js/39.a729f193.js",
    "revision": "d5464ef0edfc1fe0164f3715aeaae1fe"
  },
  {
    "url": "assets/js/4.ed5cd58c.js",
    "revision": "07b79c11d559fb08360b12bc6accbb8e"
  },
  {
    "url": "assets/js/40.e0ea0e3a.js",
    "revision": "09cca8c786824dffaf93a86b6b42ec11"
  },
  {
    "url": "assets/js/41.5fc55b1b.js",
    "revision": "f7803321f7ab5aac1c03e0d8ee398d16"
  },
  {
    "url": "assets/js/42.47dd7dde.js",
    "revision": "02fbe5304bd6cfcb35b3fab834b6154a"
  },
  {
    "url": "assets/js/43.766838ad.js",
    "revision": "d2a7ed18cee9d2e512d90d1aadbb900b"
  },
  {
    "url": "assets/js/44.3455e76f.js",
    "revision": "2a581ae2c27347e128f8874c03174c35"
  },
  {
    "url": "assets/js/5.2cfb0cca.js",
    "revision": "69f42972831211ff6c76862097e7902d"
  },
  {
    "url": "assets/js/6.a55057b9.js",
    "revision": "6b82580f4319a12cc873709d67f800a7"
  },
  {
    "url": "assets/js/7.12ee96fd.js",
    "revision": "43f69b8ba7c2d465e8f761966e7714ab"
  },
  {
    "url": "assets/js/8.192b8cf5.js",
    "revision": "3670ad3806831587d9d171a3114f4805"
  },
  {
    "url": "assets/js/9.ba69025f.js",
    "revision": "c39cf0ddbc86ca49c3701a3c296d5bce"
  },
  {
    "url": "assets/js/app.51d5ca64.js",
    "revision": "b7d3ea9ed52b335ecdedba3525aa9a5f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.a24449db.js",
    "revision": "0a6c922abd855057b663f8c5581acc66"
  },
  {
    "url": "assets/js/vendors~flowchart.76c62586.js",
    "revision": "cb5abe8e042ad4340589e97be325d98e"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "717a55a9fd302b85984027599064c64f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9eee25ab60884b2d15b28b842ea5db29"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "84dfad12d92e85114fef133737f7429e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "4e75e26412d7fdd331039c9cc34d6c75"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "8ab2f83309db638b7e612a01e2e53841"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "index.html",
    "revision": "79caa15b636b19b8c68489bad4d92ff0"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "52b9fff32d5d343614b9600bcb5aac0e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c51d69635f2f36af0aaab6c910168143"
  },
  {
    "url": "tags/js/index.html",
    "revision": "302e755b4c988464a617a5094e217118"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "ae79010be49d11f8780149243971f565"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "3f36cf179911fd8fa17adbf2bb007742"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c82c7589a1333ffe7daf8d3156279f23"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6a0a514647ae79cbc8305b398f3ca900"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f245f78b4c9cbe52c4bb6adf922bde0a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c73c23994b584aa04b41253129b937b3"
  },
  {
    "url": "timeline/index.html",
    "revision": "92a9e8bd45a4a0317c7ce474aadc1c26"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bf7c336773752a232f69726b2a666598"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "5625ca1b97a98a304611605f295cb1f6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5107cf3d5bab99d97d5e91744d9954a4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b4bb50e0c51797c1e8f4d94ddd471bbe"
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
