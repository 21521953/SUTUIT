const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.Promise = require('bluebird');

mongoose.plugin(slug);
const Cty = new Schema({
    _id: {type : Schema.ObjectId},
    TenCongTy : {type: String},
    CongTyImg : {type: String},
    GioiThieuCty : {type: String},
    DiaChi : {type: String},
})

module.exports = mongoose.model("Cty", Cty);
