var mysql = require('mysql');

var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: '3306',
    database: 'test'
});

conn.connect(function (err) {
    if (err) throw err;
    console.log('connect success');
});





conn.query('select * from `student`', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[0].name);
});

// conn.query("insert into `student` set `student_id`=8,`name`='ddd',`major`='eee'", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });

// conn.query('select * from student', function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log(result[3].name);
// });

conn.query('update `student` set `major`="test" where `student_id`=6', function (err, result) {
    if (err) throw err;
    console.log(result);
});

conn.query('select * from student', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[3].name);
});












conn.end(function (err) {
    if (err) throw err;
    console.log('connect end');
})


