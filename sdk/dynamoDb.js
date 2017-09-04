var AWS = require('aws-sdk');

var dynamoDb = new AWS.DynamoDB({
	endpoint: new AWS.Endpoint('http://localhost:8000'),
	region: 'us-east-2' 
});

module.exports = dynamoDb;