const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.Promise = require('bluebird');
const cty = require('./Cty');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const job = new Schema ({
    _id: {type : Schema.ObjectId},
    LinhVuc : {type: Schema.Types.ObjectId},
    Position : {type: String},
    MoTa : {type: String},
    YeuCau : {type: String},
    Benefit : {type : String},
    Luong : {type: String},
    Time : {type: String},
    TenCongTy : {type: String},
    CongTyImg : {type: String},
    GioiThieuCty : {type: String},
    DiaChi : {type: String}
})

module.exports = mongoose.model('job',job);
