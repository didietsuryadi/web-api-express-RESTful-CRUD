var app = new Vue({
  el:'#app',
  data:{
    memos : [],
    memo : '',
    updateMemo : '',
    updateId: ''
  },
  methods:{
    getTodos: function () {
      axios.get('http://localhost:3000/api/memo').then(function (result) {
        app.memos = result.data
      })
    },
    deleteMemo: function (id) {
      axios.delete('http://localhost:3000/api/memo/'+id).then(function (result) {
        alert(`memo ${result.data.memo} has been deleted`)
        app.getTodos()
      })
    },
    update: function (id) {
      axios.put('http://localhost:3000/api/memo/'+id,{
        memo: app.updateMemo
      }).then(function (result) {
        alert(`memo ${result.data.memo} has been updated`)
        app.getTodos()
      })
    },
    getDatabyId: function (id) {
      axios.get('http://localhost:3000/api/memo/'+id).then(function (result) {
        app.updateMemo = result.data.memo
        app.updateId = result.data._id
      })
    },
    create: function (e) {
      e.preventDefault()
      axios.post('http://localhost:3000/api/memo/',{
        memo: app.memo
      }).then(function (result) {
        app.memos.push(result.data)
        app.memo = ''
        app.getTodos()
      })
    }
  }
})

app.getTodos()
