const homeRoute = require('./homeRoute');
const signinRoute = require('./signinRoute');
const detailRoute = require('./detailRoute');
const assistanceRoute = require('./assistanceRoute');

function route(app) {
    
    app.use('/', assistanceRoute)
    app.use('/home', detailRoute);
    app.use('/', signinRoute );
    app.use('/',homeRoute);
}

module.exports = route;