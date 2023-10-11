
const { query } = require('express');
const Job = require('../models/Job');
const linhvuc = require('../models/linhvuc');


const Page_size = 5;

class homeController {
    index(req,res,next) {
        var page = req.query.q;
        if(page) {
            page = parseInt(page);
            if(page <0) {
                page = 1;
            }
            var skipNumber = Page_size * ( page -1 );
            
            Job.find({}).skip(skipNumber).limit(Page_size).exec()
                .then (datas => {
                linhvuc.find({}).exec()
                    .then(linhvucs => {
                        Job.countDocuments({})
                        .then((total) => {
                            var tongSoPage = Math.ceil(total/Page_size);
                            datas = datas.map(Company => Company.toObject());
                            linhvucs = linhvucs.map(linhvuc => linhvuc.toObject());
                            res.render('home.handlebars',{
                                company : datas,
                                linhvuc : linhvucs,
                                tongSoPage : tongSoPage
                            })
                        })
                        .catch(next);
                    })
                    .catch(next);
                })
                .catch(next);
            } 
    }

    // //get /:
    filter(req, res,next) {
        res.json(req.query.q)
    }

}

module.exports = new homeController();