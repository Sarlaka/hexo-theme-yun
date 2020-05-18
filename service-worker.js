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
    "revision": "a06bc52530d70c77b981ae809a24c91b"
  },
  {
    "url": "about.html",
    "revision": "5fc71353e12ad6198a06926fe15d9cec"
  },
  {
    "url": "assets/css/0.styles.84caa238.css",
    "revision": "197c360dc4ae9484db60880f4728af14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9ab25aff.js",
    "revision": "9c3d7c3b8367c3ea62ae1c460d5abbb6"
  },
  {
    "url": "assets/js/11.ae4dd377.js",
    "revision": "84c0822af8504adf13ab437bfa130129"
  },
  {
    "url": "assets/js/12.2fb1adec.js",
    "revision": "3a687f95d72652af2e1cb835da564005"
  },
  {
    "url": "assets/js/13.d0c68060.js",
    "revision": "f4fbf09ec54f40a8f36c284679ef0e12"
  },
  {
    "url": "assets/js/14.ab91bf46.js",
    "revision": "2d8b7b6bd011bc8de5ea1ee6f5993053"
  },
  {
    "url": "assets/js/15.0610afcd.js",
    "revision": "cda61df4a25e95130f9869f011181832"
  },
  {
    "url": "assets/js/16.ed7bc853.js",
    "revision": "5cc591745413ea3a7f27831d0fe5eb20"
  },
  {
    "url": "assets/js/17.b756f178.js",
    "revision": "ff86575cfe45c10cc891b3f955175909"
  },
  {
    "url": "assets/js/18.f3018051.js",
    "revision": "4116b7810bf48203ca3251dad4eb9724"
  },
  {
    "url": "assets/js/19.e8cd3454.js",
    "revision": "93ef5ae2a67cfbe384fed953633f1114"
  },
  {
    "url": "assets/js/2.65cd4089.js",
    "revision": "3a067f6b93f60cbe3fd36ad7dff67f0d"
  },
  {
    "url": "assets/js/20.72418f4b.js",
    "revision": "fb2266c71b07f4d638efee43334e591f"
  },
  {
    "url": "assets/js/21.3a9a38f6.js",
    "revision": "6cc36a1112d87f2880966d289f802c9d"
  },
  {
    "url": "assets/js/22.875a58b2.js",
    "revision": "facc7bd365b24bd7497d53b8c0181c56"
  },
  {
    "url": "assets/js/23.3a147071.js",
    "revision": "2feea855fb3587bbc1eb8c6b872f3c89"
  },
  {
    "url": "assets/js/24.421cfda4.js",
    "revision": "5e8f22203ff46c9650084713f17a3319"
  },
  {
    "url": "assets/js/25.8fc96f46.js",
    "revision": "36c9fee00b021e4d697126cdfed26bde"
  },
  {
    "url": "assets/js/26.20971150.js",
    "revision": "8d9cec6cacb964f76bd8531adbe9f565"
  },
  {
    "url": "assets/js/27.a2f0f20d.js",
    "revision": "7b1fddefcda48f8a0b18a78859920884"
  },
  {
    "url": "assets/js/28.31f39909.js",
    "revision": "2bff900091c144f084085d5de210dac9"
  },
  {
    "url": "assets/js/3.c9f15469.js",
    "revision": "9cf70c4cdffccd9b147b90a856d5fdf7"
  },
  {
    "url": "assets/js/4.8df04cac.js",
    "revision": "d7ce50836b06dba10931a2e2d42a1194"
  },
  {
    "url": "assets/js/5.97c9feb5.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.e7aaab14.js",
    "revision": "220a258fee6358aa3e2e376e2622884a"
  },
  {
    "url": "assets/js/7.77ee7102.js",
    "revision": "8921d0cfc4f107b1989865af466c61c0"
  },
  {
    "url": "assets/js/8.46a7fb0c.js",
    "revision": "c3bf63c96e475ffb4733af72f9578c8c"
  },
  {
    "url": "assets/js/9.bf580697.js",
    "revision": "856a90805d06ad062188cd4a138e97a4"
  },
  {
    "url": "assets/js/app.baa7db3a.js",
    "revision": "7098184a99d5b61d9360c4837ec2f307"
  },
  {
    "url": "demo.html",
    "revision": "253a7cae4cd853bbb9cd56a61ef46cbd"
  },
  {
    "url": "en/about.html",
    "revision": "96f25fccc3baf149dc7e42de80016605"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "b5f302f85383542f95d5518a1f77f676"
  },
  {
    "url": "en/guide/config.html",
    "revision": "30b190a1e60ef339dd87f07f0f7f6735"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "93eb76d0e37cabc5a7c6d44710d45e35"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "4e70db5fe08bfac2e076deaff4295259"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b231dc3ccfd313debc520c49d23b0a3a"
  },
  {
    "url": "en/guide/page.html",
    "revision": "d0cc36862ec8dc9896b18c5fcd54c190"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "c9890c140f53542e4f5b34b74aee203e"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "dc7642fec207c8fa8a46474d691f41c8"
  },
  {
    "url": "en/index.html",
    "revision": "6670881a72fd9aad890729615d9673e3"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "6a1a1a1d6179ec299d372aab8b8a6ec1"
  },
  {
    "url": "guide/config.html",
    "revision": "683b428e944e300610f01f92f00f8344"
  },
  {
    "url": "guide/faq.html",
    "revision": "26eec4993ab97cd46fc350383dab0f1d"
  },
  {
    "url": "guide/icon.html",
    "revision": "246da8a67e2f8cf5a388e0ae59770eaf"
  },
  {
    "url": "guide/index.html",
    "revision": "44f0e845c0c30ef71369e6c014b2f463"
  },
  {
    "url": "guide/page.html",
    "revision": "72998a00ac4c80b8c60638865870b168"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "7c4f277e301a8ba50373702fed2b762b"
  },
  {
    "url": "guide/Todo.html",
    "revision": "c28fad3a402f1211e7696c7f9ba5e6dd"
  },
  {
    "url": "index.html",
    "revision": "594af1f2c80a681242c95ab93442019d"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "7864e41de7d927a725bb4ceac6bbed69"
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
