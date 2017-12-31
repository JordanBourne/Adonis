var dynamoDb = require('../sdk/dynamoDb');
var tables = [{
		TableName: 'Programs',
		KeySchema: [
			{
				AttributeName: 'Id',
				KeyType: 'HASH'
			}
		],
		AttributeDefinitions: [
			{
				AttributeName: 'Id',
				AttributeType: 'S'
			}
		],
		ProvisionedThroughput:  {
			ReadCapacityUnits: 1,
			WriteCapacityUnits: 1
		}
	},
	{
		TableName: 'Users',
		KeySchema: [
			{
				AttributeName: 'Id',
				KeyType: 'HASH'
			}
		],
		AttributeDefinitions: [
			{
				AttributeName: 'Id',
				AttributeType: 'S'
			}
		],
		ProvisionedThroughput:  {
			ReadCapacityUnits: 1,
			WriteCapacityUnits: 1
		}
	}];

tables.forEach(function(table) {
	console.log(`Creating the ${table.TableName} table`);
	dynamoDb.createTable(table, function(err, data) {
		if (err) console.log(err); // an error occurred
		else console.log(data); // successful response
	});
})