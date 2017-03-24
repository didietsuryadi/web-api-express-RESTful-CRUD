var express = require('express');
var router = express.Router();
var controller = require('../controllers/memoController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('use /create, /read, /update, /delete');
});

router.get('/memo', controller.readMemos)
router.get('/memo/:id', controller.readMemo)
router.post('/memo', controller.createMemo)
router.put('/memo/:id', controller.updateMemo)
router.delete('/memo/:id', controller.deleteMemo)

module.exports = router;
