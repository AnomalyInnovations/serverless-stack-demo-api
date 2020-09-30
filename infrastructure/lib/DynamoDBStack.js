import { CfnOutput } from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as sst from "@serverless-stack/resources";

export default class DynamoDBStack extends sst.Stack {

  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    const table = new dynamodb.Table(this, "Table", {
      tableName: app.logicalPrefixedName("table"),
      partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'noteId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    // Output values
    new CfnOutput(this, 'TableName', {
      exportName: app.logicalPrefixedName("TableName"),
      value: table.tableName,
    });
    new CfnOutput(this, 'TableArn', {
      exportName: app.logicalPrefixedName("TableArn"),
      value: table.tableArn,
    });
  }
}
