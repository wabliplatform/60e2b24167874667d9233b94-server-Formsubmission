
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questSchema = new Schema({
Underscoreid:String , 


paperD:String , 


lcodetools:String 



})

module.exports = {
  Quest : mongoose.model('quest', questSchema),
}

