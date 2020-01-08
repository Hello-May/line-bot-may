const mysql = require('mysql');

const sql = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bbc0599e0bd410',
    password: '36b45c49',
    port: '3306',
    database: 'heroku_4937b744ad5d721'
});

//連線
function connect() {
    sql.connect(function (err) {
        if (err) throw err;
        console.log('connect success');
    });
};

//結束連線
function end() {
    sql.end(function (err) {
        if (err) throw err;
        console.log('connect end');
    })
};

//查詢
function search(tableName) {
    sql.query('select * from ' + tableName, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // console.log(result[0].name);
    });
};

const testName = (tableName) => {
    sql.query('select * from ' + tableName, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // console.log(result[0].name);
    });
};

//插入
// function insert(data) {
//     conn.query("insert into `student` set `student_id`=8,`name`='ddd',`major`='eee'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// };


//更新
// function insert(data) {
// conn.query('update `student` set `major`="test" where `student_id`=6', function (err, result) {
//     if (err) throw err;
//     console.log(result);
// });
// };


//刪除
// function insert(data) {
// conn.query('delete from `student` where `student_id`=8', function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });
// };

//連線池

module.exports = {
    search,
    testName,
    sql
}
