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
    "revision": "b75e4fb34559edb73dcda1099b7c8bf4"
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
    "url": "assets/js/43.12c082d8.js",
    "revision": "5de84238e4dc9e20ca62d1159db0a6a5"
  },
  {
    "url": "assets/js/44.f9e60cee.js",
    "revision": "11f96fdf9531caa12088469ed3bd0e7c"
  },
  {
    "url": "assets/js/45.37fcb250.js",
    "revision": "094e3bb97c9a417cfd0ca32c672578a3"
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
    "url": "assets/js/50.1c6c133e.js",
    "revision": "b42fda5282b22720318eb2e4281a5a0a"
  },
  {
    "url": "assets/js/51.4572c394.js",
    "revision": "7ff7da46502234007f5620e670b4ca3a"
  },
  {
    "url": "assets/js/52.18a73fde.js",
    "revision": "1d8f1fa914b97f81146c7ff43b893bc9"
  },
  {
    "url": "assets/js/53.fb4dfc61.js",
    "revision": "cfbd2ad94a5161b3ad3fcefa4c5b4f97"
  },
  {
    "url": "assets/js/54.513ac840.js",
    "revision": "2b8707bb8ecc734c647e3b3a75712ba0"
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
    "url": "assets/js/59.369519b5.js",
    "revision": "d8ed65a6a1414a20778a4ab886e27a8b"
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
    "url": "assets/js/61.a8a5b2bd.js",
    "revision": "2af1a7c686a07184e944139b4cac5a2c"
  },
  {
    "url": "assets/js/62.6165902f.js",
    "revision": "73ae82b22f1083b7c3cd6c152968cbd8"
  },
  {
    "url": "assets/js/63.50e6bfe8.js",
    "revision": "d6946350f907d39d68b537bd8ac4c8b6"
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
    "url": "assets/js/66.9ce9c2cf.js",
    "revision": "241606f924bd869c438b2b8c0ce040f8"
  },
  {
    "url": "assets/js/67.ac9ba921.js",
    "revision": "d20a0aca812edaef378850fe119b0f53"
  },
  {
    "url": "assets/js/68.f1c2f795.js",
    "revision": "2e0980ffa516d4c32d979b53e16cf855"
  },
  {
    "url": "assets/js/69.aed6c983.js",
    "revision": "c01105d38a71b502951a8a568cd8f04e"
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
    "url": "assets/js/72.661d0f53.js",
    "revision": "fca673ca2fec4cd7175b0f0c1c328625"
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
    "url": "assets/js/75.b629a0ea.js",
    "revision": "a96e474efcc6de177218ffa1fdd2468b"
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
    "url": "assets/js/78.806aa6ee.js",
    "revision": "041aee7fab52138b11fb21c23c3ce21f"
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
    "url": "assets/js/80.ec4d94a4.js",
    "revision": "c239eb213efc0785f1fb989a87364f05"
  },
  {
    "url": "assets/js/9.f1a9ae09.js",
    "revision": "43c9877cca485de231e9a0dc3ead388e"
  },
  {
    "url": "assets/js/app.0414a69c.js",
    "revision": "656eb9dd20e4961e1d9372451ced13c2"
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
    "revision": "a7829dda9702bb2e1cc0e5616dfead69"
  },
  {
    "url": "categories/index.html",
    "revision": "8160b30b2f01d086d2fe1e2e5cc3f5cf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0efe5933628f38b9f02c56cc42607468"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "7887e86e6944276ce3942fa9b2ceea4a"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "15b1ab76481ca65f185b222e657b734a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f9efd3bd375e4baa90bc825be8b2bb06"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d3dd806079e630fd0438b70019056bdb"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "c7004414372f410b495ca45117cbefb0"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "af8021ef73c09231522edfde1d0adb45"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "952d55f699c701f060919f47cad98a78"
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
    "revision": "29382ac36c3b4867f23d09d9cd6b56a3"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "115a91858d9ac39de9137c7701090911"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "62c2f32695071c26720e5bef823a4e46"
  },
  {
    "url": "tags/css/index.html",
    "revision": "6eb51fef25a5263d60da94128461b488"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "84d62c48914851b9134a6d87135cfab9"
  },
  {
    "url": "tags/embed/index.html",
    "revision": "26916262b2dd4ec013e19700877756df"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "9ee4bb7b97f4e0f4cc67ebc419752079"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "956c8b7dd29f5f7c782a0ab7e2573edb"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "dc6e968d8676ed68975427c9fed78878"
  },
  {
    "url": "tags/git/index.html",
    "revision": "7ecb49d723674ba81ac13a207b74519a"
  },
  {
    "url": "tags/go/index.html",
    "revision": "c5b06297d0f7462221020f785fe78cbb"
  },
  {
    "url": "tags/gorm/index.html",
    "revision": "84be3ecfa7ad051bb6eb0b158c695958"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "c7561b219457c6a02d9881defa7199bd"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "f2b6e6f103666e971f391fa40e9802fd"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "208ec25b7519521f54be708117e2dcc4"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "43c1ad2e9e5089545a520036c5f9f0b7"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "0dc96b77ff5af9084348624ef02b2d18"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f5c4e1fd5d2eaafffd29d913ffe25b88"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "eb6f1c22e19f605f1c2d733fcef94758"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "4659fe04d40bf18da565d609b7c04821"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bc9ff78bbfcff3613b360b2db7050922"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "8823aa76e77558adfec7d67b7c21ae00"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "2ed437ac400ed20e6088367fe5c808e5"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "636ed5149d856b98e63ff279ab02ce9a"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "d2066ff22af8b255d171f7c418e769ff"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "92b94829cf0077069cf9cee6e334f431"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "bca81db74a7573bd903047e7cc912d53"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "78fa42c73179639c6f19ba9297df6190"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "5a9e0c5789d18b97cdd0460cda39aa09"
  },
  {
    "url": "tags/异常/index.html",
    "revision": "a53bd87e378999af9f53344f26e03d96"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "666ec5f41266337800bccc1bfc0adb03"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "4fb7c7559d2c90883a6cbc8a667d786e"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "214d4b99e4988b68c4dfd046dfc3fed0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a128f41a551a795c22a876d81659e91b"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "f59f1885c1a738d5ccac2f8d16588cc6"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "55aab27fcf19b97dc3d031622650ae06"
  },
  {
    "url": "timeline/index.html",
    "revision": "68d8485c9141805c2bf56653efc7f596"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "919072f9ce49f239d3a654be79dfab7d"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "ef667cc7932ce7be8e3b2d689d3ec528"
  },
  {
    "url": "技术文章/go/gin-web/gorm使用.html",
    "revision": "ff15c565a40dd0f4234dd02b20f4fa41"
  },
  {
    "url": "技术文章/go/go-其他/embed 使用.html",
    "revision": "7764d46ba0328ce6e03ec36bc02c731d"
  },
  {
    "url": "技术文章/go/go-其他/wails项目初始化.html",
    "revision": "cc0ca6d22e4456a3659251d1232836c0"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "55809f7051fecdcddfe6af4c276d9622"
  },
  {
    "url": "技术文章/go/go-其他/异常处理.html",
    "revision": "d39632f1217f87d712f4512f7f00f722"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "37ebb38005530ce1096426ab69a20bd1"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "b6d37e3f59487861813a00138663efa1"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "ee4a516dc123377c6a74078aa77ba817"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "5e8cecd8f0466ac4fa45ee598f12617b"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "fc320c3bfa9eb586685472a369ead8dd"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "dd77ce9c0657570d174f19043246e36d"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "bee93f7ebdd0a03691b70afd2ba244e0"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "8ef9072a440a285c92331a25ae03c685"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "affa13c2f3e80c7fab31dd8e1c76fcdd"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "052ab41d1e642812704401ba2ed893d9"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "eec04439493cf98e5df6565fb2425b2b"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "6814fe08c4640dd8560ffcbf43c8a0ae"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "4590d09fffe6046023ffa32d34efb359"
  },
  {
    "url": "技术文章/前端/CSS技巧.html",
    "revision": "d46bbba938ee8bd22c08721c91fb49cc"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "4e49dfeedeadba0d3710d8920e949057"
  },
  {
    "url": "技术文章/前端/tailwindCSS使用.html",
    "revision": "d0d8a57fd5d0f34c1d85001a22590d9d"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "8aa3e27b70b181bf8da03082756c3ba6"
  },
  {
    "url": "技术文章/前端/vue3组件使用.html",
    "revision": "d73ba53e54f875a5a13c8f6012f6b2f0"
  },
  {
    "url": "技术文章/前端/vue3项目初始化.html",
    "revision": "5fc6886f9ea766f7dcf08c0c2e5693f9"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "b7dbceb0e0661e2cb8ecbaf8e8c073b7"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "9a544ed5b20fb59cdabef496834674c7"
  },
  {
    "url": "技术文章/前端/文件&文件夹选择.html",
    "revision": "703567f66a9dc7526488547d4c06bc32"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "439dffa5293bf1bdb9183d644f506cbe"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "9b4a6919cbc5c8648c447aad86e91923"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "29af76d26dafa3cd0aca6fba0da5783c"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "bbc41b456675e09828b8b050443fbb53"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "2e1109725e58f19781ce88a9d2a2309e"
  },
  {
    "url": "技术文章/运维/linux 环境部署.html",
    "revision": "4b18e9af790c7ff00c3cca8ca9a91408"
  },
  {
    "url": "技术文章/运维/nginx配置.html",
    "revision": "605769b032c995237f7b77bbdfdee890"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "10dc1a8efb6a6e3b25edad6707d8269e"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "18a1120c8365ab909d6dc88bbf622aa6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "19ece6014dd21c62502efdcbf461cd19"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "5c5103ccf8f12ba8aa001da1c1d34e6d"
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
