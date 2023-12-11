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
    "revision": "c655610140dc9e7d1ec73ce454a81253"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
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
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/image-20231211104953774.a8c870be.png",
    "revision": "a8c870bec32f1970e13ae84a438fe64e"
  },
  {
    "url": "assets/js/1.69286916.js",
    "revision": "b9f6c18d4d72f883b8120d3bccd776e3"
  },
  {
    "url": "assets/js/10.46723432.js",
    "revision": "1da783fbaad464edb0589e879c7a97be"
  },
  {
    "url": "assets/js/14.62344b98.js",
    "revision": "aad89fb8b2aff49c3c8a7135ec8189f8"
  },
  {
    "url": "assets/js/15.1fbfe70d.js",
    "revision": "2da1eb0715b055d4f2fb12c9ea8cbc44"
  },
  {
    "url": "assets/js/16.6e6cdeea.js",
    "revision": "b36c48840394f807d8bbd9a393f9413e"
  },
  {
    "url": "assets/js/17.efb08c7f.js",
    "revision": "4774b3a9001ec85d32c8be48d1eb1ac9"
  },
  {
    "url": "assets/js/18.eb00c973.js",
    "revision": "90b4552a2ab1a307f6b0d0d67897d19b"
  },
  {
    "url": "assets/js/19.1878cc46.js",
    "revision": "7320980e8fb5a0a9ca00491d999948b5"
  },
  {
    "url": "assets/js/2.c39384fa.js",
    "revision": "36b9fee333f5960da21a3140c7cc0ebc"
  },
  {
    "url": "assets/js/20.bfc374ec.js",
    "revision": "69da41aa1d706209cfe494a27cd8bde0"
  },
  {
    "url": "assets/js/21.f2ccef69.js",
    "revision": "0bf2788e0e5f4d41a848b8a42a4ecbb9"
  },
  {
    "url": "assets/js/22.a074bce3.js",
    "revision": "8b7886e315cb1a4c164254ca2cc4f76e"
  },
  {
    "url": "assets/js/23.3769dd14.js",
    "revision": "7546e809ded28bfbbab6af23035c17aa"
  },
  {
    "url": "assets/js/24.edbf6c45.js",
    "revision": "72263e09d1ddd78c2f2e28f08a1b6770"
  },
  {
    "url": "assets/js/25.2bfe7ef4.js",
    "revision": "c91a778f39939dd456c2e322da5cb048"
  },
  {
    "url": "assets/js/26.ada0f298.js",
    "revision": "4905885e7e84ba6dc957711a6786dfc0"
  },
  {
    "url": "assets/js/27.ffe7afcb.js",
    "revision": "adc83b16170950573e5366a2df30074e"
  },
  {
    "url": "assets/js/28.870e178f.js",
    "revision": "c172e668f8d3b80498b1a97fa190d5d3"
  },
  {
    "url": "assets/js/29.f15d1a8e.js",
    "revision": "0673751f5455728784511411bc586c83"
  },
  {
    "url": "assets/js/3.343befd0.js",
    "revision": "78490f3acd6e259514ed683aadf3bc06"
  },
  {
    "url": "assets/js/30.af67b859.js",
    "revision": "ff31534a5f1502b512eb6204684fc553"
  },
  {
    "url": "assets/js/31.fb2949f9.js",
    "revision": "3ed6e4f8e8b8b9d07b6d93898e0bdfbc"
  },
  {
    "url": "assets/js/32.8a947a05.js",
    "revision": "2f1b473c2364586b25c87ddf78f95272"
  },
  {
    "url": "assets/js/33.df8e7900.js",
    "revision": "8900b3da01e44d9ff9b55f115786f2ac"
  },
  {
    "url": "assets/js/34.d26c0bee.js",
    "revision": "81b39164eb75fb2d5975dddac37db641"
  },
  {
    "url": "assets/js/35.f8fb818b.js",
    "revision": "483ac82d8359969397fdaa27631e2237"
  },
  {
    "url": "assets/js/36.ca3d7ab5.js",
    "revision": "fb007c4eadf069f6ab8d747ab2394cc2"
  },
  {
    "url": "assets/js/37.595aa9e1.js",
    "revision": "9b4d0b26bcde07c9099e9abd78d198e0"
  },
  {
    "url": "assets/js/38.000fd113.js",
    "revision": "b2095e9788d3afcce85702fad9d66b1d"
  },
  {
    "url": "assets/js/39.d79f291e.js",
    "revision": "1a40a98d640e643c689a3f90f7935adf"
  },
  {
    "url": "assets/js/4.3eb44c9f.js",
    "revision": "3943bc04ea39428a1d25da1aa18c1f2c"
  },
  {
    "url": "assets/js/40.ea9567a1.js",
    "revision": "5f53febc9137d64081edddaee73dab5c"
  },
  {
    "url": "assets/js/41.e0a09cdb.js",
    "revision": "e3a45af2437f4fa8a411c7a61d9deeb4"
  },
  {
    "url": "assets/js/42.9a2ae23e.js",
    "revision": "19e4265ff64d541ea6ee96478ac8e1cd"
  },
  {
    "url": "assets/js/43.53e70f3e.js",
    "revision": "22d244345d04392fff972ed2b22d2ad3"
  },
  {
    "url": "assets/js/44.85c0d713.js",
    "revision": "b93a9c264fd0b3cdf4a489f5357c3cee"
  },
  {
    "url": "assets/js/45.b2a23978.js",
    "revision": "a7a5510744ff8e757b0676f2e92caac3"
  },
  {
    "url": "assets/js/5.06fcfb84.js",
    "revision": "5807c33761d5c141055fd88bf1aeae50"
  },
  {
    "url": "assets/js/6.8b3d59c5.js",
    "revision": "f8750e6a7890a41916924984646137b8"
  },
  {
    "url": "assets/js/7.9525d940.js",
    "revision": "dccf3c2634ff8e9bfe2f89d48e08637b"
  },
  {
    "url": "assets/js/8.247b7785.js",
    "revision": "e98b8d5223f430a0edcc261bf08f0c89"
  },
  {
    "url": "assets/js/9.c8a8d791.js",
    "revision": "b38ec5c82b904d473f21697c32ab138c"
  },
  {
    "url": "assets/js/app.06f5dcac.js",
    "revision": "c8739f89f896947e6f87c5bf5341aaa8"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.22953bb9.js",
    "revision": "58197fd5c897c8ee3f94d2fb0c8fda44"
  },
  {
    "url": "assets/js/vendors~flowchart.f04c1db0.js",
    "revision": "babb37373aad7ddf3035bd19a61dfb29"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "ffba09aea54f242fef59d57381ccc81f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "518667ca50e3745bc6d60fce90bb9778"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8ef86414a4f7d4f2aa65f7ab777c7e9b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "427eda4903e289f9880fbee017f9ef6b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "26d7c8a64cc079122707d2585ef3c072"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3c8b8e9aabff008d31ff977fb6fd2a2d"
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
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "5d19063569f3a998dc69a13e81be5a3c"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2c0622655e07d3119e68a1b68b259156"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7025861507531673ebab3df84ec100f9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "90df56054d3576f86edcc252e374b8ad"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f64e99b9bdce46f51a9678956cdaee84"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "98c551f3a686c5556f105200e3492a46"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a4622dc99060c887fc1a8448714e92a8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ea5d1a667f30d61e06930502cb7dc7c9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ea951d0d57338766906b61770a7f52f6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ab92d24974048e10dbebe867cae5deb9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "90164d878b19b2604bb7dbe35f67a573"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "6278f0d67a0911e0643fd70c12f423f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9c6eb04e51cb01352243b63330e41d0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "cf454266ca343e8d75f8b8d23253bc17"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a2e8d1290625449ee77400fc24cff9f6"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "491b0c16fc2be7ab2fba7ee61dcc3f89"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "7ee6066e8a6b2478b80b1fc08b1e3a9b"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f0a7ccbb561dc86b810545c9444187f9"
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
