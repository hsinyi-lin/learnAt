var express = require('express');
var router = express.Router();
var id = "learnat001";
const member = require('./utility/member');
/* GET home page. */
router.get('/', function(req, res, next) {


  
  member.query(id).then(data => {
    res.render('member_update_no', {item:data});  //將資料傳給顯示頁面
  
  })
});

//匯出
module.exports = router;