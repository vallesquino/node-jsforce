'use strict'
var selector = require('./selector');

async function getAccount (req, res) {
	var conn = req.jsforceConn,
		accounts;

	try {
		accounts = await selector.getAccount(conn, req.params.id);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}

async function getAccounts (req, res) {
	var conn = req.jsforceConn,
		accounts;

	try {
		accounts = await selector.getAccounts(conn);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}

async function insertAccounts (req, res) {
	var conn = req.jsforceConn,
		accounts;

	try {
		accounts = await selector.insertAccounts(conn, req.body.accounts);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}

async function updateAccounts (req, res) {
	var conn = req.jsforceConn,
		accounts;

	try {
		accounts = await selector.updateAccounts(conn, req.body.accounts);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}

async function deleteAccounts (req, res) {
	var conn = req.jsforceConn,
		accounts;

	try {
		accounts = await selector.deleteAccounts(conn, req.body.accountIds);
		res.status(200).send(accounts);
	} catch (error) {
		res.status(300).send(error);
	}
}


module.exports = {
	getAccount,
	getAccounts,
	insertAccounts,
	updateAccounts,
	deleteAccounts
};
