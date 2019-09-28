const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/meaghan/Desktop/devbytes/src/templates/blog-post.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/meaghan/Desktop/devbytes/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/meaghan/Desktop/devbytes/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/meaghan/Desktop/devbytes/src/pages/my-files.js")))
}

