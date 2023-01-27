"use strict";

module.exports.hello = async (event) => {
  //codigo
  
  return {
    status: 200,
    body: JSON.stringify(
      {
        message: "Hola mundo",
        input: event,
      },
      null,
      2
    ),
  };
};
