'use strict';

module.exports.hello = async (event) => {
  const test = {
    "test": 123
  }

  return {
    statusCode: 200,
    body: JSON.stringify(test),
    headers: {
      'Content-Type': 'text/html',
    }
  };
};

