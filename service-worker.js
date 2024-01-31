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
    "revision": "73d8b04b902bb571b98f8a9d017f10fd"
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
    "url": "assets/js/39.971400ce.js",
    "revision": "69194280a37cde25c7bb27bbea12df67"
  },
  {
    "url": "assets/js/4.44289efc.js",
    "revision": "6e94f6f63329517405b9fa51f072cce0"
  },
  {
    "url": "assets/js/40.a9ab8284.js",
    "revision": "ee6b5e50e8b46b7787faebe2e0eb02ae"
  },
  {
    "url": "assets/js/41.0fec62a6.js",
    "revision": "cab798578a5a22a94c303543a27d9fdf"
  },
  {
    "url": "assets/js/42.4be630c5.js",
    "revision": "5dcca4cfdd754fa9929a6d5283d354d6"
  },
  {
    "url": "assets/js/43.1cccb591.js",
    "revision": "2c6d3fc59037ced5697db7a99da9ae1c"
  },
  {
    "url": "assets/js/44.f9e60cee.js",
    "revision": "11f96fdf9531caa12088469ed3bd0e7c"
  },
  {
    "url": "assets/js/45.6e5f97c0.js",
    "revision": "109a6684de535a5b732257451cb7a92d"
  },
  {
    "url": "assets/js/46.22e60974.js",
    "revision": "6ee3e577740ac3b3790034c2e48aa6db"
  },
  {
    "url": "assets/js/47.e18cb5a5.js",
    "revision": "17fc169303d713b679b17a0cd834576e"
  },
  {
    "url": "assets/js/48.424bffc1.js",
    "revision": "e330b5d13b04dd58a847d7f736f7523b"
  },
  {
    "url": "assets/js/49.a1bd9f40.js",
    "revision": "fae0c4cb1bf15e6c2011f0937a219ceb"
  },
  {
    "url": "assets/js/5.5374f778.js",
    "revision": "bdb2626b4d135cb12b5123dc40097136"
  },
  {
    "url": "assets/js/50.e0f4eb6f.js",
    "revision": "85292d20586b4376e5a0882b4c654459"
  },
  {
    "url": "assets/js/51.520c8a79.js",
    "revision": "e3b1d573c2219383994440a3a199dd8e"
  },
  {
    "url": "assets/js/52.1273eeaf.js",
    "revision": "9ee2db50ad4805d2794f66c8947c9be6"
  },
  {
    "url": "assets/js/53.2e274a59.js",
    "revision": "bba09b7f4c41d47c86ce24a8d06e1145"
  },
  {
    "url": "assets/js/54.71b735b0.js",
    "revision": "914fc94adea93380cd260352bf45253e"
  },
  {
    "url": "assets/js/55.34da7498.js",
    "revision": "64d84b7e1cda02d77c4e9138bb9c9bc2"
  },
  {
    "url": "assets/js/56.87f7d385.js",
    "revision": "2d793789ec031c41160a511ef601c8fa"
  },
  {
    "url": "assets/js/57.ee0ac50b.js",
    "revision": "dd6feced9d3ae0a58079080ce55672cc"
  },
  {
    "url": "assets/js/58.41a36e8d.js",
    "revision": "f6221091408396792a12c182cd421606"
  },
  {
    "url": "assets/js/59.eee1a38f.js",
    "revision": "22434df4481dc9f79964b5008097d006"
  },
  {
    "url": "assets/js/6.1028396e.js",
    "revision": "8c1a97642c508de1eb21bd250f9d45b5"
  },
  {
    "url": "assets/js/60.be88e9ca.js",
    "revision": "d12d925be1c94b442587e0bb991c3a35"
  },
  {
    "url": "assets/js/61.51323c88.js",
    "revision": "1abf338bb215e64deba0ebd903761dc7"
  },
  {
    "url": "assets/js/62.551c1b99.js",
    "revision": "84aa55354d6713b5ecb251ab98ace773"
  },
  {
    "url": "assets/js/63.a2ff108a.js",
    "revision": "e0670e59e5aeb25ab59b308ab8fbf280"
  },
  {
    "url": "assets/js/64.a6b0d3dc.js",
    "revision": "9269fc1bc1c551d027e493359225c471"
  },
  {
    "url": "assets/js/65.4f2504e8.js",
    "revision": "0afd33dc082e443480abc4a38baaa83f"
  },
  {
    "url": "assets/js/66.36c376b1.js",
    "revision": "3eb69d0c4dbad791c649139524b22c2f"
  },
  {
    "url": "assets/js/67.9156cea5.js",
    "revision": "822d4eff6338c1dd6419eee550cc891e"
  },
  {
    "url": "assets/js/68.9ffaa345.js",
    "revision": "56dd7a7d2a846efad55653d2690d4bae"
  },
  {
    "url": "assets/js/69.85d98e89.js",
    "revision": "8e53db44935c5a747c5f2eb932f25982"
  },
  {
    "url": "assets/js/7.1eb069f4.js",
    "revision": "a39f8ea91513899ad3f7f6c509cd1dcd"
  },
  {
    "url": "assets/js/70.dc476d67.js",
    "revision": "addef8e94f9c79aa1ef9d6a1f3c48f1c"
  },
  {
    "url": "assets/js/71.8ce69410.js",
    "revision": "6c3dd271df3aba6d57902ce53fe10273"
  },
  {
    "url": "assets/js/72.c21c5069.js",
    "revision": "c8d77bacc8f9fa236bda52ab6676f56d"
  },
  {
    "url": "assets/js/73.ca7cccf6.js",
    "revision": "469a3a7442ce179489eb773920f5da86"
  },
  {
    "url": "assets/js/74.e3ea8f0e.js",
    "revision": "90753caf57d371aef9709e9eaf37cd85"
  },
  {
    "url": "assets/js/75.51d4fcd2.js",
    "revision": "134c2045619d8d301c3375d4af03b389"
  },
  {
    "url": "assets/js/76.3244132e.js",
    "revision": "8b9f208c9a94e127138c3ebeaea48616"
  },
  {
    "url": "assets/js/77.937f3dcd.js",
    "revision": "f7f2c1d973d5c55af8579f552ba28296"
  },
  {
    "url": "assets/js/78.15dfd590.js",
    "revision": "b199d69408e9da80909a9a95ddad117f"
  },
  {
    "url": "assets/js/79.300772de.js",
    "revision": "b1e3478c825405bac0f78bbc388ea825"
  },
  {
    "url": "assets/js/8.764b2e6f.js",
    "revision": "8ec6951cf8171a2b17c8f1bc5c4cc961"
  },
  {
    "url": "assets/js/80.4938e4c1.js",
    "revision": "f30406d9e7482b3a9a21a2ce6bc769a5"
  },
  {
    "url": "assets/js/81.b06483c1.js",
    "revision": "182bde903bbbf7b3488d31cf542b5b98"
  },
  {
    "url": "assets/js/9.f1a9ae09.js",
    "revision": "43c9877cca485de231e9a0dc3ead388e"
  },
  {
    "url": "assets/js/app.14d6a79a.js",
    "revision": "784a71fe15edac2301f92772f2fd0016"
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
    "revision": "679914d39901442f22e09ecbe040bb75"
  },
  {
    "url": "categories/index.html",
    "revision": "60d76b08e3c8949e37875e7655264643"
  },
  {
    "url": "categories/java/index.html",
    "revision": "1a8ed3ffd0e5b06c44e066b81e36e087"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "fc2545a55466463888f95299f03743ca"
  },
  {
    "url": "categories/ubuntu/index.html",
    "revision": "6b1dc7bb06fdf78b99673a88191c618e"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "5663aca95c08248b2249a74a933d92e2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "288c21624a0dd26853faee5d9c0a6f7f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c852c979fbedfe66c4c5c5bdf5cd2a0b"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "b9b3a223d76a831a9c7f48bf062e233c"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "86a6d9c2cb757a8c19c8b81cf5b43e9f"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "8a51d798f89d7ac37bc4547b430312dd"
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
    "revision": "6df1201c1735a762e226f9e3a696ea85"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "5dc4207d486fe4305d4bf39454728464"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "0c536e43dc8b24838cf16975bf334c41"
  },
  {
    "url": "tags/css/index.html",
    "revision": "6a7977889e67cfaedccdf981223ee2ac"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "17fff75ea2ca09d971553d35a5aa0254"
  },
  {
    "url": "tags/embed/index.html",
    "revision": "5c7ed377e63137ce53a8184cf6d97370"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "48f513b53ec94ce541a04b946d8723ae"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "6e673a316f3c1f2e8f5cca7993956fcb"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "a9666938c0a164e87497fff839a41c11"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6188e8ef0db4688723a47b00fadf2291"
  },
  {
    "url": "tags/go/index.html",
    "revision": "64ce529301cc77b2f7d745302d7c0cf5"
  },
  {
    "url": "tags/gorm/index.html",
    "revision": "72eb8b37647645ff63977c6ee393a5c9"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "7faf69ea189edc2ebfd10d9641d9da22"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "b0616509bfefacded419346d233eee93"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "a2b4fca033b1bce530298a1c29d9ec3b"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "429be3427eb5c22b2eb0af333ccdad62"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "c88cfdcc7a0b45610117727742d6423e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d40ba5e5b975396ac45d9393ee34bbdb"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9eb6383eaa07b0a73b9264834f641f9a"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "9192f9b80598ea3f53f90c80b4cb0c1e"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "c2b2e2c1cf5a72b538da31e75bc740ed"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9158191828bd2ac1572e794df5588a7f"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "09a66e88b391a077d8e2e89fdfa35530"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "c8cec727ec82d01bb4ba3682dd54ceed"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "32bee55cd794b4a423b4c25607aca892"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "a67eb5efb517e9ab00d00af7e2dec6f3"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "5ca4c7f977f36f267fac33bec3fb7e8d"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "48e5a58b4f716456bd6178a0cf0294a0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5aae4d3a9298c0de9541693174999fb3"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "71a220648f0e4227af0e217b05c57c27"
  },
  {
    "url": "tags/异常/index.html",
    "revision": "dedba15758f4e6f9e9e867393d142aac"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "e9524d094fa099367d7bb18689345e1e"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "a8d54ec9873b7f388624eab8ae336756"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "04c7b9b43900395a420b0d4a538fe7b4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "97bbc80036e855ae8c2b107554b8a64f"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "4f5377bb01e5eb19a046239dc65db3d5"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "c370314bb69a44ef42c4090bf4028db2"
  },
  {
    "url": "timeline/index.html",
    "revision": "5570f6e3825cad5b44cb07e572b31fc2"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "ec5b4214fabdad06672c9540c100e636"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "da34205674ee5517d6466bad6cf39838"
  },
  {
    "url": "技术文章/go/gin-web/gorm使用.html",
    "revision": "28e44d95abdfcf4a7796f063c14f1c55"
  },
  {
    "url": "技术文章/go/go-其他/embed 使用.html",
    "revision": "23cd47d286844c77c4ad49dcac44833c"
  },
  {
    "url": "技术文章/go/go-其他/wails项目初始化.html",
    "revision": "a155c6357dada7b0f47bac7e8c6c1c06"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "0f83b50ea50fd586be4f0c607034ce48"
  },
  {
    "url": "技术文章/go/go-其他/异常处理.html",
    "revision": "a25f339c0b6ad8b51e24bd67cc70ef71"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "3a97f69fe81cbe222427376fa8fe650f"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "37b6e8ab3fe81809f53ab544156a404e"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "802717d0afb99306443406746198234d"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "af390432f16cfad65c3b07cbe4c93b3c"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "a91bb14a8962a695cb1ba8e42192d6d7"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "b7667ca320a033c90f8a1fd82e618bb8"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "fd54125f56790c1396cdcc3142e8522d"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "dfec717cafbcfaec3391086f6dd67bf8"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "537c62b6986cd4770e06413c31a0f740"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "f8448b78b241c63e6e560c5a62ffd49e"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "e163248921927d3a337705cbfa29a730"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "5798dea147887cebaf52edaea5bee9bc"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "efc33b8892b462c6e8413e05b8bd318b"
  },
  {
    "url": "技术文章/前端/CSS技巧.html",
    "revision": "cfa39ee626228ea6c0fdac988ca67cf7"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "d0ef5eceb7973a2e96a7ec5c88c04578"
  },
  {
    "url": "技术文章/前端/tailwindCSS使用.html",
    "revision": "b965ebdbd962d55c5d804f829987d6f5"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "8e641ebada5a27b8a3096018197a4435"
  },
  {
    "url": "技术文章/前端/vue3组件使用.html",
    "revision": "ff66e68a0bfc47158febc789544e8b4d"
  },
  {
    "url": "技术文章/前端/vue3项目初始化.html",
    "revision": "ed61214f061ab792a50080bb3b6ef338"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "eab0757a8cf738e5e2025f8e61b98882"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "abd90c213aebb0c5da5fb2fe2a69511e"
  },
  {
    "url": "技术文章/前端/文件&文件夹选择.html",
    "revision": "98de9134de7ae74a55da527f9634178c"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "a6432ab1a78efdd4e2facd0ed5beaae1"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "58d3a097f12a150894b03e722941d1c5"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "c5661afbe49fc5eae748240346944418"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "0440a77b7e43cb4d1207f83a2818c4ed"
  },
  {
    "url": "技术文章/运维/linux 中间件部署.html",
    "revision": "91ab64515ed8400ffd7d30a664fe2c53"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "87c0e9d402061113a088606fad0d9375"
  },
  {
    "url": "技术文章/运维/nginx配置.html",
    "revision": "a6248a4f41a66e90aff5f9ee11bfd503"
  },
  {
    "url": "技术文章/运维/ubuntu 配置开发环境.html",
    "revision": "725dd4e061278b52ef87822ac22cdd00"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "5da94305cedc29cb002c01117d9b709d"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "5e662a723fe1ca021338cd6c749710be"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a69a9e9ef9c9793afdad897b5b8b2925"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "7af9382d5352a09c03434061b5ee7c98"
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
