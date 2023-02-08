'use strict';

const {
  Errors: { BadRequestError },
} = require('finale-rest');

const {
  API: {
    HEADERS: { X_SLUG },
    SLUGS: { MYSELF },
  },
} = require('../../config');

module.exports = (req, res, context) => {
  
  const userSlug = req.params.slug;
  let authHeadToken = '';
  let slugEncoded = ''

  if(userSlug === MYSELF){
    authHeadToken = req.get(X_SLUG)
  } 
  console.log('autTk', authHeadToken);
  
  slugEncoded =  Buffer.from(userSlug).toString('base64');

  console.log('encdSlug', slugEncoded);

  if(authHeadToken !== slugEncoded){
    res.status(400).json({ message: 'Erro' })
  }
  
  return context.continue;
};
