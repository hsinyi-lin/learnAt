var express = require('express');
var router = express.Router();

//增加引用函式
const answer = require('./utility/addanswer_result');

//接收POST請求
router.post('/', function(req, res, next) {
    var queno = req.body.queno;          //取得產品名稱
    var answer = req.body.answer;                  //取得產品編號

    // 建立一個新資料物件
    var newData={
        queno:queno,
        answer:answer
    } 
    
    answer.add(newData).then(d => {
        if (d==0){
            res.render('addanswer_success');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;