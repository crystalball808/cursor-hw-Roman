const pricePen = 15.678;
const priceBook = 123.965;
const priceRuler = 90.2345;
const cash = 500;
const randomDiscount = Math.trunc(Math.random(0,1)*100);
const maxPrice = Math.max(pricePen, priceRuler, priceBook);
const minPrice = Math.min(pricePen, priceRuler, priceBook);
const totalCost = pricePen + priceRuler + priceBook;
const truncTotalCost = Math.trunc(pricePen) + Math.trunc(priceBook) + Math.trunc(priceRuler);
const roundedCost = Math.round(totalCost / 100 ) * 100;
const isEven = Math.floor(totalCost)%2 == 0;
const cashChange = Number((cash - totalCost).toFixed(2));
const average = Number((totalCost/3).toFixed(2));
const discAmount = totalCost / 100 * randomDiscount;
const costDiscount = Number((totalCost - discAmount).toFixed(2));
const netProfit = Number((totalCost / 2 - discAmount).toFixed(2));

console.log('Максимальная цена: ' + maxPrice);
console.log('Минимальная цена: ' + minPrice);
console.log('Суммарная стоимость товаров: ' + totalCost);
console.log('Суммарная стоимость без копеек: ' + truncTotalCost);
console.log('Округлённая стоимость: ' + roundedCost);
console.log('Сумма всех товаров - чётное число: ' + isEven);
console.log('Сдача при оплате 500 грн: ' + cashChange);
console.log('Среднее значение цен: ' + average);
console.log('Скидка: ' + randomDiscount + '%');
console.log('Сумма со скидкой: ' + costDiscount);
console.log('Чистая прибыль: ' + netProfit);

console.log('Advanced');

console.log(`Максимальная цена: ${maxPrice}
Минимальная цена: ${minPrice}
Суммарная стоимость товаров: ${totalCost}
Суммарная стоимость без копеек: ${truncTotalCost}
Округлённая стоимость: ${roundedCost}
Сумма всех товаров - чётное число: ${isEven}
Сдача при оплате 500 грн: ${cashChange}
Среднее значение цен: ${average}
Скидка: ${randomDiscount}%
Сумма со скидкой: ${costDiscount}
Чистая прибыль: ${netProfit}`);