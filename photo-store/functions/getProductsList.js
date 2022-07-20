module.exports.handler = async (event) => {
  const {products} = require('../mock/all-procuts.js');

// console.log(products)
  return {
    statusCode: 200,
    body: JSON.stringify(products),
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
  };
};