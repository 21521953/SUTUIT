const { query } = require('express');
const Company = require('../models/data');

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
            
            Company.find({}).skip(skipNumber).limit(Page_size).exec()
                .then (datas => {
                    Company.countDocuments({})
                        .then((total) => {
                            var tongSoPage = Math.ceil(total/Page_size);
                            datas = datas.map(Company => Company.toObject());
                           
                            res.render('home.handlebars',{
                                company : datas,
                                tongSoPage : tongSoPage
                            })
                        })
                
                })
                .catch(next);
            }
        // } else {
        //     Company.find({}).exec()
        //         .then(companies => {
        //             res.json(companies);
        //         })
        //         .catch(next);
        // }
     
    }
}

module.exports = new homeController();