import AWS from "./aws-sdk";
import config from "../config";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export function call(action, params) {
  // Parameterize table names with stage name
  return dynamoDb[action]({
    ...params,
    TableName: `${config.resourcesStage}-${params.TableName}`
  }).promise();
}
