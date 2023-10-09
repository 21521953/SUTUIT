const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const data = new Schema ({
    CompanyID : {type: Schema.Types.ObjectId},
    Company : {type: String},
    Title : {type: String},
    Location : {type: String},
    JobDescription : {type : String},
    RequiredQual : {type: String},
    Salary : {type: Number},
    ApplicationP : {type:String},
    Company_img :{type:String}
})

module.exports = mongoose.model('Component',data);