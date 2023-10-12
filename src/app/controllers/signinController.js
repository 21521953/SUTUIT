const account = require('../models/account');

class signinController {
    sigin(req,res,next) {
       account.find({}).exec()
        .then(user => {
            res.render('container/signinpage.handlebars',user);
        })
    }
}

module.exports = new signinController();