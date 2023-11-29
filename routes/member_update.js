var express = require('express');
var router = express.Router();

//增加引用函式
const member = require('./utility/member');

//接收POST請求
router.post('/', function(req, res, next) {
    var id = req.body.id;   //取得產品編號

    var newData={
        id:id,                   //產品編號
        name: req.body.name,     //取得產品名稱
        birthday: req.body.birthday,
        address: req.body.address  //取得盤點日期
    } 
    
    member.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;