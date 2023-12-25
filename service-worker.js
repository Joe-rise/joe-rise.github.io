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
    "revision": "13b5af3839e45c25af8c72a406c33a94"
  },
  {
    "url": "assets/css/0.styles.ea3e2451.css",
    "revision": "2a1ff0417d6d451f10a44a834c879a51"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.e0962c06.js",
    "revision": "017152457bf4cace0bb74cf32c240ed6"
  },
  {
    "url": "assets/js/10.ee53e010.js",
    "revision": "d70adfb19c2ca895e9d6a00bac969616"
  },
  {
    "url": "assets/js/14.f1028e5d.js",
    "revision": "7392341e30d491d695c6e55d81154050"
  },
  {
    "url": "assets/js/15.f8cb13d7.js",
    "revision": "5dcf54f692c4efc11ac115fa54084f7b"
  },
  {
    "url": "assets/js/16.30ee7d5a.js",
    "revision": "bad3d72269f430c0ce35d93f4ee5dc73"
  },
  {
    "url": "assets/js/17.b8b0587c.js",
    "revision": "06df8a8f24ff7ae1e59b36fd260abd05"
  },
  {
    "url": "assets/js/18.abc82727.js",
    "revision": "e60647d242aca125135c7e419a034b04"
  },
  {
    "url": "assets/js/19.6ba90f6e.js",
    "revision": "4d1de73577c2814ca3c8455c91316392"
  },
  {
    "url": "assets/js/2.598e05b9.js",
    "revision": "0fc08258bbb598d973829135197d5337"
  },
  {
    "url": "assets/js/20.9e47b0ba.js",
    "revision": "52393b1a7537eb7fc6e559a43226bd05"
  },
  {
    "url": "assets/js/21.d538f228.js",
    "revision": "8c520fd23b8a89e8e3ff83fd42adab93"
  },
  {
    "url": "assets/js/22.ea61d033.js",
    "revision": "cf57d984d0f18a794eb00ea273c577af"
  },
  {
    "url": "assets/js/23.f3614136.js",
    "revision": "d74dce556c91ce79e933908eb94e3ecf"
  },
  {
    "url": "assets/js/24.760515ee.js",
    "revision": "9627519e8b1dcbb5e4f85607365ee0ce"
  },
  {
    "url": "assets/js/25.53d57f9e.js",
    "revision": "1bcd5b9d3d27256fb7bdd1c78b63a58b"
  },
  {
    "url": "assets/js/26.8654bb51.js",
    "revision": "61fc2e9d2eedd96b0f5cf4d1dd81838a"
  },
  {
    "url": "assets/js/27.b0169695.js",
    "revision": "de5bc653454bb5b9603a8d18f19de19e"
  },
  {
    "url": "assets/js/28.e879b87c.js",
    "revision": "ae5f8cd2be62ac0c45879f6e8668e61b"
  },
  {
    "url": "assets/js/29.e56df9d4.js",
    "revision": "c54d4ed48556fea1958a0b3e779ffe5e"
  },
  {
    "url": "assets/js/3.cda2d7e0.js",
    "revision": "e40b4af3e4aafbc63e6f3df58cbe2b05"
  },
  {
    "url": "assets/js/30.e085bb91.js",
    "revision": "b15ae150219911548b0853e80bd10f5f"
  },
  {
    "url": "assets/js/31.bd2dfc63.js",
    "revision": "4604c10d20397ffb597d7233c4105671"
  },
  {
    "url": "assets/js/32.29e4beaa.js",
    "revision": "427b41ed7dc193b1f288a8ded7f90a92"
  },
  {
    "url": "assets/js/33.c3cdb18f.js",
    "revision": "8da8089ec6383ff5ab48030ea90a2e8a"
  },
  {
    "url": "assets/js/34.10cb7134.js",
    "revision": "dbdf1bf0220d3fb1edfc4bec0261386b"
  },
  {
    "url": "assets/js/35.928e2e1d.js",
    "revision": "8e7c731f7cccbcf47b4f3865d7174aca"
  },
  {
    "url": "assets/js/36.c8370697.js",
    "revision": "96a13d6c4757eee589ba9c9093a14a1e"
  },
  {
    "url": "assets/js/37.0934b044.js",
    "revision": "c97cd0a3b390c96e4836d0534676ea18"
  },
  {
    "url": "assets/js/38.60368296.js",
    "revision": "ac912b9812404c6410160b63eba7ce61"
  },
  {
    "url": "assets/js/39.70443e5e.js",
    "revision": "c4ea274dfaec5e078e7869f98777df5c"
  },
  {
    "url": "assets/js/4.44289efc.js",
    "revision": "6e94f6f63329517405b9fa51f072cce0"
  },
  {
    "url": "assets/js/40.fa0a0252.js",
    "revision": "df058a17f81eed0683c45c80087665c6"
  },
  {
    "url": "assets/js/41.881646d0.js",
    "revision": "c8fe0c0c66937feb3325b7d8cb3316a3"
  },
  {
    "url": "assets/js/42.af807868.js",
    "revision": "e31b7c89806ce2714395aaf699c4a8ed"
  },
  {
    "url": "assets/js/43.5bed1a13.js",
    "revision": "979b26ccafd02d33aa242b606b5d2487"
  },
  {
    "url": "assets/js/44.0a29b6af.js",
    "revision": "98545d8a93b3d564aa1878752439dff3"
  },
  {
    "url": "assets/js/45.a32d10ee.js",
    "revision": "6d36169e5100df7e2a3a1b7c9c0c048c"
  },
  {
    "url": "assets/js/46.7ba57d95.js",
    "revision": "2cd928b5b64aad1f9b95878c2ad2738c"
  },
  {
    "url": "assets/js/47.1336eec3.js",
    "revision": "520d29fb9071d3394ebf5659cfbb945f"
  },
  {
    "url": "assets/js/48.499b3bfb.js",
    "revision": "bc5a2c47d4dad3ba8213d6a82601817d"
  },
  {
    "url": "assets/js/49.0a1fba74.js",
    "revision": "4df4b99a3242e76ccf420c05d7ecb8f9"
  },
  {
    "url": "assets/js/5.5374f778.js",
    "revision": "bdb2626b4d135cb12b5123dc40097136"
  },
  {
    "url": "assets/js/50.3c36f786.js",
    "revision": "a5e1c6fe275791d7e197fcd00da0ccf9"
  },
  {
    "url": "assets/js/51.49e38bdf.js",
    "revision": "42f6612e3484c45eebdfe5e311a7838d"
  },
  {
    "url": "assets/js/52.d9f44042.js",
    "revision": "9fe2668cdc6b57a4bbec363859ac5ae9"
  },
  {
    "url": "assets/js/53.46c71a65.js",
    "revision": "0ab57877727b297a5e0bd44c74a6469f"
  },
  {
    "url": "assets/js/54.c44b69d1.js",
    "revision": "42cabe23e66c5860669d914f8e087cfa"
  },
  {
    "url": "assets/js/55.ba47586d.js",
    "revision": "9062257d23f84e2d81664e74048c6af0"
  },
  {
    "url": "assets/js/56.4d7ff47d.js",
    "revision": "f5cfcc5dadead46c76328249bc6a5132"
  },
  {
    "url": "assets/js/57.3e286afd.js",
    "revision": "0b1af4430fb2175553c67299418b1e19"
  },
  {
    "url": "assets/js/58.419a076d.js",
    "revision": "093ce6622178d642b341ceb0cd3ee862"
  },
  {
    "url": "assets/js/59.a04e7e5a.js",
    "revision": "bc10b55095de0c56cec16891d0b6e9c3"
  },
  {
    "url": "assets/js/6.1028396e.js",
    "revision": "8c1a97642c508de1eb21bd250f9d45b5"
  },
  {
    "url": "assets/js/60.9963a58b.js",
    "revision": "beb6d5774a4f256f7f2ca4fe4e468d08"
  },
  {
    "url": "assets/js/61.d96ae1d4.js",
    "revision": "2ff75f56629aa3a6a196e274e6a05262"
  },
  {
    "url": "assets/js/62.b0bb5a7a.js",
    "revision": "3f8404e0b1393b64d0da798acc9d3f3d"
  },
  {
    "url": "assets/js/63.9191d059.js",
    "revision": "fdb5fcd6cbbaf9a4b53b8eba47fc6752"
  },
  {
    "url": "assets/js/64.e6a1012b.js",
    "revision": "1786a231f741d8f6a3a6f0a4f526df8b"
  },
  {
    "url": "assets/js/65.2317d828.js",
    "revision": "60ffa60d43eacd71cdd4343958c8d4a5"
  },
  {
    "url": "assets/js/66.604d06c7.js",
    "revision": "3904271a458fcc94e4edf784f7d95f76"
  },
  {
    "url": "assets/js/67.d3cc6389.js",
    "revision": "5c94139d10a7f2783916637ba6d0f23e"
  },
  {
    "url": "assets/js/68.423257b8.js",
    "revision": "47d8e6f2d717a072bd0c74bbeb36491c"
  },
  {
    "url": "assets/js/69.ec6c112c.js",
    "revision": "ea505df22a20234e81a69848b6fff0d6"
  },
  {
    "url": "assets/js/7.1eb069f4.js",
    "revision": "a39f8ea91513899ad3f7f6c509cd1dcd"
  },
  {
    "url": "assets/js/70.52773c65.js",
    "revision": "52ad2059afbfd25cd9bc1dc798669a2d"
  },
  {
    "url": "assets/js/71.fcc0a0c2.js",
    "revision": "b958301d5f68acfbc3e2b5b13381fe4a"
  },
  {
    "url": "assets/js/8.764b2e6f.js",
    "revision": "8ec6951cf8171a2b17c8f1bc5c4cc961"
  },
  {
    "url": "assets/js/9.f1a9ae09.js",
    "revision": "43c9877cca485de231e9a0dc3ead388e"
  },
  {
    "url": "assets/js/app.6e1fbabc.js",
    "revision": "682ab1adad43ed678bd68334749dc6df"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.59ed3fe9.js",
    "revision": "16c589ec51f5407dd9dac8e72e3396eb"
  },
  {
    "url": "assets/js/vendors~flowchart.f2c4f873.js",
    "revision": "603ebc87de6e679921bd454db54b0942"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/go/index.html",
    "revision": "161775454b1e67359fe3d83eb269bfa3"
  },
  {
    "url": "categories/index.html",
    "revision": "b4c1679a93a430720a038eada5c3e4ed"
  },
  {
    "url": "categories/java/index.html",
    "revision": "20b4f6282ea0a58892560e4968df8e79"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "cf14e92810a3bee4c5b3f7f30c177173"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "45ea3cae26773633f04e5850e14c020d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1817ef70ad0876eb0ac738de27f4a2ce"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2f0ff5667419963981c827a40d7214f8"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "1bfa1d79fb33231d3e88d8a2e4fd0c3d"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "1f96a9e238377f4bdd88326bbbc5425d"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "3e4abd780d33e85cbd1005f1148a4cd5"
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
    "revision": "af7f575dc0bdea89c6d702017341c0cd"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "af302e419d3ecc3320bffd895124fad2"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "583c7c64b0a88cb93361083f9a5e9607"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "942b186c679509de6acfc476fdc74a8c"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "cbca86baef0090b3da259e3674d8613d"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "0aae6e18c43e789b6290cad800bf1040"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "7d05e501992d1c848277940d0f5de6bc"
  },
  {
    "url": "tags/git/index.html",
    "revision": "8a83fe56de99184c97cdddd15a8c5e80"
  },
  {
    "url": "tags/go/index.html",
    "revision": "ba1427107c987fd2d0eda358b3ca2224"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "bae59f537d8f6bc657545f5888ad85fa"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "8e46651a65f8e214cdc6a569509f498e"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "b0d3c08666f3e59850d3fd796a4b543c"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "b6d2263d560542204f76a02b2c782a27"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "147c2748a43ad6b0f4400ae9170f273b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4ecb8befbcbf1e119e51f5b8a015020d"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "0e52ea3942723316535dec1fe99b2938"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f4d03dbe7c6c01f1bc260ea4ac7e483a"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "2334c885dad92e5d550a9d064c7d9b0b"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "6b19555eff9be9e598b99323935db36c"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "31a90b2dd5b9e2266f791d32a93aab4d"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "361d8fc247c71d403e254fa069e85e50"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "a69b20a2cbe503b172fc3e2497e63113"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "4ae6b7f0c69ce72d642c4ec0b6339aa9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5874d5a69561ee29861052991c1760eb"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "bd44bd8eff1243c09efe9f012898a2e9"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "c6976e10b7a2c53a6295ab39cceba616"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "7047315f3fcdc26fcaf34af3dc423ddd"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "112c62e7e61b8bc313cf1d2df4d92290"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "3c0e6d6cd54dbcdee46c41a11287c3d8"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "d9b3020fe942c3e094f2cbb6eda58658"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "11448cec693aba41afb917165f5f6f05"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd3f647d080b078eb5c17a4d83e4954a"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "373b784b2e80ddfe22eb7fec359e6959"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "1fa65a0f2ba1a55c91f39ca054e5d218"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "29cdb0d7d58ca09ac21731f89ca3c2d9"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "6ec0a931cf1841158cc9748a358d0490"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "3eaa616718b1888eca8915b2941d6fc0"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "202b03a6e028967660bc5d86f0cbd597"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "2dcd17440b93323bd422b8a49123a66d"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "d70f986e9f7357658846bcc23ba3cb0f"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "25f1140e34592fb7b011ef1b0208c13e"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "489fe94fa500d926a60288be554da605"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "8321b0466756b5dcf3e53243bb7253a4"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "199fa715aba5483a1d37a3faa1c5b854"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "d4cb1d2061f95d062989bbfd5704b830"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "7a4da308ac0f5eb09a6cd113213af217"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "afbab06f777e1ac0529b1202ece4311e"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "d82b7fe9dccc524f1fefa90438128a8f"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "eabfa48e86e83310effeb9e0aecd063a"
  },
  {
    "url": "技术文章/前端/vue01.html",
    "revision": "90ec6e6446727a4ad770c982bd568c8b"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "68c654bd132e40d895f72f6dc0e32611"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "91a83490908ea70ffc51f01f6e24c41a"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "9c4f97bdd29b43b4704b92575c71fee3"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "9efbf5abe4d6e01a218187b843b1d00a"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "af017dc95ee8eff97f83b7a1e40007db"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "3664f1060aaed33f35cd79c804d1eaa1"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "465a6073b0409c4a12313b9fabd8cae9"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "a79ebc6320f05103a680d5843dac6d22"
  },
  {
    "url": "技术文章/运维/linux 环境部署.html",
    "revision": "375da9f4cd4dc9f8d4096993088a0ae6"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "559fbce2057f7b3bacad244dcc448737"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "a9bebaeb77931a6fc63061581fa30e99"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c57659c49bde3951a2ba97be9f6dd834"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "7f117fa98729376bd72ca3fb99cb8a28"
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
