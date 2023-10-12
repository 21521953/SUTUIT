
const job = require('../models/Job');
class detailController {
    // get /home/:_id
    show(req,res,next) {
        job.findOne({_id : req.params._id}).exec()
        .then(job => {
            res.render('container/detail.handlebars',job);
        })
        .catch(next);
    }

    test(req,res,next) {
        job.find({}).exec()
        .then(job => {
            res.render('container/assistance.handlebars',job);
        })
        .catch(next);
    }
}

module.exports = new detailController();