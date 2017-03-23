import AWS from 'aws-sdk';

AWS.config.update({region:'us-east-1'});

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return new Promise((resolve, reject) => {
    dynamoDb[action](params, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    });
  });
}
