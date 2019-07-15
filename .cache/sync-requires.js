const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/templates/article.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/pages/about.js"))),
  "component---src-pages-articles-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/pages/articles.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/pages/index.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/home/dave/Desktop/david-andrews/src/pages/services.js")))
}

