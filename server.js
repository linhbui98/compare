const Express = require('express');
// const Spdy = require('spdy');
const Http = require('http');
const path = require('path')
    // const { certificate } = require('./shared');
const PORT_HTTP1 = 8080;
const indexRoute = require('./routes/index');

// HTTP1
const http1app = Express();
http1app.use(Express.static('assets'));

http1app.set('views', path.join(__dirname, 'views'));
http1app.set('view engine', 'pug');
http1app.get('/', indexRoute)

Http.createServer(http1app).listen(PORT_HTTP1, () => {
    console.log("App running")
});