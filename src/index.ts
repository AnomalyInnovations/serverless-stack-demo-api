import serverless = require('serverless-http');
import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import dotenv = require('dotenv');
dotenv.config();


const app: express.Application = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* ROUTES */
import { noteRouter } from './routes/notes';

app.use('/notes', noteRouter);

module.exports.handler = serverless(app);