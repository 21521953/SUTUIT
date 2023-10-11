const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.Promise = require('bluebird');

mongoose.plugin(slug);
const linhvuc = new Schema({
    _id: {type : Schema.ObjectId},
    TenLinhVuc: {type: String}
})

module.exports = mongoose.model("Linhvuc", linhvuc);
