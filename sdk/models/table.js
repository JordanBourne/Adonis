const dynamoDb = require('../dynamoDb');
const vogels = require('vogels');

var joi = require('joi');

// function Table (params) {
// 	this.tableName = params.tableName;
// 	this.schema = params.schema
// } 

var TestTable = vogels.define('TestTable', {
	hashKey: 'id',
	schema: {
		id: Joi.string()
	}
})

vogels.createTables(function(err) {
  if (err) {
	console.log('Error creating tables: ', err);
  } else {
	console.log('Tables has been created');
  }
});