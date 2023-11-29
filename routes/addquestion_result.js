var express = require('express');
var router = express.Router();

//增加引用函式
const question = require('./utility/addquestion_result');

//接收POST請求
router.post('/', function(req, res, next) {
    var topic = req.body.topic;                  //取得產品編號
    var content = req.body.content;              //取得產品名稱

    // 建立一個新資料物件
    var newData={
        topic:topic,
        content:content
    } 
    
    question.add(newData).then(d => {
        if (d==0){
            res.render('addquestion_success');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;