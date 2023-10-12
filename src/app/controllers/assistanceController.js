const job = require('../models/Job');

class assistanceController {
    chat(req,res,next) {
        job.find({}).exec()
        .then(job => {
            res.render('container/assistance.handlebars',job);
        })
        .catch(next);
    }
}

module.exports = new assistanceController();