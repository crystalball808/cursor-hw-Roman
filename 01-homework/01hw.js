let a = 15.678;
let b = 123.965;
let c = 90.2345;
console.log('Максимальная цена: ' + Math.max(a, b, c));
console.log('Минимальная цена: ' + Math.min(a, b, c));
console.log('Суммарная стоимость товаров: ' + (a + b + c));
console.log('Суммарная стоимость без копеек: ' + (Math.trunc(a) + Math.trunc(b) + Math.trunc(c)));
console.log('Округлённая стоимость: ' + Math.round((a + b + c) / 100 ) * 100);
console.log('Сумма всех товаров - чётное число: ' + (Math.floor(a + b + c)%2 == 0));
console.log('Сдача при оплате 500 грн: ' + (500 - (a + b + c)));
console.log('Среднее значение цен: ' + ((a + b + c)/3).toFixed(2));
let randomDiscount = Math.trunc(Math.random(0,1)*100);
console.log(`Скидка: ${randomDiscount}%`);
console.log('Сумма со скидкой: ' + (((a + b + c)-((a + b + c) / 100 * randomDiscount)).toFixed(2)));
console.log('Чистая прибыль: ' + ((a + b + c) / 2 -((a + b + c) / 100 * randomDiscount)).toFixed(2));

console.log('Advanced');

console.log(`Максимальная цена: ${Math.max(a, b, c)}
Минимальная цена: ${Math.min(a, b, c)}
Суммарная стоимость товаров: ${a + b + c}
Суммарная стоимость без копеек: ${Math.trunc(a) + Math.trunc(b) + Math.trunc(c)}
Округлённая стоимость: ${Math.round((a + b + c) / 100 ) * 100}
Сумма всех товаров - чётное число: ${Math.floor(a + b + c)%2 == 0}
Сдача при оплате 500 грн: ${500 - (a + b + c)}
Среднее значение цен: ${((a + b + c)/3).toFixed(2)}
Скидка: ${randomDiscount}%
Сумма со скидкой: ${((a + b + c)-((a + b + c) / 100 * randomDiscount)).toFixed(2)}
Чистая прибыль: ${((a + b + c) / 2 -((a + b + c) / 100 * randomDiscount)).toFixed(2)}`);