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
    "revision": "46ed70c91f51dc02d5d75d9b46912f04"
  },
  {
    "url": "assets/css/0.styles.3c7cdc72.css",
    "revision": "a53b04117f2a537ac1b28ae88a885a74"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.3ce321fc.js",
    "revision": "d03683fc75c382ef035d0abe49be349c"
  },
  {
    "url": "assets/js/10.f88bc3f2.js",
    "revision": "921ee04af7b3ec04ca3125757005afd6"
  },
  {
    "url": "assets/js/14.9069242b.js",
    "revision": "320372dfb82c52bcc5fd2431bdf15fb8"
  },
  {
    "url": "assets/js/15.a371f058.js",
    "revision": "1ea1b725f022cb51ca821bf72a4d6204"
  },
  {
    "url": "assets/js/16.26f5c156.js",
    "revision": "5e5fb8ecf616b4694652a117fcc7dd6f"
  },
  {
    "url": "assets/js/17.47a17b39.js",
    "revision": "e7e94ab54c94b6e775a6830868e175e3"
  },
  {
    "url": "assets/js/18.6b948d0c.js",
    "revision": "4ef07c1e6da7060949ab58c457048c78"
  },
  {
    "url": "assets/js/19.6ba90f6e.js",
    "revision": "4d1de73577c2814ca3c8455c91316392"
  },
  {
    "url": "assets/js/2.4e963cce.js",
    "revision": "5ce3768a6caec8d89f99075aa1b05836"
  },
  {
    "url": "assets/js/20.37a67fb4.js",
    "revision": "63ae62c29a19f34f03da744c49782286"
  },
  {
    "url": "assets/js/21.d538f228.js",
    "revision": "8c520fd23b8a89e8e3ff83fd42adab93"
  },
  {
    "url": "assets/js/22.2fbfd575.js",
    "revision": "5b6132388688e4dbb73d8c9534d03244"
  },
  {
    "url": "assets/js/23.75a4db2f.js",
    "revision": "c4ec985d6e52e17a6f531c937fd52cd4"
  },
  {
    "url": "assets/js/24.831eec14.js",
    "revision": "f46377c3977f5450a6c7f3d9f72b230e"
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
    "url": "assets/js/27.ca3d69c9.js",
    "revision": "0f7bd35197a5ec336ee91e3aae2ac11f"
  },
  {
    "url": "assets/js/28.e879b87c.js",
    "revision": "ae5f8cd2be62ac0c45879f6e8668e61b"
  },
  {
    "url": "assets/js/29.245aede3.js",
    "revision": "fb8e62c883f8f33cc871e4c15ca94d0c"
  },
  {
    "url": "assets/js/3.222a953a.js",
    "revision": "858eacdd7b8a6ed884a1ab94a450a41c"
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
    "url": "assets/js/34.56781989.js",
    "revision": "d570c9388a86a0d91ba2f40231aab0ca"
  },
  {
    "url": "assets/js/35.7946a557.js",
    "revision": "91e83fbe25ab7fe006e26db9e2356b4f"
  },
  {
    "url": "assets/js/36.c8370697.js",
    "revision": "96a13d6c4757eee589ba9c9093a14a1e"
  },
  {
    "url": "assets/js/37.1db1105b.js",
    "revision": "2f0df5158f0c2b49f90cba8da22df486"
  },
  {
    "url": "assets/js/38.401f5aeb.js",
    "revision": "df8b1b1e4c498b5f23984723a07a5601"
  },
  {
    "url": "assets/js/39.5052ee67.js",
    "revision": "f736d2b6ec26c88cd19eaeb8d1f117e5"
  },
  {
    "url": "assets/js/4.e95d30f3.js",
    "revision": "bb1970cc05aa39ea48f87e01b7a7e3b0"
  },
  {
    "url": "assets/js/40.ab7d2143.js",
    "revision": "13bdd37fa1cca2d76252c4d8dc7910e9"
  },
  {
    "url": "assets/js/41.68d84d4b.js",
    "revision": "73992c49440916d2592cb9b69676968c"
  },
  {
    "url": "assets/js/42.d2a77850.js",
    "revision": "5dcca4cfdd754fa9929a6d5283d354d6"
  },
  {
    "url": "assets/js/43.dfccf738.js",
    "revision": "2c6d3fc59037ced5697db7a99da9ae1c"
  },
  {
    "url": "assets/js/44.f3d704d4.js",
    "revision": "4984b49680df84e67726f0ec69ee56ae"
  },
  {
    "url": "assets/js/45.2898009c.js",
    "revision": "d6e2e43065a0b9f26593f9067ce53efa"
  },
  {
    "url": "assets/js/46.bb733bf8.js",
    "revision": "02ea75b5625332218bdce269d974a4eb"
  },
  {
    "url": "assets/js/47.3d565d7c.js",
    "revision": "7d923dc8a220fd71f1733748f63ed620"
  },
  {
    "url": "assets/js/48.2b7d1f67.js",
    "revision": "1c4eeff8d06f82d973f4236f904cf944"
  },
  {
    "url": "assets/js/49.884e2cc1.js",
    "revision": "81a395fc86b0e5fb67b1ba2e2b68de59"
  },
  {
    "url": "assets/js/5.aeb6180a.js",
    "revision": "d097f3704ffff592ade4022b6f3cd5df"
  },
  {
    "url": "assets/js/50.7308f57b.js",
    "revision": "8750fb12abe7ad6fde032f7a3d2a5af9"
  },
  {
    "url": "assets/js/51.e09fa7cf.js",
    "revision": "597b196b7ea4322d7dd5cbeb67991ffb"
  },
  {
    "url": "assets/js/52.c6da71ae.js",
    "revision": "8aa30b49eaced95d15bcc04ceb3e3a0c"
  },
  {
    "url": "assets/js/53.8881891e.js",
    "revision": "4b69185e66beeaf754e7548b183bc4d5"
  },
  {
    "url": "assets/js/54.3c858c79.js",
    "revision": "d54f7ad47319ead2ed32a0037d17cd4f"
  },
  {
    "url": "assets/js/55.f04244bb.js",
    "revision": "d6a38e29a1cf704518355174da3c343a"
  },
  {
    "url": "assets/js/56.5f9c7161.js",
    "revision": "769852f9855199e3caaa58946a1e5c3a"
  },
  {
    "url": "assets/js/57.b007ea04.js",
    "revision": "82954b0b194c074355be86400aaab1dc"
  },
  {
    "url": "assets/js/58.9b271e3a.js",
    "revision": "865d59e67ddf60da10817452bf97fbf2"
  },
  {
    "url": "assets/js/59.ecb39ccb.js",
    "revision": "63c43ce12665c1be68671733ccf6e09c"
  },
  {
    "url": "assets/js/6.82dda2f7.js",
    "revision": "70d855504ffb74b7f5e4109999f73c39"
  },
  {
    "url": "assets/js/60.8bd5e568.js",
    "revision": "6128a9453e30154b5eacdc5726bda697"
  },
  {
    "url": "assets/js/61.a8822075.js",
    "revision": "a2fccc8343c88288dad5e2dab2b15f54"
  },
  {
    "url": "assets/js/62.6d3a4996.js",
    "revision": "a8795464443b5c6906b6eed80cb2ed15"
  },
  {
    "url": "assets/js/63.1dc425ac.js",
    "revision": "5f9eb98c2fba87ff021715c2f3399d24"
  },
  {
    "url": "assets/js/64.2746465c.js",
    "revision": "4110ff5d7a7d78cedae7d32c4c5f1061"
  },
  {
    "url": "assets/js/65.fc70018b.js",
    "revision": "0f32de158737c413c972785d7a5b7528"
  },
  {
    "url": "assets/js/66.6bf174c9.js",
    "revision": "1739fd93f6ebad6ec9d11c9fe267fc42"
  },
  {
    "url": "assets/js/67.4eae4b00.js",
    "revision": "75ceaa44039c1330c9415dc122770281"
  },
  {
    "url": "assets/js/68.9a83ede2.js",
    "revision": "09ad171741ed350393c92c3972656248"
  },
  {
    "url": "assets/js/69.f7c0e644.js",
    "revision": "ce6cf14d4dd914228ca05ac5aee2c94b"
  },
  {
    "url": "assets/js/7.1eb069f4.js",
    "revision": "a39f8ea91513899ad3f7f6c509cd1dcd"
  },
  {
    "url": "assets/js/70.597e5caf.js",
    "revision": "a97077256618ce43aea98be8c5da945c"
  },
  {
    "url": "assets/js/71.025ae4e2.js",
    "revision": "5e8060e1db97566d244a979543a4a773"
  },
  {
    "url": "assets/js/72.605c87da.js",
    "revision": "19cd0815b2290edeb641cca6087b709a"
  },
  {
    "url": "assets/js/73.3f09f04f.js",
    "revision": "df30ea2a0ef90d00d8658bd113ee66f3"
  },
  {
    "url": "assets/js/74.99f6af7d.js",
    "revision": "62bd55963e320f2e1ef9eab24528ee32"
  },
  {
    "url": "assets/js/75.64eeaab0.js",
    "revision": "adf0f0cd22799ea65e80c1e81e1cce9f"
  },
  {
    "url": "assets/js/76.b1a6ac89.js",
    "revision": "d33d9977873153acd655e3b1fb8c080b"
  },
  {
    "url": "assets/js/77.148478f5.js",
    "revision": "9b618ac074ed7ba2efbc60e5ac007ff3"
  },
  {
    "url": "assets/js/78.84c1b830.js",
    "revision": "3c97e8c370e4f68bbc9a5b896cb5983f"
  },
  {
    "url": "assets/js/79.28c9d10f.js",
    "revision": "1100f9033ebee3cd51fc32693454e8a0"
  },
  {
    "url": "assets/js/8.dde7435f.js",
    "revision": "d2737bc1c1adee2b52fa21f2e1ca9896"
  },
  {
    "url": "assets/js/80.261797a5.js",
    "revision": "0750f1c84ceeab569dfc38964ab04d95"
  },
  {
    "url": "assets/js/81.7487e2db.js",
    "revision": "2ee0021fc34d9bbdcf4ee23d71585abb"
  },
  {
    "url": "assets/js/82.178dccac.js",
    "revision": "bd7733be7783d89677caefebbc8ca54b"
  },
  {
    "url": "assets/js/83.84115354.js",
    "revision": "b22868f84342f19ffd47fec1022b0f04"
  },
  {
    "url": "assets/js/84.4b26c77f.js",
    "revision": "8925c2667f009ae1a352183fb273f413"
  },
  {
    "url": "assets/js/85.f8185b42.js",
    "revision": "f75d8448bac1c03810a489fd7acbb5d1"
  },
  {
    "url": "assets/js/9.6715f64f.js",
    "revision": "c05c683932f03fe04acf2302bd7f6707"
  },
  {
    "url": "assets/js/app.13f1df6e.js",
    "revision": "feb014d59b27aefd2c64def2a7313c8e"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.9e68f3e6.js",
    "revision": "5d4c812a535d6c99c0043224350b6ec3"
  },
  {
    "url": "assets/js/vendors~flowchart.dca1c70e.js",
    "revision": "cf6f669bf3ce0b7c742b211774343c21"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/go/index.html",
    "revision": "32cd07d92044c598c0c781d6a568c96c"
  },
  {
    "url": "categories/index.html",
    "revision": "28ee3c98857c81be000b1c980f62a0fc"
  },
  {
    "url": "categories/java/index.html",
    "revision": "da558da0cce4e78407913e7454754bd4"
  },
  {
    "url": "categories/pinia/index.html",
    "revision": "7bf9093bcb0577bdb90072c701b8e56b"
  },
  {
    "url": "categories/ubuntu/index.html",
    "revision": "42ca18f9ac5eb984cc55a68202d298b9"
  },
  {
    "url": "categories/中间件/index.html",
    "revision": "c4dace56b73ba89e2e6504dae5a64aac"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1dc1fb34f67a1baa16c0d8a261ed5c5e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a523e9fe4157aca595bd33c7cf30db27"
  },
  {
    "url": "categories/经验分享/index.html",
    "revision": "6f349a49310ef5d93d5388ed8ba838e0"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "741a35c746c40625c6342416a3e4fc50"
  },
  {
    "url": "css/style.css",
    "revision": "dd258bb2008ef71d60907effe2c44b66"
  },
  {
    "url": "Go/gin-web/gin.html",
    "revision": "f82961b6b654b104a664f92177b330db"
  },
  {
    "url": "Go/gin-web/gin配置跨域.html",
    "revision": "7d2106bcc7b953e57c4553be11c87b74"
  },
  {
    "url": "Go/gin-web/gorm使用.html",
    "revision": "a6ccc9face61cc75013aad3ff08bea1e"
  },
  {
    "url": "Go/go语法/embed 使用.html",
    "revision": "98363f63a521f9b0120cd4ee70f7e3d1"
  },
  {
    "url": "Go/go语法/使用protobuf.html",
    "revision": "299bf1d17258da2aa593bad6f611d21d"
  },
  {
    "url": "Go/go语法/异常处理.html",
    "revision": "65394229a66ab6e9385431f19ff36504"
  },
  {
    "url": "Go/go语法/编译部署.html",
    "revision": "c9cf6908820e28dc056f1083631a6599"
  },
  {
    "url": "Go/客户端/wails项目初始化.html",
    "revision": "876f94d5f90e181bdd4d9399d6f6d929"
  },
  {
    "url": "guide/index.html",
    "revision": "d617c4cd72e584937dd923c9b7a6a060"
  },
  {
    "url": "guide/nav.html",
    "revision": "05ef950c13f28b4c31baaa123eea8189"
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
    "url": "index.html",
    "revision": "efa5744cdb1f0af47476748d54cbf615"
  },
  {
    "url": "Java/springboot/00-目录.html",
    "revision": "e26a46ca689dcb3aaad55a9b4d43882b"
  },
  {
    "url": "Java/springboot/01-springboot 返回流式数据.html",
    "revision": "2a2719a052c70054a10a601312e6b01e"
  },
  {
    "url": "Java/springboot/02-springboot实现自定义starter.html",
    "revision": "89629dc4ce93e60e6e2ead4671568048"
  },
  {
    "url": "Java/高并发/00-目录.html",
    "revision": "5bd9d3ad760c3a99d2c4f98841257a1b"
  },
  {
    "url": "Java/高并发/01-分布式事务解决方案.html",
    "revision": "8bfd40dea39ebe8a377e49b69ed6a68d"
  },
  {
    "url": "Java/高并发/02-如何应对大流量.html",
    "revision": "a1de11effa4b22d79001f6b1bfcf8b71"
  },
  {
    "url": "js/custom.js",
    "revision": "6a503f3fcf4db115ddd945a9820b6d5b"
  },
  {
    "url": "tag/index.html",
    "revision": "d7f2b40fdd8274805001c7b6b6ce2cdb"
  },
  {
    "url": "tags/ChatGPT/index.html",
    "revision": "da4d32910ab5110adbc4bea20045f935"
  },
  {
    "url": "tags/css/index.html",
    "revision": "9c1c83f34aba26ca2f8b07aeea440cc0"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "4480181c57b5984f229298deefc2f140"
  },
  {
    "url": "tags/ecs/index.html",
    "revision": "54ff7480b62c31368b799058a44de809"
  },
  {
    "url": "tags/embed/index.html",
    "revision": "eddf66985de43c6b2af7c4e60ac37d9e"
  },
  {
    "url": "tags/ES/index.html",
    "revision": "59f09cb64820d873ba7215878787e68d"
  },
  {
    "url": "tags/filebeat/index.html",
    "revision": "e36a1e6ad8d3058d6b3037104db8a658"
  },
  {
    "url": "tags/gin/index.html",
    "revision": "c45126b3b57abc59dfe5dcfcd3f294a7"
  },
  {
    "url": "tags/git/index.html",
    "revision": "55098ccca887dbdbd7f1636371b8316b"
  },
  {
    "url": "tags/go/index.html",
    "revision": "32c0b8f552d018d0dc4e94cc0fa29208"
  },
  {
    "url": "tags/gorm/index.html",
    "revision": "1518b05198885b685ff0a9935dda45cb"
  },
  {
    "url": "tags/k8s/index.html",
    "revision": "c2344aa2983af016a0ca6c7c9828755a"
  },
  {
    "url": "tags/linux/index.html",
    "revision": "5b2a41f0195da694b1df0b17d223988f"
  },
  {
    "url": "tags/nginx/index.html",
    "revision": "30aef050441ac4ad3b316d9adbe5b535"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "8c3a84bfc4144bfbe8537e4227453dca"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "b66e62b7374780435709e0ed52a1beb6"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "39852ba465ba006bf5453355c8a0ccc3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "34ff780f771d94d022085b401e353287"
  },
  {
    "url": "tags/ssh/index.html",
    "revision": "4802700f2506e86e3f9c68a18a80b58d"
  },
  {
    "url": "tags/ubuntu/index.html",
    "revision": "49de9ec91442aa23dee70264f957feee"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "754b355a5b223d8a20180eb3e4dd8b52"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "6566613e382d70a5b37f6bec3edafd09"
  },
  {
    "url": "tags/wget/index.html",
    "revision": "e1bc587683edd65b889dceb1362af294"
  },
  {
    "url": "tags/xxl-job/index.html",
    "revision": "a62fb787cdae8a839c1fffbe95346042"
  },
  {
    "url": "tags/ZincSearch/index.html",
    "revision": "9834b5dbaab60ccea69a733cb6c51072"
  },
  {
    "url": "tags/事务/index.html",
    "revision": "4d903a1aa571483cb9bd12ff4241f2d6"
  },
  {
    "url": "tags/全文索引/index.html",
    "revision": "ce7a210eedd8099cbb19f72dd16cb8e2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "2ea4423245e702e548a989b606a4de95"
  },
  {
    "url": "tags/分布式/index.html",
    "revision": "10945fc9d693e70192a7a70036973368"
  },
  {
    "url": "tags/异常/index.html",
    "revision": "bd087e04a363d07a1e517a37aa4c3618"
  },
  {
    "url": "tags/搜索引擎/index.html",
    "revision": "e0b11566bdb70c0c071c12b543fbaccf"
  },
  {
    "url": "tags/流式数据/index.html",
    "revision": "9247586c590fa88c5f09d94f564ac1e0"
  },
  {
    "url": "tags/消息队列/index.html",
    "revision": "a80ab1d003ea8fe02bf744bc25972b33"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "fdc74e92e42f915a8112acf9976e374e"
  },
  {
    "url": "tags/跨域/index.html",
    "revision": "6969c8c8f4010963c2a6e3c5e7ff7350"
  },
  {
    "url": "tags/部署/index.html",
    "revision": "64043997a71a0e1908b3b64142d8a4cb"
  },
  {
    "url": "timeline/index.html",
    "revision": "47ed1078c24b234bd03c380de29b68cd"
  },
  {
    "url": "中间件/docker rabbitMQ 安装延时队列插件.html",
    "revision": "60a8f7e512d91e68c86be0d764c48045"
  },
  {
    "url": "中间件/ES 查询API.html",
    "revision": "8127a3af0c3cd06decdb5c81b3c0a056"
  },
  {
    "url": "中间件/RabbitMQ 消费者ack超时问题.html",
    "revision": "c633715da6234c1f6f538dc881bcd68e"
  },
  {
    "url": "中间件/RabbitMQ常见问题.html",
    "revision": "c6838c2cc3d57af31f602f7722b2a5a0"
  },
  {
    "url": "中间件/Redis消息队列方案.html",
    "revision": "cb790c5b9d4e1f2d2aff910e58e63abe"
  },
  {
    "url": "中间件/xxl-job.html",
    "revision": "2c9af342bc04dc65a5b89076c8cb23b2"
  },
  {
    "url": "中间件/ZincSearch.html",
    "revision": "ee770b7c666c729f29b631a67007f5e6"
  },
  {
    "url": "中间件/使用filebeat监听异常日志发送redis.html",
    "revision": "87043a7c23557e6cd2a1a46f50a1b8b7"
  },
  {
    "url": "前端/CSS技巧.html",
    "revision": "410487eec15eb2cdc0458e558ac2e38f"
  },
  {
    "url": "前端/pinia使用报错.html",
    "revision": "a798270bbc1f7527bb24ce3d8dee17f0"
  },
  {
    "url": "前端/tailwindCSS使用.html",
    "revision": "dac3e75f06c8a2382428b422caaa2223"
  },
  {
    "url": "前端/vue3 项目引入pinia并持久化.html",
    "revision": "6973ab13868e43b0e144efb7a23cecdb"
  },
  {
    "url": "前端/vue3组件使用.html",
    "revision": "54bc50d5980df76513f89c4826c638cf"
  },
  {
    "url": "前端/vue3项目初始化.html",
    "revision": "90e791e509a032728f3fd746538f1c23"
  },
  {
    "url": "前端/前后端部署不分离技巧.html",
    "revision": "8bf700d873a882738a9f3534d334342b"
  },
  {
    "url": "前端/动态隐藏列.html",
    "revision": "8e2cf3976e6e6bebb208254bad190a63"
  },
  {
    "url": "前端/文件&文件夹选择.html",
    "revision": "bef072f10cd85fe498761da7ffd7975f"
  },
  {
    "url": "生活分享/ChatGPT使用体验.html",
    "revision": "b99a022c22a47f623a1b6fa390569451"
  },
  {
    "url": "生活分享/life.html",
    "revision": "0145f02f55f054ce25e76e403ac362be"
  },
  {
    "url": "生活分享/常用prompt.html",
    "revision": "393f248438ed15522c712acd810a3d85"
  },
  {
    "url": "运维/docker/docker 容器内安装wget.html",
    "revision": "6dd259437e54d4ff78177abebf9bc481"
  },
  {
    "url": "运维/docker/k8s学习.html",
    "revision": "31a5564fdbf822b712c9531b961e76bd"
  },
  {
    "url": "运维/linux/linux 常用脚本.html",
    "revision": "51356d4d1ed645d697b3842e6d8a82f9"
  },
  {
    "url": "运维/linux/服务器配置ssh密钥登录.html",
    "revision": "6859fbc5af7f23f14766079caecdc39b"
  },
  {
    "url": "运维/linux/服务器问题排查.html",
    "revision": "5547caf105a031e7ea3d6cea720d1298"
  },
  {
    "url": "运维/安装配置/centos 安装docker.html",
    "revision": "39d5e7022134a2794fb037cce8ca11db"
  },
  {
    "url": "运维/安装配置/centos 安装git.html",
    "revision": "dc17b003b2d521945e2c384a71c7389e"
  },
  {
    "url": "运维/安装配置/nginx配置.html",
    "revision": "74b83c8cadab5405488870b4e482aebd"
  },
  {
    "url": "运维/安装配置/ubuntu 配置开发环境.html",
    "revision": "d79b134410192b8d589c799f5a4005b3"
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
