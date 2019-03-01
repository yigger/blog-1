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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5a22db66b097dd1136bb5ac08dec02d3"
  },
  {
    "url": "about/index.html",
    "revision": "dd58ad195a9b6f7b606e924223a63bf0"
  },
  {
    "url": "assets/css/1.styles.497809b8.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.feac2822.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.a32fadfa.css",
    "revision": "66e0d44e04b10a4fa22e8bbaafdd66bd"
  },
  {
    "url": "assets/img/blog.c5a9a0ab.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "assets/img/home.6a04dd0a.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.497809b8.js",
    "revision": "e65dd1576d56a0d3822658485d3daeb9"
  },
  {
    "url": "assets/js/10.bd65e7f4.js",
    "revision": "cf6f104d8061051c3002b79370b5bf21"
  },
  {
    "url": "assets/js/11.2041476a.js",
    "revision": "fee8aab98d150a5d951088c01dfe9499"
  },
  {
    "url": "assets/js/12.e18cbd77.js",
    "revision": "46414e4bcdeb0509081923f275b4c3c7"
  },
  {
    "url": "assets/js/13.a3cd6c5c.js",
    "revision": "a0f1d1ede59bd56dce4b0420461ef71b"
  },
  {
    "url": "assets/js/14.80fa09fa.js",
    "revision": "3544e4738d9a8d3da47853694721559b"
  },
  {
    "url": "assets/js/15.38a93555.js",
    "revision": "83412160438f242c69e409bd1fa5747d"
  },
  {
    "url": "assets/js/16.c76c614e.js",
    "revision": "cf6c1b4af92ca878d47bdc087c156ad3"
  },
  {
    "url": "assets/js/17.f5845efe.js",
    "revision": "d39f44872abcff752eeb757ac9bb98eb"
  },
  {
    "url": "assets/js/18.de06457c.js",
    "revision": "df6f116a2294b19906a102eb8fe45590"
  },
  {
    "url": "assets/js/19.f184d6f8.js",
    "revision": "301bce2163c107dcbe6001155034e90f"
  },
  {
    "url": "assets/js/2.feac2822.js",
    "revision": "b0bd6052cd3ebaf3c4bb8fb7e075fa24"
  },
  {
    "url": "assets/js/20.b5789981.js",
    "revision": "7dfce9baa7322169847c578ee03947d4"
  },
  {
    "url": "assets/js/21.2e28560e.js",
    "revision": "339a4cf84b197e8da04d2f67ec0b1808"
  },
  {
    "url": "assets/js/22.ecf0fa8f.js",
    "revision": "8c07771e94c53de0066e67c09f3f7f2d"
  },
  {
    "url": "assets/js/23.7825e421.js",
    "revision": "a8ab0581c5c69d6537c04c2f0ef0d123"
  },
  {
    "url": "assets/js/24.31b171cd.js",
    "revision": "136f337e5204272e7a9f7bb0d3f9187e"
  },
  {
    "url": "assets/js/25.9e84bbd5.js",
    "revision": "8496cf311644d8002403768ca51d5a7d"
  },
  {
    "url": "assets/js/26.314c762d.js",
    "revision": "43dbad931ef531fb1a9d21caa0d6488a"
  },
  {
    "url": "assets/js/27.89178e93.js",
    "revision": "52290dd31d0450fe4e613b088c0f1bff"
  },
  {
    "url": "assets/js/3.f765ea1d.js",
    "revision": "30e5593faaeae9a12220eb55d88922fa"
  },
  {
    "url": "assets/js/4.cd60779c.js",
    "revision": "abeab0a6469c7ae8587b2830c49d98a4"
  },
  {
    "url": "assets/js/5.153d9505.js",
    "revision": "1774eecd3cd7e47aaf411c575171a028"
  },
  {
    "url": "assets/js/6.05dc1100.js",
    "revision": "c28c611b97cc0e674805128c38e4f558"
  },
  {
    "url": "assets/js/7.0dbcf54a.js",
    "revision": "6a2280820ff8ec8aaa7ad4c35cc4740d"
  },
  {
    "url": "assets/js/8.ed9565e7.js",
    "revision": "b02cc3b75d2b73c6f2e94a0e3ca1ccdb"
  },
  {
    "url": "assets/js/9.db3bd5b2.js",
    "revision": "35816f757ec7c85ee209d10c0041c970"
  },
  {
    "url": "assets/js/app.a32fadfa.js",
    "revision": "20ea920a00f802cce9e64556b3efb77f"
  },
  {
    "url": "blog/canvas2Image.html",
    "revision": "c52fac617aa0ad6328408087aac82113"
  },
  {
    "url": "blog/css-problem.html",
    "revision": "1e986ef35a0c20ea52e2baabc2cd8a85"
  },
  {
    "url": "blog/elegant-code.html",
    "revision": "8002372d028fc2d9b9c75f2bd6d156ef"
  },
  {
    "url": "blog/ES6-study.html",
    "revision": "328311567b11b3dd051684e14879ed79"
  },
  {
    "url": "blog/eslint-rules-list.html",
    "revision": "3275a10e975b6c5f4e7de5abb00c10f7"
  },
  {
    "url": "blog/front-end-progress.html",
    "revision": "55a20b0ce5f06555e811d06bcdd0b8a0"
  },
  {
    "url": "blog/github-use-notes.html",
    "revision": "91e70beb3daa38243ea51fd735063713"
  },
  {
    "url": "blog/html5-IOS-Android.html",
    "revision": "0ba8ddcfae8611c6bfd25fc855cc5825"
  },
  {
    "url": "blog/javaScript-common-function.html",
    "revision": "7be1215dece16f28afdbd6d6645470f8"
  },
  {
    "url": "blog/javaScript-error-type.html",
    "revision": "19bcf36f15922f9d9a6adc814f411b87"
  },
  {
    "url": "blog/javaScript-execCommand.html",
    "revision": "0f2bfa64fa5bfc91b4474c9be43a92f3"
  },
  {
    "url": "blog/javaScript-skill.html",
    "revision": "7d9749fa714360bfd3b62eac7b41b3c3"
  },
  {
    "url": "blog/js-diabolic-tricks-and-wicked-craft.html",
    "revision": "ad9c664fc881eeab323f751f94a7c23c"
  },
  {
    "url": "blog/mac-command.html",
    "revision": "4325c9d2d0b843199d2dd0e0e4452d20"
  },
  {
    "url": "blog/mac-mysql-attention.html",
    "revision": "02fc64d0bffd58fc32d3a2568f1ad073"
  },
  {
    "url": "blog/mobile-hack.html",
    "revision": "de63594432f312e77f8704f2745a1274"
  },
  {
    "url": "blog/node-code-standard.html",
    "revision": "d59fe85cec1cc1fdafbe3920e5f5fcfa"
  },
  {
    "url": "blog/node-common-methods.html",
    "revision": "a16a8ada665d06eaae98858f9f59f4ee"
  },
  {
    "url": "blog/node-study.html",
    "revision": "53f36e80de7f20802061d2877d07dc55"
  },
  {
    "url": "blog/vue-attention.html",
    "revision": "51044739e3946e427f31ac5919e0b54b"
  },
  {
    "url": "blog/vue-source-study.html",
    "revision": "71d90540bcbbdac7fdeb96769311e192"
  },
  {
    "url": "blog/vuepress-theme-toos.html",
    "revision": "6076cfa8fc820c9f6e7173d2cae8c596"
  },
  {
    "url": "img/blog.jpg",
    "revision": "c5a9a0ab118e42e02fb9a35fbeb71421"
  },
  {
    "url": "img/home.gif",
    "revision": "c1cf7dff0b60d2dfe61f39efdf377f30"
  },
  {
    "url": "img/home.jpg",
    "revision": "6a04dd0a9c5f7ee575afdc6f79e33da2"
  },
  {
    "url": "img/logo.png",
    "revision": "6eff31aa92ee6d233df8874ac4de6b8d"
  },
  {
    "url": "index.html",
    "revision": "d0d8c9aa649b26846a1cfc9b0019ae01"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
