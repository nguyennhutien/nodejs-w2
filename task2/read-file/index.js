const fs = require('fs');
const path = require('path');

readToObj = () => {
  fs.readFile(`${path.resolve('.', 'products.json')}`, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return JSON.parse(data);
  });
};

exports.readToObj = readToObj;
