/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

'use strcit';

const conf = require('./conf');

let construct_request_opts = () => {

};

// 
let request_handler = (resp) => {

  let chunk_data;
  resp.on('data', (chunk) => chunk_data += chunk);

  

};

http.request(construct_request_opts(conf), request_handler);