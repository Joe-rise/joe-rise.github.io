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
    "revision": "80be27c01efd8263da5551d3ab8e8e95"
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
    "url": "assets/js/39.8dc9821e.js",
    "revision": "abacbceca0f205a0d5b7b2cf20eb4c5f"
  },
  {
    "url": "assets/js/4.44289efc.js",
    "revision": "6e94f6f63329517405b9fa51f072cce0"
  },
  {
    "url": "assets/js/40.3023a31f.js",
    "revision": "e6696d9729a6a93560e14dfa38bd15c6"
  },
  {
    "url": "assets/js/41.ca51dc0e.js",
    "revision": "73992c49440916d2592cb9b69676968c"
  },
  {
    "url": "assets/js/42.81d985c8.js",
    "revision": "de0bbd59c6f198f8da4aade666a5fbd8"
  },
  {
    "url": "assets/js/43.5bed1a13.js",
    "revision": "979b26ccafd02d33aa242b606b5d2487"
  },
  {
    "url": "assets/js/44.f0a55c66.js",
    "revision": "f37ca2ceabd09157787c5bb2138d4506"
  },
  {
    "url": "assets/js/45.58b25262.js",
    "revision": "8beaa814bef25125309d6df29feb9edc"
  },
  {
    "url": "assets/js/46.31aa8698.js",
    "revision": "cb761d7a4388bfe0929ae3269677d367"
  },
  {
    "url": "assets/js/47.8ee1e261.js",
    "revision": "f91452fefb29d0b65a820924aa1e7323"
  },
  {
    "url": "assets/js/48.906e45c9.js",
    "revision": "90e7ebc401cffa7b40ad4a650d189c1f"
  },
  {
    "url": "assets/js/49.52c52bbe.js",
    "revision": "c46300eec7c8cf50561206c816751946"
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
    "url": "assets/js/53.f4430815.js",
    "revision": "278ce4ae04c73536f9077c5ad4b2d15c"
  },
  {
    "url": "assets/js/54.00152bfd.js",
    "revision": "049e6ac7e070875fc4bc819b14ce50de"
  },
  {
    "url": "assets/js/55.eafa15b3.js",
    "revision": "a4b7e3ebbb4cc9b20903adcf9ae76122"
  },
  {
    "url": "assets/js/56.02aaf83d.js",
    "revision": "7d23c0ffcdd742192df7c02a299c9cf4"
  },
  {
    "url": "assets/js/57.19d3fc01.js",
    "revision": "0ad554930bf62ae9d85eca199d880e07"
  },
  {
    "url": "assets/js/58.fe8efec3.js",
    "revision": "aa18bb509c80e8e4fa7742d5056000ed"
  },
  {
    "url": "assets/js/59.d1121ca2.js",
    "revision": "121766179f2ee46e7e9a548a69694537"
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
    "url": "assets/js/61.9721a4ab.js",
    "revision": "69ac06338836835397ef3d0c5dc72370"
  },
  {
    "url": "assets/js/62.6aeee69a.js",
    "revision": "8ebabff0f9d890bd1d255f37236e2cdc"
  },
  {
    "url": "assets/js/63.8ff510cd.js",
    "revision": "7e806261c61b11e5d822a303b3fc2b76"
  },
  {
    "url": "assets/js/64.76cdc9eb.js",
    "revision": "d68c9e4d0c587d10156ff388b8d827b5"
  },
  {
    "url": "assets/js/65.2317d828.js",
    "revision": "60ffa60d43eacd71cdd4343958c8d4a5"
  },
  {
    "url": "assets/js/66.e7aa56ce.js",
    "revision": "bcf387c1e67e78995a72dfd35019675d"
  },
  {
    "url": "assets/js/67.650d6525.js",
    "revision": "ffdc47d825d4cc98a3186affd98c0354"
  },
  {
    "url": "assets/js/68.07c7147a.js",
    "revision": "f50d58d4e2b1439346b3bc6d664e4edc"
  },
  {
    "url": "assets/js/69.11f14cbf.js",
    "revision": "dbe482a97933cf341a30fac5715d7bfb"
  },
  {
    "url": "assets/js/7.1eb069f4.js",
    "revision": "a39f8ea91513899ad3f7f6c509cd1dcd"
  },
  {
    "url": "assets/js/70.c21cae45.js",
    "revision": "5ca01122b989007694d2fbd0d2af85bd"
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
    "url": "assets/js/app.6b8c9715.js",
    "revision": "f8d60cfb4bc9e0d5bdd331bdade2f5fb"
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
    "revision": "b1cc170f3ab9a73d7909f8048a58d817"
  },
  {
    "url": "categories/index.html",
    "revision": "942902d16e93a5b93a6b083b7e909be0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "068f9b8ffa0f02344fdd57a1dfc4226c"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "9a6a318492249ee50fa6feb27e530cc4"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "c57a289068f76d8806d90ccace0953c6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "cce489a9ed2e1b658e6930405997f5d3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d2f8616d368786dff2a0c61c55c25aef"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "d3c6074d230cfa4a65bbfad27555cb3c"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "2967b5b26c3544434e077c4707f294f8"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "guide/index.html",
    "revision": "7359794eecd3c15af50cd7a4e3ed6477"
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
    "revision": "6a065d709ab5ed747a281cfff9f25c98"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "c742753db0a68748cb7b3623fe74ff0a"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "38d8db517ae3afd6329e5ef7accc3677"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "54b14f3aaa21d6ee708653a8d33bd783"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "dde1e28bd80330c977a67e36bc7814db"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "734028347bc05c30990dc13be1e3ebbb"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "b7b6f0646dd530ec2df0d601d124fe13"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2e7cf3370cc59be34655161c0815f6b0"
  },
  {
    "url": "tags/go/index.html",
    "revision": "f5890bf5f4b6a88710686bf02e56bce7"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "cec5632fdcfe642a7f4ea15b7bf850ff"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "76a1a15723bfe864686ee11fb218ad3b"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "f50ef256a113f895e5c5e273dc97d05a"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "15b9527e8c1f22eed360ba884ded3d8f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "dfebcc1752b46d3eb2278cc098fe9765"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c56ebb1eea5543bc8d0814cc55be7431"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "d0ccc3a497e8bebe543573547a9e7274"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "769d7b91fbea501f0b185619ce34543b"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "bc70196944cce07be83d6ecfbd49fc91"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "e25e69605306d507987e2c7d48bb3b6d"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "a5fd9383a5986d091f4e0e2f7e0a178d"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "9eea88b377da57cba143892a83393672"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "4ccf399f27b2e182c4c1172cbaee0b23"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "f2ec9b9d1b11894ff46f5ecc26ab3b55"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "097928f05fec15c1e48cf29cb37cf5fb"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "d95922ca39f1274b5f7f6223ae9ebd88"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "d8170fd53540aed692451bb90091c770"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "06941f468ff8f32da4f8943234fc8965"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "01c507e82bff6106fd110fcc01dc0054"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "59bceb18649d9e7dd2f86ce31e93c31c"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "43f06a09607ea57b17acdab64d846624"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "533ac457ed80cb10dbcde7915a1692f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f86026e51c26e71d88a5631bb7163ca"
  },
  {
    "url": "技术文章/go/gin-web/gin.html",
    "revision": "99f497f0b2cbcb7bed32892c90a29968"
  },
  {
    "url": "技术文章/go/gin-web/gin配置跨域.html",
    "revision": "1eac4aed2f10f4d08317a480b0da4431"
  },
  {
    "url": "技术文章/go/go-其他/使用protobuf.html",
    "revision": "b6773ec63a00ecb8239a7d16dd07a3bf"
  },
  {
    "url": "技术文章/go/go-其他/编译部署.html",
    "revision": "e741d8e02708f1e5773dd235ef7cd6b6"
  },
  {
    "url": "技术文章/java/springboot 返回流式数据.html",
    "revision": "f063e356ebc6a04508f3606ea4318746"
  },
  {
    "url": "技术文章/java/springboot.html",
    "revision": "ff925487470ca36fe7f34e2313866a19"
  },
  {
    "url": "技术文章/java/分布式事务解决方案.html",
    "revision": "a9cd5c334449eb741323bb1a754e8bbd"
  },
  {
    "url": "技术文章/java/如何应对大流量.html",
    "revision": "8f74dc3fda2b37bfeb723a719b2ddce9"
  },
  {
    "url": "技术文章/中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "550dcd41ed8aec17836d241762f2cc28"
  },
  {
    "url": "技术文章/中间件/ES 查询API.html",
    "revision": "d54e5ab90d62cb899fbc9fa5ae590dba"
  },
  {
    "url": "技术文章/中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "8522d0032ace5a5ca94455e720b3ea9f"
  },
  {
    "url": "技术文章/中间件/RabbitMQ常见问题.html",
    "revision": "7f6926f1fc25a8def6f92f64647cba65"
  },
  {
    "url": "技术文章/中间件/Redis消息队列方案.html",
    "revision": "3da87bdd856d8cf46c5194b36aab44ce"
  },
  {
    "url": "技术文章/中间件/xxl-job.html",
    "revision": "a3ae6804205dcc56bd1a1d63b3ac896f"
  },
  {
    "url": "技术文章/中间件/ZincSearch.html",
    "revision": "c8baec3af61053d9abc2031ffea48028"
  },
  {
    "url": "技术文章/中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "0cfd4c1a5e1b5154eea33e299abb49ab"
  },
  {
    "url": "技术文章/前端/pinia使用报错.html",
    "revision": "8c157d9c725f5c4aaeb0d5800a84d18d"
  },
  {
    "url": "技术文章/前端/vue01.html",
    "revision": "efa73fb8f7c1e986207a9a48c6e6259c"
  },
  {
    "url": "技术文章/前端/vue3 项目引入pinia并持久化.html",
    "revision": "d5609e68b9bc2e984e8a6ae39de74151"
  },
  {
    "url": "技术文章/前端/前后端部署不分离技巧.html",
    "revision": "d61caabbecab219e27f38e7487a02a16"
  },
  {
    "url": "技术文章/前端/动态隐藏列.html",
    "revision": "811fbb2ca6d06f8df23a263b36d25525"
  },
  {
    "url": "技术文章/运维/centos 安装git.html",
    "revision": "11289b4f450d8ea7ae5ee0d470c82ac0"
  },
  {
    "url": "技术文章/运维/centos7.html",
    "revision": "192cbde0f476b9282d2d43f871e30369"
  },
  {
    "url": "技术文章/运维/docker 容器内安装wget.html",
    "revision": "0b47422978d08c858a1b3509d85f7404"
  },
  {
    "url": "技术文章/运维/k8s学习.html",
    "revision": "10fe0c8efcd8b6ceaaa08408e2caa2be"
  },
  {
    "url": "技术文章/运维/linux 常用脚本.html",
    "revision": "341f2040b2deb806cb6abaa09a5a5682"
  },
  {
    "url": "技术文章/运维/linux 环境部署.html",
    "revision": "88b81073e674f79ef8103edfbb48d2ef"
  },
  {
    "url": "技术文章/运维/服务器配置ssh密钥登录.html",
    "revision": "6d3de28b98b553ca3c696c9139d19bf2"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "1a4704594daf1781d6ba0e38785deccc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "59a8dd634e788a7f49ae408826922e88"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "7aa327a695b40b35c443c403ee53818d"
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
