'use strict';
const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  name: String,
});

const personModel = dynamoose.model('People', personSchema);

exports.handler = async (event) => {
  console.log('EVENT: ', event);
  try {
    const id = event.pathParameters.id;
    await personModel.delete(id);
    return { statusCode: 200, body: JSON.stringify({}) };
  } catch (error) {
    console.error('ERROR: ', error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }
};