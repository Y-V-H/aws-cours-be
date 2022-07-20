'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: {
      productName: "Canon",
      price: 760,
      currency: "usd"
    }
  };
};
