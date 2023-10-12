const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const account = new Schema({
    username : {type: String},
    password : {type: String},
    isUser :{type: Boolean}
})

module.exports = mongoose.model("account", account);