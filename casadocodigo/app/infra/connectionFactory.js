var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'user',
        database : 'casacodigo'
    });

};

module.exports = function(){
    return createDBConnection;
}