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
    "revision": "91e84b9789af0cb7211a5a8dc9052ef0"
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
    "url": "assets/js/40.c830310f.js",
    "revision": "cb4f3181203357baa8d28b126b33ece7"
  },
  {
    "url": "assets/js/41.2c81c0d8.js",
    "revision": "e7f656b0fb5aabedda7552e37fba6f4e"
  },
  {
    "url": "assets/js/42.187682f3.js",
    "revision": "67cddaefba885fc3b8b67c64bc21f2e0"
  },
  {
    "url": "assets/js/43.1cccb591.js",
    "revision": "2c6d3fc59037ced5697db7a99da9ae1c"
  },
  {
    "url": "assets/js/44.8203a4e5.js",
    "revision": "206b3211be9ff781aac2f411907c770a"
  },
  {
    "url": "assets/js/45.37f97f81.js",
    "revision": "1124ef8678ca0e9d1a435b759ca69e90"
  },
  {
    "url": "assets/js/46.ece2d719.js",
    "revision": "43eef6b068e446b22b30db4a2235493f"
  },
  {
    "url": "assets/js/47.a967865c.js",
    "revision": "057fd93ea87be84d3557179b2687e785"
  },
  {
    "url": "assets/js/48.3f7e27d5.js",
    "revision": "63984f2ca3fff77e71b0834dcf6cc3ab"
  },
  {
    "url": "assets/js/49.75996b1c.js",
    "revision": "24534a0a3c1f81799ee89d22ab1aa2d2"
  },
  {
    "url": "assets/js/5.5374f778.js",
    "revision": "bdb2626b4d135cb12b5123dc40097136"
  },
  {
    "url": "assets/js/50.601747ec.js",
    "revision": "868bd80712b6aff68015a7a87b94cb2c"
  },
  {
    "url": "assets/js/51.4572c394.js",
    "revision": "7ff7da46502234007f5620e670b4ca3a"
  },
  {
    "url": "assets/js/52.db34e05a.js",
    "revision": "bf9f7af79e9ce10ea07631b927e794e0"
  },
  {
    "url": "assets/js/53.2e274a59.js",
    "revision": "bba09b7f4c41d47c86ce24a8d06e1145"
  },
  {
    "url": "assets/js/54.513ac840.js",
    "revision": "2b8707bb8ecc734c647e3b3a75712ba0"
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
    "url": "assets/js/57.ef6f46b7.js",
    "revision": "a63328fef2f5a25b56ca1d89e18ab4c6"
  },
  {
    "url": "assets/js/58.115fccf1.js",
    "revision": "818c8a484a3ca44d22af0b9cdbeefe70"
  },
  {
    "url": "assets/js/59.2eca0fcf.js",
    "revision": "b50da89997bbc51bcfd2a40b9f8d46b2"
  },
  {
    "url": "assets/js/6.1028396e.js",
    "revision": "8c1a97642c508de1eb21bd250f9d45b5"
  },
  {
    "url": "assets/js/60.5067e681.js",
    "revision": "22719c58b4b8835852fb881ceba9aefe"
  },
  {
    "url": "assets/js/61.37ad4239.js",
    "revision": "00fa360904adb33a972a1a46e4c5507e"
  },
  {
    "url": "assets/js/62.551c1b99.js",
    "revision": "84aa55354d6713b5ecb251ab98ace773"
  },
  {
    "url": "assets/js/63.5cd95a56.js",
    "revision": "46733a12d08bd0e106283e0eb7188bc7"
  },
  {
    "url": "assets/js/64.13fc6865.js",
    "revision": "7ccc4df2d400d867c09ccb8d2d234838"
  },
  {
    "url": "assets/js/65.f9835678.js",
    "revision": "c78cb5c6917268a538b42548b9bb197f"
  },
  {
    "url": "assets/js/66.36c376b1.js",
    "revision": "3eb69d0c4dbad791c649139524b22c2f"
  },
  {
    "url": "assets/js/67.cf681c52.js",
    "revision": "3ba42e550e0223fb90e6ee14c7e2a4f0"
  },
  {
    "url": "assets/js/68.9d7fa290.js",
    "revision": "1439e7d383e75d7d2e90f443766ba57f"
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
    "url": "assets/js/70.311fc03e.js",
    "revision": "cafe8bd0f1c69311ab501d809dbde1ba"
  },
  {
    "url": "assets/js/71.1ab231af.js",
    "revision": "76ebe1cee9bcf8ba418d51501b6b0d52"
  },
  {
    "url": "assets/js/72.fa895ab0.js",
    "revision": "e58dae4cef343d5aa82813ba2c0c3922"
  },
  {
    "url": "assets/js/73.378cc87a.js",
    "revision": "211f75f771d26a94cb3677fb87597b84"
  },
  {
    "url": "assets/js/74.733ff750.js",
    "revision": "1047a0dafcc3cd257c834472f26c5167"
  },
  {
    "url": "assets/js/75.764be949.js",
    "revision": "9cc20a40a1d576ed703fc95fa75e35a0"
  },
  {
    "url": "assets/js/76.da67d02c.js",
    "revision": "70ebfe10c605be74ceb4197de45e65df"
  },
  {
    "url": "assets/js/77.32e701d0.js",
    "revision": "6d6c920834640db4e102f0bf151e0843"
  },
  {
    "url": "assets/js/78.c5897d76.js",
    "revision": "75d92398dbd7c4f18ac441444d4130be"
  },
  {
    "url": "assets/js/79.7a5f5b5e.js",
    "revision": "fd705a10bb3d2ca3b8753d3b885d1d34"
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
    "url": "assets/js/81.ee464ef5.js",
    "revision": "e25d6fa9dcd8b2c46bebbafaf623a087"
  },
  {
    "url": "assets/js/9.f1a9ae09.js",
    "revision": "43c9877cca485de231e9a0dc3ead388e"
  },
  {
    "url": "assets/js/app.e7a5f73e.js",
    "revision": "6b54e5f9df69df1560485b60de899bed"
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
    "revision": "9bf993a5cae517ed81d170d2160d1694"
  },
  {
    "url": "categories/index.html",
    "revision": "c29331bef3aa76a90f09521b85a05fa7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "21d7a1cb7b2a9e0079fcfcb1159fb8c8"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "617f08e5b4b64faf5c7053fbcd1adc8d"
  },
  {
    "url": "categories/ubuntu/index.html",
    "revision": "ea10944618f41aed9f9847c392af1ec8"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "7f711315a8e869eba0819df41223139a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "739b7171cf43249f00ca145cc7896a92"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b7d9bb3844f328df84d8e0a6c1945c8f"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "f5268da95df0149c56189242a8450ad4"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "9723e85e919465401c7b6eb2cc0c85e1"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "26db3ae3325cf5a8e115e65d78fe9965"
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
    "revision": "76597464b8669b7c0b07ddc71f671ce9"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "8d6cb854c431e481048f197759a646fd"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "305b383c5ae4b697227b748b33887da2"
  },
  {
    "url": "tags/css/index.html",
    "revision": "5c59f70bef66f9eb5f4de8b346c4b9f3"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "fbb6179827ce101fb112a6a08bb1642d"
  },
  {
    "url": "tags/embed/index.html",
    "revision": "2f09497305af6dfdcd77e7ab7f7dc650"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "6847af3fd59a29a4bfe97fd6268edc49"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "6ab66969c44eafa4a5e66e3e7c61e835"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "8cdc811192fd20c2d490c1dc06a6fd0a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "667a92b607277ad0f9c7e7a62254fe02"
  },
  {
    "url": "tags/go/index.html",
    "revision": "17cf8f811ccda6cf2142be707d06765b"
  },
  {
    "url": "tags/gorm/index.html",
    "revision": "8a957c82fb7a676d888b8cdbc9c8384f"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "f016a6028271d2aa78b326cf63833611"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "57e62e85b01ba7a095d8d8dc3e2e2ad0"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "c3dcb93517827d87d923d66b02b28313"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "8ffd2e62fdc107b259523dc457b7c7f4"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "730b2d55966c57fc2a1e88be5a1f9a69"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "334ce8258da60be28f10205c41623406"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "3fbb0940ebe60bc3d6c7863ac0dd5efc"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "ffec6dc4f588d73806adc005cafaac2a"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "361ba4a801d9cbee62142f0b0f02957b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f4d80a76021e50c20139feb7d052014d"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "8fb58878bd9337a70d6923e601c70600"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "46b593eb326bd9e239cfeb7987d96c4b"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "4b3e2e46792c9abc56d5b535e0ad8a98"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "58a8b8f500fc607c1ea6e26d484132f7"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "bc3dfd63f164ef5d8a34d091ebee1924"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "8a2c74e426c4bec29ae5e26ec400e90d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1b8fae6aa2648e308a9125f0d002f8d8"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "5c3762507f53a56189e308b291358234"
  },
  {
    "url": "tags/异常/index.html",
    "revision": "299d76805d412b788e037fd291e57b40"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "c0e0a82f11925eecd2bccd921b1e704d"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "5a99439bf0cf17f27353bf543f996917"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "e803dae476c808a7b1dae4848a7b4aa3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a806a296808bc4e61d050523a7b8934d"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "0f4d1c04d5da63108dadc03b99a69023"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "aa7d9a429fca33dbebd7ce39379e0545"
  },
  {
    "url": "timeline/index.html",
    "revision": "0acd4ca355d584e1962e48c17bac9c10"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "63cba38e5f884da6f66a3f020ae21ce5"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "d9875619ea639f75ed4783ed9d4bbc2f"
  },
  {
    "url": "技术文章/go/gin-web/gorm使用.html",
    "revision": "6487afbe90e0ba6d05899f4e3df554a4"
  },
  {
    "url": "技术文章/go/go-其他/embed 使用.html",
    "revision": "59fb8aa8f365e6e944998b736dfd0f4a"
  },
  {
    "url": "技术文章/go/go-其他/wails项目初始化.html",
    "revision": "7b6e3dc9e16dfcab7fb20ed99dd3805a"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "a614ef106f0980974b3c91b4c07c0173"
  },
  {
    "url": "技术文章/go/go-其他/异常处理.html",
    "revision": "6cb5ac65f0c2349000260634c15dc083"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "ee960955040fce10d7520c53fa57acb4"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "c5d5a1c076798502c39f8aa1862958c5"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "433ee23daaaf49935a0fff85ab44acd2"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "dc243385a9f56e8bd36e68cc884282ce"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "91658f4eff6bee41cb5bae7e6f24e46a"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "430345173ad558ff24000abfedf716ac"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "5cb4c879090ff96b0cbdee3d8aa82978"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "cc048df9b462331077f77bc761f7f184"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "f783bd2da540dc2be63d2251bef20f77"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "472daae06a94b3d209381a32f3fd35e4"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "0ec06928f9872b73725239674e1211cf"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "fed083e1b65b4f96e82e17ae77830285"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "ad9640bd0288e1c87e273c4977d43fb1"
  },
  {
    "url": "技术文章/前端/CSS技巧.html",
    "revision": "344c7d9e87d9f04df5fce57a48c6fd3a"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "3483d057593be0fa2d0d13cc06a94be3"
  },
  {
    "url": "技术文章/前端/tailwindCSS使用.html",
    "revision": "d78944a0324e5bf5c06f5bf5a4d8c1b6"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "22a07aa5ed080ae3ea691324a2e5a235"
  },
  {
    "url": "技术文章/前端/vue3组件使用.html",
    "revision": "38314d4f01aea645cd649158add4b4cb"
  },
  {
    "url": "技术文章/前端/vue3项目初始化.html",
    "revision": "1079d0667b3bdc2b73e995046daa370d"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "de8167696c28e5182d6323ae47df9b90"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "21f4890b70f1e9f0acbc7874cd264e98"
  },
  {
    "url": "技术文章/前端/文件&文件夹选择.html",
    "revision": "15e41cf6b8486462008f1f88831c5479"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "05a0bf20bae6a64e690cadffdb30de23"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "b2257f9534fc250457a08368d7afe7b1"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "c01a780eb2557273b478e1b726f4b7b1"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "0b2a9383c0db6c6f3bb2dd24ba6d9485"
  },
  {
    "url": "技术文章/运维/linux 中间件部署.html",
    "revision": "b35e71a3a2f9b610f19d383c12d8bf49"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "5e63c142a4c24871ee7ecf6ffc9e5550"
  },
  {
    "url": "技术文章/运维/nginx配置.html",
    "revision": "ed8a9aa45c8c3af09765b69c8656bfb5"
  },
  {
    "url": "技术文章/运维/ubuntu 配置开发环境.html",
    "revision": "9b41c894c993a686be87f7c251996a28"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "e76737574fe649eefd6fc4167e4aa0a6"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "875cc0481cf7ec16651372e5f1f7fc4e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ea0947345e03b975faa220446e8efb2d"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "83177b5240e48a69b44c865522c287a7"
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
