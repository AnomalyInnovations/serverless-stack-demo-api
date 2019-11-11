import express = require('express');
import AWS = require('aws-sdk');
import uuid from 'uuid';
import { listNotes } from '../services/note';
const dynamoDb = new AWS.DynamoDB.DocumentClient();


const list = (req: any, res: express.Response) => {
  listNotes(req, (result) => {
    res.status(result.status).json(result);
  })
}

export { list }