var dynamoDb = require('../sdk/dynamoDb');

dynamoDb.listTables(function(err, data) {
    if (err) console.log(err); // an error occurred
    else console.log(data); // successful response
});