import AWS = require('aws-sdk');
import uuid from 'uuid';
import Joi, {
  string,
  number,
  object
} from "joi";
import { ResponseDefaultType } from '../types/responseDefaultType';

const dynamoDb = new AWS.DynamoDB.DocumentClient();



const listNotes = (data: any, cb: (arg0: ResponseDefaultType) => void) => {

  // required param
  const rparam = {
    requestContext: data.requestContext
  }

  const schema = object({
    requestContext: object({
      identity: object({
        cognitoIdentityId: string().required()
      }).unknown(true)
    }).unknown(true)
  }).unknown(true);

  const valid = Joi.validate(rparam, schema); // validate params

  valid.then(val => {

    const queryParams = {
      TableName: process.env.NOTES_TABLE,
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": data.requestContext.identity.cognitoIdentityId
      }
    }

    const res: ResponseDefaultType = { status: 200, message: '' }; // set default value
    dynamoDb.query(queryParams, (error, result) => {

      if (error) {
        res.status = error.statusCode,
          res.message = error.message
      } else {
        res.status = 200;
        res.data = result.Items;
        res.message = "Successfully fetch note list";
      }

      cb(res);
    });
  }).catch(reason => {
    const response: ResponseDefaultType = {
      status: 400,
      message: reason
    }
    cb(response);
  });


}


export { listNotes }