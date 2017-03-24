`use strict`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var memoSchema = new Schema({
  memo: {type: String, required:true,unique: true}
},
  {
    timestamps: true
  })

var Memo = mongoose.model('Memo', memoSchema)

module.exports = Memo
