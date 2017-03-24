var Memo = require('../models/memo')

module.exports = {
  createMemo: function(req,res){
    Memo.create({
      memo: req.body.memo,
      completed: false
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateMemo: function(req,res){
    Memo.findOneAndUpdate({_id:req.params.id}, {
      memo: req.body.memo,
      updateAt: new Date()
    }, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteMemo: function(req,res){
    Memo.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readMemos: function(req,res){
    Memo.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readMemo: function(req,res){
    Memo.findOne({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  }
}
