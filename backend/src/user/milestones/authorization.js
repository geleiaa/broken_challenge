'use strict';

const {
  Errors: { ForbiddenError },
} = require('finale-rest');

const {
  API: {
    KEY,
    HEADERS: { X_API_KEY },
  },
} = require('../../config');

module.exports = (req, res, context) => {
  const apiKey = req.get(X_API_KEY)
  
  if(apiKey !== KEY){
    res.status(400).json({ message: 'Error'})
  } 

  return context.continue;
};
