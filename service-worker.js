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
    "revision": "5e5585e4832f3a1870a03e142eeef678"
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
    "url": "assets/js/40.fa0a0252.js",
    "revision": "df058a17f81eed0683c45c80087665c6"
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
    "url": "assets/js/43.bc54b3e3.js",
    "revision": "052da665796ddc7f4f2523777f556e2f"
  },
  {
    "url": "assets/js/44.9bd06aa3.js",
    "revision": "00def8564a2ebd71ff32fc89aca94a4e"
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
    "url": "assets/js/50.e0f4eb6f.js",
    "revision": "85292d20586b4376e5a0882b4c654459"
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
    "url": "assets/js/54.71b735b0.js",
    "revision": "914fc94adea93380cd260352bf45253e"
  },
  {
    "url": "assets/js/55.6b2e92d1.js",
    "revision": "5ea9bc9c49dfb8e830e51e87b64934c0"
  },
  {
    "url": "assets/js/56.e232c596.js",
    "revision": "a965b1cdb015c18585c97ca760c08712"
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
    "url": "assets/js/61.5ef8d298.js",
    "revision": "630ce0ab0f4d3ca4fbe979cf8679b61e"
  },
  {
    "url": "assets/js/62.6165902f.js",
    "revision": "73ae82b22f1083b7c3cd6c152968cbd8"
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
    "url": "assets/js/65.4f2504e8.js",
    "revision": "0afd33dc082e443480abc4a38baaa83f"
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
    "url": "assets/js/70.1468f62f.js",
    "revision": "b46f58f5fb43b8c72c492fa97441b4be"
  },
  {
    "url": "assets/js/71.90b796b3.js",
    "revision": "738579e5eb0fe0e68d2e3e14841d230b"
  },
  {
    "url": "assets/js/72.89eda277.js",
    "revision": "f426205dfe312a3cfa890cdb2f5520c6"
  },
  {
    "url": "assets/js/73.22aa8d1c.js",
    "revision": "b0f78ff838f57adc383e03b13bec5cfe"
  },
  {
    "url": "assets/js/74.b7cfbdf7.js",
    "revision": "a4aa9b387dc6392bd6e42ae2d4d78f52"
  },
  {
    "url": "assets/js/75.9ffd5dd7.js",
    "revision": "74016c0b637441bd10deba15e7ad1aa9"
  },
  {
    "url": "assets/js/76.56763ef4.js",
    "revision": "b902271a5ce59cd9c969c0395c552fe3"
  },
  {
    "url": "assets/js/77.8e3aedae.js",
    "revision": "7679f3bc7bc72b45a2a8c277c6a6de60"
  },
  {
    "url": "assets/js/78.cde32ee2.js",
    "revision": "e16891e5fae2ec53dd0afdda50ca1c47"
  },
  {
    "url": "assets/js/79.66601f6f.js",
    "revision": "3886e6b96a793e90691bccb2d3e8e0b6"
  },
  {
    "url": "assets/js/8.764b2e6f.js",
    "revision": "8ec6951cf8171a2b17c8f1bc5c4cc961"
  },
  {
    "url": "assets/js/80.c99d9606.js",
    "revision": "c6d8b72f845a9fb4e658ffecd01f4428"
  },
  {
    "url": "assets/js/9.f1a9ae09.js",
    "revision": "43c9877cca485de231e9a0dc3ead388e"
  },
  {
    "url": "assets/js/app.254e9321.js",
    "revision": "7824235153dd48cd02f322673b3351c1"
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
    "revision": "3d48a78c1ca17627b208eb7f05484035"
  },
  {
    "url": "categories/index.html",
    "revision": "ac7e2f2f9afa3c90ade33d6edc9ac89d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e6370e4c1b45cd65331b2aeb69319d77"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "2b77ee73fa4b4e8a9c5da16c0ab7ee6d"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "3e22f98a4939f58c1e3cd37a5ae51a11"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "109f954c0ea71d1a117e111a494a0e56"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "afc47b84ad1bed8b36aa66103e7cf1e8"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "123758994096fbbb22bd921562722adf"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "9b9f71b06da116b483f93e1c68e116fc"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "ca337948cbde8fd8341731a4e77b4030"
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
    "revision": "6ba47620272e692ff65397829354657f"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "00bb174e5b4bca2e82c26087ffb22990"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "cc39b2acf724e512c75d94652bcb6558"
  },
  {
    "url": "tags/css/index.html",
    "revision": "0686572a2d4f1a0a3b5120434c9a9783"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "4f10ca06ddc91f096dfea1f83b8ded32"
  },
  {
    "url": "tags/embed/index.html",
    "revision": "40d010086d3bbe035465ea9ef77cdd57"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "fe2cc73871cf918da5ab9bcfc416739f"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "dd6374515bc1d806726e568cede8b11d"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "4e2fc0ae57596030a752037b39045b52"
  },
  {
    "url": "tags/git/index.html",
    "revision": "97b6ad796c19bbc995800dd3a2ff3f29"
  },
  {
    "url": "tags/go/index.html",
    "revision": "f06ce0b2156bb1389fe23a5242db1418"
  },
  {
    "url": "tags/gorm/index.html",
    "revision": "e2c077ba05573f36284cfe2c8b68f57c"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "0861829b1677a48356e54357ece6e0ef"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "869c6e0b3457144ebc2b1efe11b42792"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "8f1281d09e8b24be4f27142ef3670ec4"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "e7782aa2954327c9ef5af6b74a4346b5"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "f8836ca53674f9de8aa7e3e540614e3d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "25c508e11abd0578ae5d6e155d1ebd12"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "550ca692b3b66b717392d353853cabe1"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "606bc1398abe5108e46b73af00786b84"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "69a9e3816d2ae392a35e8f0edd7d7fc9"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "d907d2c2117d5c333d83d8c0f09732f0"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "b566cc2077ef4bf8411d2203ef9c180f"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "6cfee484a93c7a62b4667b53081cb756"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "5916e10ec189ddcb65b4338615d0b4b4"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "d98ee17a8349ea0154ae491662d3ce48"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "3f7666fbb21b181ccfe729a58290463e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "a20ec81f173682778cd5228a78115f41"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "d71c5bdcb92645b471815f7ab706abe0"
  },
  {
    "url": "tags/异常/index.html",
    "revision": "0475a37c154ab289db542c61296c7857"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "289f2a2a5827fe2c6b420b89355f81b6"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "e31989ca592dcb8f03a9505ea3c463eb"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "3b2aad21efb7c6010d7f2830ebd9da57"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5f9fa20cbc03171d50c523ab872f1b6c"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "2b711629657c795021df2538714ee8e1"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "78ae212e5f8199a25b39aad36252c9bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "be2a4e5a842effe1326cd17b4541a1b9"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "016fd6850c54e5f3b21cd6a6fcfc27c7"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "0c2e2a95072bd44900faddbb0b09f0e9"
  },
  {
    "url": "技术文章/go/gin-web/gorm使用.html",
    "revision": "ca9893e6312d9c436a36832352a850c5"
  },
  {
    "url": "技术文章/go/go-其他/embed 使用.html",
    "revision": "238690ccdc6357729f7413889b3de12d"
  },
  {
    "url": "技术文章/go/go-其他/wails项目初始化.html",
    "revision": "85676cd652e5ee85b629f28e541da57e"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "f730e35a09010446d6f443728a1fdf66"
  },
  {
    "url": "技术文章/go/go-其他/异常处理.html",
    "revision": "b22a5ab13f4debe6dd0814f792d0eb74"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "bdd8de5efd68289298796eaa92ae6d14"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "a3a7fe76d03c80504b48beff5b60032e"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "493a2ef024ec49a6f5e7e14dbdf72808"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "9d716672b018ab443ff58a4e172c44d7"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "aa6724c197b391b397a5853ba0af53d0"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "683855b21b4737f2a6eafbaa9b36996f"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "d9fd30cc56761099e8073567775d31eb"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "072cd6b512d2ffb0af77ac26dfd99346"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "0fd7c6c56207be76a5a828b7497db157"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "f46a0fee4a73888b95f08f3a062873ba"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "993f2a0468659ed727ae65f89afeb233"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "c540457f5d234845369c450d1f3b511b"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "46b034ede077c380aabb86fa50f9d57d"
  },
  {
    "url": "技术文章/前端/CSS技巧.html",
    "revision": "9b546a12d6f998e3683562fe2719d0c7"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "2aa64daae85964af2bbf9fde9bef6e5c"
  },
  {
    "url": "技术文章/前端/tailwindCSS使用.html",
    "revision": "6ff46a3e06e855b69386f5d6f820a61e"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "b64d4eb8358977b79701cb050bacaadd"
  },
  {
    "url": "技术文章/前端/vue3组件使用.html",
    "revision": "ef88c883abcc8ac8b25a912aa1a14cb0"
  },
  {
    "url": "技术文章/前端/vue3项目初始化.html",
    "revision": "7a73534d82284678e5676d770e3e28bb"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "e98cc78794a313450d67f4817c4aade3"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "f120595315060fe874e150b6c70ee195"
  },
  {
    "url": "技术文章/前端/文件&文件夹选择.html",
    "revision": "3a8ba20d52c1e955da0edb0f617cdd5a"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "b7d9749a9a10415f47bf0f0a9352786e"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "87af27d11b889a20830a99ffa13e9f02"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "e48b5b675b47e1df854f995a12b470d2"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "fa8da43c7c69a922085003d589b9ec6a"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "4f216f07ce6b29997f9e256b1a4bf873"
  },
  {
    "url": "技术文章/运维/linux 环境部署.html",
    "revision": "b4605880fc8a30dc5e70328769bcb01c"
  },
  {
    "url": "技术文章/运维/nginx配置.html",
    "revision": "27e83607875d26a34618bb4476d5532c"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "8045253a21d571955042ad5de5c2369a"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "0306c2f260050edf0378c0ebe39abcc9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "d5580fa3e79afbe9e580097b7dc23de4"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "d77f17602e02eeb2914a96675558e622"
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
