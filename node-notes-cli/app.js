const fs = require('fs');
const create = require('./create');
const less = require('./delete');
const update = require('./update');
const read = require('./read');

const operation = process.argv[2];

switch(operation) {
  case 'create':
    create();
    break;
  case 'delete':
    less();
    break;
  case 'update':
    update();
    break;
  case 'read':
    read();
    break;
}
