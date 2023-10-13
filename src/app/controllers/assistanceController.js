
const job = require('../models/Job');

class assistanceController {
    chat(req,res,next) {
        job.find({}).exec()
        .then(job => {
            res.render('container/assistance.handlebars',job);
        })
        .catch(next);
    }
    mesage(req,res,next) {
        const {msg} = req.query;
        const io = res.io;
        io.emit('chat message server', {msg});
    }
}

module.exports = new assistanceController();