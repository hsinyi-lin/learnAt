'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');
//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(id){
    var result={};

    await sql('SELECT * FROM member WHERE id = $1', [id])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}

//----------------------------------
// 更新商品
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE member SET name=$1, birthday=$2, address=$3 WHERE id = $4', [newData.name, newData.birthday, newData.address, newData.id])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {query, update};