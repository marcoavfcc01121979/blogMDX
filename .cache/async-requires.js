// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-newsletter-js": () => import("./../../../src/pages/newsletter.js" /* webpackChunkName: "component---src-pages-newsletter-js" */),
  "component---src-pages-posts-js": () => import("./../../../src/pages/posts.js" /* webpackChunkName: "component---src-pages-posts-js" */),
  "component---src-pages-success-js": () => import("./../../../src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */)
}

