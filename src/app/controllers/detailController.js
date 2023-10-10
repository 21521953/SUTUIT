
const Company = require('../models/data');
class detailController {
    // get /home/:_id
    show(req,res,next) {
      Company.findOne({_id : req.params._id}).exec()
        .then(company => {
            res.json(company);
        })
        .catch(next);
    }
}

module.exports = new detailController();