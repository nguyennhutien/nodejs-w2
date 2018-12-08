const fs = require('fs');
const numeral = require('numeral');
const { formatDistance } = require('date-fns');
const { vi } = require('date-fns/locale');

fs.readFile('./products.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const arrProductsList = JSON.parse(data);
  console.log(`Total number of products: ${arrProductsList.length}`);

  let productsCount = 0;
  arrProductsList.forEach(e => {
    productsCount++;
    const productsCountFormatted = productsCount.toString().padStart(4, '0');
    const priceFormatted = numeral(e.price).format('0,0');
    const dateUpdatedFormatted = formatDistance(new Date(e.dateUpdated), new Date(), { locale: vi });
    console.log(
      `${productsCountFormatted} - ${e.name} - ${priceFormatted}VND - Cập nhật cách đây: ${dateUpdatedFormatted}`
    );
  });
});

// test another way
// const { readToObj } = require('./read-file');
// const arrProductsList = readToObj();
// console.log(arrProductsList);
// console.log(`Total number of products: ${arrProductsList.length}`);

// let productsCount = 0;
// arrProductsList.forEach(e => {
//   productsCount++;
//   const productsCountFormatted = productsCount.toString().padStart(4, '0');
//   const priceFormatted = numeral(e.price).format('0,0');
//   const dateUpdatedFormatted = formatDistance(new Date(e.dateUpdated), new Date(), { locale: vi });
//   console.log(
//     `${productsCountFormatted} - ${e.name} - ${priceFormatted}VND - Cập nhật cách đây: ${dateUpdatedFormatted}`
//   );
// });
