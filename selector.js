'use strict'

function getAccount(conn, accountId) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT Id, Name FROM Account WHERE Id = '${accountId}'`, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res.records);
            }
        });
    });
}

function getAccounts(conn) {
    return new Promise((resolve, reject) => {
        conn.query('SELECT Id, Name FROM Account', function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res.records);
            }
        });
    });
}

function insertAccounts(conn, accounts) {
    return new Promise((resolve, reject) => {
        conn.sobject("Account").create(accounts, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(getSuccessRecords(res));
            }
        });
    });
}

function updateAccounts(conn, accounts) {
    return new Promise((resolve, reject) => {
        conn.sobject("Account").update(accounts, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(getSuccessRecords(res));
            }
        });
    });
}

function deleteAccounts(conn, accountIds) {
    return new Promise((resolve, reject) => {
        conn.sobject("Account").del(accountIds, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(getSuccessRecords(res));
            }
        });
    });
}

function getSuccessRecords (records) {
    var successRecords = [], i;
 
    for (i=0; i < records.length; i++) {
        if (records[i].success) {
            successRecords.push(records[i]);
        }
    }

    return successRecords;
}

module.exports = {
    getAccount,
    getAccounts,
    insertAccounts,
    updateAccounts,
    deleteAccounts
};