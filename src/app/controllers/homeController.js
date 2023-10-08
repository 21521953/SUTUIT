const Company = require('../models/company');


class homeController {
    index(req,res,next) {
        res.render('home.handlebars');
    }
}

module.exports = new homeController();