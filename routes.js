const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('blog', '/blog', 'blog/index')
.add('article', '/blog/:article', 'blog/_article')