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
    "revision": "657720bf1222c0ac8bc95943f90f5aba"
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
    "url": "assets/js/1.e37a647d.js",
    "revision": "a8c0eae407d9a44339ca14665f3bfc51"
  },
  {
    "url": "assets/js/10.72a0c63d.js",
    "revision": "7844e9ca6fc444cd2fc5415e2ebb9be4"
  },
  {
    "url": "assets/js/14.07628750.js",
    "revision": "2731f1910c4a08022f8e18c263f677c9"
  },
  {
    "url": "assets/js/15.0ea4c78d.js",
    "revision": "4fee6eb3d0f29739140c1e5b26a81fe5"
  },
  {
    "url": "assets/js/16.d4232655.js",
    "revision": "c3d73cfffbeb3659b519d0683ea96cb4"
  },
  {
    "url": "assets/js/17.68996020.js",
    "revision": "e2cebc83a08708d343a192fab59e4cf9"
  },
  {
    "url": "assets/js/18.fae8d999.js",
    "revision": "8b781fb012a2cd18a83a8936967b5b60"
  },
  {
    "url": "assets/js/19.395195d8.js",
    "revision": "03dab1a8897c9780b525184d2ce7de6b"
  },
  {
    "url": "assets/js/2.07e24870.js",
    "revision": "dec3d5bba80211d5cb3cfc4539685265"
  },
  {
    "url": "assets/js/20.82f01be1.js",
    "revision": "f7c25d6449b8f0ab8de06d1545643ad2"
  },
  {
    "url": "assets/js/21.f2ccef69.js",
    "revision": "0bf2788e0e5f4d41a848b8a42a4ecbb9"
  },
  {
    "url": "assets/js/22.c8016968.js",
    "revision": "d9ec110c0b238590eb9f60a0e3b1410f"
  },
  {
    "url": "assets/js/23.2ff5ceb4.js",
    "revision": "cacacb5e74fc04fdd95d55de7e6f1de3"
  },
  {
    "url": "assets/js/24.8198d308.js",
    "revision": "ca2dedcb26b2d36f8eb4a2cc482ee083"
  },
  {
    "url": "assets/js/25.639e5ca4.js",
    "revision": "259493a2b5e6325d58e58a2ebabfed84"
  },
  {
    "url": "assets/js/26.ada0f298.js",
    "revision": "4905885e7e84ba6dc957711a6786dfc0"
  },
  {
    "url": "assets/js/27.0a893db0.js",
    "revision": "f872ef2b3183d67881d7081dcc50d71a"
  },
  {
    "url": "assets/js/28.cf46b2f6.js",
    "revision": "defa2e39914327eb2e11a48b87b3ed3d"
  },
  {
    "url": "assets/js/29.2d39703b.js",
    "revision": "91383bb75ca2c854e108be41457837fd"
  },
  {
    "url": "assets/js/3.692df1d5.js",
    "revision": "ce8de060ed6e7bcd8515588ef003d0b6"
  },
  {
    "url": "assets/js/30.2da82914.js",
    "revision": "ac4f39039fae5e82a822ffc5e773b176"
  },
  {
    "url": "assets/js/31.a84fef17.js",
    "revision": "d695c8d42b8fd234d3c1927e5067dc44"
  },
  {
    "url": "assets/js/32.41f87350.js",
    "revision": "34b4013bf600ce43809d16f203cfad9b"
  },
  {
    "url": "assets/js/33.b5975388.js",
    "revision": "62b1d857c123093370ea6104d4e31921"
  },
  {
    "url": "assets/js/34.9286622a.js",
    "revision": "e516dc17931f4ab5749140ff87190634"
  },
  {
    "url": "assets/js/35.5fe1da19.js",
    "revision": "0c7b127a7da8b53c4b8a2cbaa55300c1"
  },
  {
    "url": "assets/js/36.2388060c.js",
    "revision": "f7eee0aec3465c10f44010fa2559cf3d"
  },
  {
    "url": "assets/js/37.b8b9b072.js",
    "revision": "50d5011673bbe5869ad7bc1a3daea952"
  },
  {
    "url": "assets/js/38.ff9a177d.js",
    "revision": "3bda664ff55e72d0507d5fb4d4f735d1"
  },
  {
    "url": "assets/js/39.d79f291e.js",
    "revision": "1a40a98d640e643c689a3f90f7935adf"
  },
  {
    "url": "assets/js/4.fad730e6.js",
    "revision": "098093e538490885624b928863f62bd2"
  },
  {
    "url": "assets/js/40.2e4971cf.js",
    "revision": "056ae08c26b9e6d550deda131add6be0"
  },
  {
    "url": "assets/js/41.8d4fcc79.js",
    "revision": "7fb5ef92ce5e72ce96e34039410d5bf3"
  },
  {
    "url": "assets/js/42.da0af847.js",
    "revision": "7eba9ed0101076cb883b9e12c3fbfa8c"
  },
  {
    "url": "assets/js/43.acb279f1.js",
    "revision": "7fb44ad81e7a1a006b8c947b0fbd9f94"
  },
  {
    "url": "assets/js/44.92ad9540.js",
    "revision": "4dbd1cb1d9c8e13d7fb804c89646dd99"
  },
  {
    "url": "assets/js/45.97aaa4c9.js",
    "revision": "8439d87426b14d06affb46d661535179"
  },
  {
    "url": "assets/js/5.f346aaac.js",
    "revision": "c90886d662fba0c40ebabe6e7083138c"
  },
  {
    "url": "assets/js/6.78043dd4.js",
    "revision": "5e73cc19e0512825baab9bc59016713e"
  },
  {
    "url": "assets/js/7.5e275f1d.js",
    "revision": "4c840dab30c793b86020a5fe026c7b07"
  },
  {
    "url": "assets/js/8.1f9f2c18.js",
    "revision": "3558cf36a290c03637c0133af94e9fc0"
  },
  {
    "url": "assets/js/9.2fe5ad50.js",
    "revision": "6e1ced4c78850161dfeb189a69e28b14"
  },
  {
    "url": "assets/js/app.7d497a71.js",
    "revision": "733ff43298eeedc9bd71a13caf0c090a"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.8539314b.js",
    "revision": "f5ddd53d0c15c877b8c6ebf65f2d825c"
  },
  {
    "url": "assets/js/vendors~flowchart.44c0e8af.js",
    "revision": "67fbceafa5e13887572d7d94a154d71f"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "dee9fdcd83ceca7d8ed1f489356770fd"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2c95abe945c1393e395b690facbda9ef"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "00b4d6bc97e60aecda08ac268b4b76f5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4578b16c08265ba539647c8b4b48254e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2e44d84634868f346c6ff7d801779b17"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "fe76df749e6265de1e08af7b58c45e0c"
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
    "revision": "8a21f3a14d333917d3471b8212b2390f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "67022b976ddc73d3939e3fbeace33f2e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "337d8314bf7460fa732b9dc1c883fa58"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "defc5796bfd05451a03bf922562d1ef3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "fc8813f785e984865faf78badccdc7fc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "444a264621b4708624b56a85cfb051ca"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2ee59d2149409be489613c52700e3767"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8e59b206525dc5ebd046762c4d66da8a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "b44ab5b66b31585e5ec53e251cbec42d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "08dd211ee9977730f3e29931ff8464d7"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "2d89747286bdbb78937e9500857dee93"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "0b4fb0112fd2285a9585bfda6e85ae5d"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb60838d3706319ad7930ee70af1e650"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "32913fe8b517d45fd0079539f8c65483"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3c21856e1fecbc5d60c1d5b1aa128889"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "974c76cb57453a3a09f2ce7b99abc3d6"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4a7f169b9476682708c002d98e76b346"
  },
  {
    "url": "生活分享/life.html",
    "revision": "60b34b13d28d47de3bca156e1c05aa92"
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
