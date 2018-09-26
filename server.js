const express = require('express');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const routes = require('./routes')
const handler = routes.getRequestHandler(app)
app.prepare().then(() => {
  const server = express().use(handler)
  // CUSTOM ROUTES GO HERE
  
  const port = process.env.PORT || 4000;
  
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});