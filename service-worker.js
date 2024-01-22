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
    "revision": "4adc1b2c986f0e14f4ce56ce568da9fb"
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
    "url": "assets/js/40.0ca32f6c.js",
    "revision": "b806dffd742f3294ee1b9a6332e6adf1"
  },
  {
    "url": "assets/js/41.2c81c0d8.js",
    "revision": "e7f656b0fb5aabedda7552e37fba6f4e"
  },
  {
    "url": "assets/js/42.c77f6671.js",
    "revision": "f697aaac5d80e2a475e35b129dddb16d"
  },
  {
    "url": "assets/js/43.9eda8932.js",
    "revision": "784b4ed0fcbcbec7428ceef0742d347e"
  },
  {
    "url": "assets/js/44.8203a4e5.js",
    "revision": "206b3211be9ff781aac2f411907c770a"
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
    "url": "assets/js/47.f6b630a4.js",
    "revision": "b21b68454cd7c12224573164d2790df2"
  },
  {
    "url": "assets/js/48.424bffc1.js",
    "revision": "e330b5d13b04dd58a847d7f736f7523b"
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
    "url": "assets/js/50.51bc3e96.js",
    "revision": "07e89f1154c3b629f270faed69a9b4c0"
  },
  {
    "url": "assets/js/51.a59462c8.js",
    "revision": "44c40409ae4b0a6603b5a6549a027b1a"
  },
  {
    "url": "assets/js/52.1273eeaf.js",
    "revision": "9ee2db50ad4805d2794f66c8947c9be6"
  },
  {
    "url": "assets/js/53.a3bfb740.js",
    "revision": "3de12a26d82eb736ed9295fdf5184ce1"
  },
  {
    "url": "assets/js/54.05248f42.js",
    "revision": "9a12b53fc6b370e1297d8128d1f7287c"
  },
  {
    "url": "assets/js/55.55b4d49b.js",
    "revision": "0c0c380bffc0bd00b39b25749cefbb76"
  },
  {
    "url": "assets/js/56.5b589166.js",
    "revision": "93feec587fb86b9c1de81ce6cba8e36b"
  },
  {
    "url": "assets/js/57.9c5d4915.js",
    "revision": "f1df849602668b749d5405e7e097d59a"
  },
  {
    "url": "assets/js/58.4f90ad76.js",
    "revision": "69e0e90915881bc8ed3b8765f1f4fa2f"
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
    "url": "assets/js/60.9dd0b6f2.js",
    "revision": "fa3b1500a636d83d225fb10515c441c3"
  },
  {
    "url": "assets/js/61.67b8b18f.js",
    "revision": "3f14c47015346506793ec4bbeecb4301"
  },
  {
    "url": "assets/js/62.ba08c99b.js",
    "revision": "3cc8d92d4baf75b1731c185b71b0049d"
  },
  {
    "url": "assets/js/63.9514add2.js",
    "revision": "0c72dc6ea8092f954dc8c1f572142b00"
  },
  {
    "url": "assets/js/64.16becbbf.js",
    "revision": "31e3fa46a82e92d9625945f24315cacb"
  },
  {
    "url": "assets/js/65.9f529625.js",
    "revision": "8be190ea13db6de270102d879018b5e4"
  },
  {
    "url": "assets/js/66.ec71bd4e.js",
    "revision": "d6ef6a19b46f5a8b918bbb6f9e03c86b"
  },
  {
    "url": "assets/js/67.30987c7c.js",
    "revision": "e059ec7537171f428ab24722bc3b9e47"
  },
  {
    "url": "assets/js/68.9d7fa290.js",
    "revision": "1439e7d383e75d7d2e90f443766ba57f"
  },
  {
    "url": "assets/js/69.f0da10db.js",
    "revision": "d19dba021e0bfae078512a901cd08e68"
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
    "url": "assets/js/71.fd6cc4f3.js",
    "revision": "5c3b5d9530344515e19baca91e63e0e9"
  },
  {
    "url": "assets/js/72.5f1af20b.js",
    "revision": "dd27f3d9e47c46f63330b15150840ee0"
  },
  {
    "url": "assets/js/73.ca7cccf6.js",
    "revision": "469a3a7442ce179489eb773920f5da86"
  },
  {
    "url": "assets/js/74.7f28473d.js",
    "revision": "dc9d1df7007202de400b7be0327d866d"
  },
  {
    "url": "assets/js/75.afb2db3f.js",
    "revision": "da2a23e3a8b1e6673e2d450a2f4c804e"
  },
  {
    "url": "assets/js/76.3244132e.js",
    "revision": "8b9f208c9a94e127138c3ebeaea48616"
  },
  {
    "url": "assets/js/77.b0ae8573.js",
    "revision": "2682c06bf057562fbd67abd4e0341c2a"
  },
  {
    "url": "assets/js/78.806aa6ee.js",
    "revision": "041aee7fab52138b11fb21c23c3ce21f"
  },
  {
    "url": "assets/js/79.596d9912.js",
    "revision": "8cef6db13be4740a71629d61940c52b0"
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
    "url": "assets/js/app.f08d8e34.js",
    "revision": "ce515419e04dd948d3e4d4186660298a"
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
    "revision": "a8274a9721858364ef747d09946d4a71"
  },
  {
    "url": "categories/index.html",
    "revision": "21f3a0b75adff3e9aac5eee7d508231e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bf5ea7a99639810fcf42c75dd7ac5979"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "9dfc50069abc26f00131ce906731c224"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "6ba3083f677a4cb88f890e1230919181"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d3379ea22a5cdce6105e32fb47c0ebc8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3ec300723380ab780702101e93127a99"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "1f206a3e32c0e800e7850783beb2d0b7"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "e4f1e22057e3a900709011adec274bd9"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "0964a3feafc4a58791f798ae6ac16aa9"
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
    "revision": "877be6fd2978eab72a85c33d8fac9f93"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "a154b4be38c84df0ead6736b0154382c"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "24ac4c9c4538812be3fac424d10d5d09"
  },
  {
    "url": "tags/css/index.html",
    "revision": "6b92288f1746996ea065b737e9218a95"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "a3c641b450f984a9a176d1b8d3d4dc22"
  },
  {
    "url": "tags/embed/index.html",
    "revision": "816a6148409580f9f3b605a30326c05e"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "56658006aeb28b4fc6e571d053e809c4"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "00cec82cd3835fe56a4947eeb01d00aa"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "482f29369d85b09b2439564601b7060b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "218f3864ca9848656a79d4563f4f29b4"
  },
  {
    "url": "tags/go/index.html",
    "revision": "91d3c39bc90e229df708a5adaa06aef9"
  },
  {
    "url": "tags/gorm/index.html",
    "revision": "7dba63a97fe8154d22754c67c2d62515"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "36a477bbf134a9e2fc7c882e3762413e"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "f56a6feb94fc27ae485be50d84f011df"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "c4f7ab8eef4d405cea296402b3188079"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "d00c9867e7dd0d40955d486d07cf5a2a"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "ba606e1ac3ba9a0579532ece247ee9e5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cd8059fe729869804b3d2f328b5449e8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "54927a11e01514e40e833ff58dae8d17"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "63ec014d7d872bfc4b281f38a5d3e0c3"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "31ba5e1ca974ba795d3d00f8a7a7e337"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "38002dfb6a7a22ecb0fff691ccb88e2f"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "b26e8c25c34ff8fadfa84a43f8fa58d6"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "2a8fe7a838dc7a104e71c186761fcfa3"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "8745be33e2cbdf67e0113e0c6913d2bb"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "0c237e52254db5d90247517d20179872"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "5b88f3f2cdae2bc0d7f09f5c59a9f4b7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5d923f75595cb08ed15703bad91c264f"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "72d8a601f00e8611456f97a4b4da8c88"
  },
  {
    "url": "tags/异常/index.html",
    "revision": "2f7e897cacf582632696a44f7c1e1327"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "f0f603489810f76691abd49ed8db91b0"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "6b4bfed0dbe88aafa973b2e6ed34ffa9"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "b6726c0b27872cd19be5aa86e728197c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "947f400755260a46a312265e78c3b85e"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "8fdef6bcf7f558cce4cf5d8152121e04"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "bfc74f1b8b1bc371ab9a7ca9381b28cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "217a074b5f74c151869e37101fa67574"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "ed4a69fe1313199609be4a0693e64379"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "01016d282b55c833d0adbc80d2ffefc2"
  },
  {
    "url": "技术文章/go/gin-web/gorm使用.html",
    "revision": "89bb64db39b37c2473b82087fe8b4520"
  },
  {
    "url": "技术文章/go/go-其他/embed 使用.html",
    "revision": "839a9e4e8a56ea9a422c1b0cb1b1574d"
  },
  {
    "url": "技术文章/go/go-其他/wails项目初始化.html",
    "revision": "679c77bcffad9e1f30d85fb54d6b3b30"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "3ae1081618dc56a463a125d391c30e5e"
  },
  {
    "url": "技术文章/go/go-其他/异常处理.html",
    "revision": "879a78a95e416adba74eb3dd9d698896"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "3aa093e9eec57faba2c6e6d0ec66c725"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "06783c36508c0a1717692937bd24645b"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "387ad8119a63770b31c5739cb7fc5145"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "0eaf9d0a54eefa94da878182a124a0e9"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "5d47e509a1b9bcbf90fc16d0dfd1d539"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "7871e0b8958825eca74a5b70f972b710"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "b8251a1c491e02ccc562c32d4de5e061"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "a8ab86056569c08103ac910d5a2b3593"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "417358d34974a68ad2840f68fc0b5aab"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "8b9956644ea50b1b999e25c32c996e62"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "a1585e2106e8a16566ac62bbf7db904a"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "e70b4bb302efb24d63c771896df83f8c"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "c9ceb72e446b14c6ada51517b04a3b22"
  },
  {
    "url": "技术文章/前端/CSS技巧.html",
    "revision": "23c26b789369095e14a7018a5d835d48"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "35779d39d3bd6c24001fdf28f933fad4"
  },
  {
    "url": "技术文章/前端/tailwindCSS使用.html",
    "revision": "9b9ba36ec2022787c62c6851319ab391"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "9b0bfb06fd40b9fe10542c3b000241ed"
  },
  {
    "url": "技术文章/前端/vue3组件使用.html",
    "revision": "6fd0105a6f1922a6c0ce999cde8261dd"
  },
  {
    "url": "技术文章/前端/vue3项目初始化.html",
    "revision": "adb5ab5ce5fad6bac3c8bc05b70f4b2c"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "9c9affdb1e679d00e0bd6412714a1a10"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "730ceb40ec962d799ab91ea86bac38c9"
  },
  {
    "url": "技术文章/前端/文件&文件夹选择.html",
    "revision": "6cc33633304fb142004698d181505005"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "097a05bd60be1a20fe5a436d528952dd"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "814ddfe3eebaf77f7354099ec766a79f"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "ebb064bf60383d9e42c169cd107146ea"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "2ff2dcb098771f0ca6d099e25ef176be"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "99533fbc804da0a7016e211b44039998"
  },
  {
    "url": "技术文章/运维/linux 环境部署.html",
    "revision": "f5d30b3509db1b1377bf8ba563722025"
  },
  {
    "url": "技术文章/运维/nginx配置.html",
    "revision": "16a99dfc1e451f132d40bfc6fc82d417"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "1749194eaa5f654158af13ce6e66a097"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "ec185ae1728f01ee4d8b7985394bb163"
  },
  {
    "url": "生活分享/life.html",
    "revision": "be7ff4a3a1e736adb675aa48f73d58c6"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "fb4c19ca462bfcdaff9041fe0af6cb50"
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
