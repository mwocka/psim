"use strict";


const sql = require('mssql');

const config = {
    user: 'api',
    password: 'password',
    server: 'localhost',
    database: 'DB_projekt',
    options: {
        encrypt: true//if Windows Azure
    }
}

sql.connect(config).catch(function(err) {
    console.error(err);//connection error checks
});

module.exports = sql;