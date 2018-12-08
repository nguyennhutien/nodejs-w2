const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');
const XLSX = require('xlsx');

fs.readFile(`${path.resolve(__dirname, '../task2/products.json')}`, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const arrProductsList = JSON.parse(data);
  arrProductsList.forEach(e => {
    e.updated = format(new Date(e.dateUpdated), 'MM/dd/yyyy');
    delete e.dateUpdated;
  });

  const jsonProductsList = JSON.stringify(arrProductsList, null, ' ');
  const arrProductKeys = Object.keys(arrProductsList[0]);

  console.log(jsonProductsList);

  // create 'worksheet' object from object
  const ws = XLSX.utils.json_to_sheet(jsonProductsList, { header: arrProductKeys });

  // Optional: config columns width (character length)
  ws['!cols'] = [{ width: 20 }, { width: 15 }, { width: 20 }, { width: 20 }, { width: 20 }];

  // create 'workbook' object (which contains multiple sheet)
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Products');

  // convert to Microsoft EXCEL workbook and write to a Buffer object
  const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

  fs.writeFileSync('./pub/test-write.xlsx', buf, { encoding: 'binary' });
});
