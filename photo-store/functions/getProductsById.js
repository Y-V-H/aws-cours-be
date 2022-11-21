module.exports.handler = async (event) => {
  const { id } = event.pathParameters;
  const {products} = require('../mock/all-procuts.js');

  // console.log(typeof(products), "products")
  try{
    let result = products.filter((el) => {
      return el.id === id
    })

    if(!result.length) {
      result = {
        error: `Product with ID ${id} not found`
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      }
    }
  } catch(e) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: `Failed to load product with ID ${id}`
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      }
    }
  }
}