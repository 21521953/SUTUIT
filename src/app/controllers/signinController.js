const account = require('../models/account');

class signinController {
    sigin(req,res,next) {
        res.send('sign in page');
    }
}

module.exports = new signinController();