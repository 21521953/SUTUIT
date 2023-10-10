const homeRoute = require('./homeRoute');
const signinRoute = require('./signinRoute');
const detailRoute = require('./detailRoute');

function route(app) {
    app.use('/home', detailRoute);
    app.use('/signpage', signinRoute );
    app.use('/',homeRoute);
}

module.exports = route;