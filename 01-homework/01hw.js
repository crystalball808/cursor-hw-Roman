let a = 15.678;
let b = 123.965;
let c = 90.2345;
console.log('Максимальная цена: ' + Math.max(a, b, c));
console.log('Минимальная цена: ' + Math.min(a, b, c));
console.log('Суммарная стоимость товаров: ' + (a + b + c));
console.log('Суммарная стоимость без копеек: ' + (Math.floor(a) + Math.floor(b) + Math.floor(c)));
console.log('Округлённая стоимость: ' + Math.round((a + b + c) / 100 ) * 100);
if (Math.floor(a + b + c)%2 == 0){
	console.log('Сумма всех товаров - чётное число');
}
else if (Math.floor(a + b + c)%2 == 1){
	console.log('Сумма всех товаров - нечётное число');
}
console.log('Сдача при оплате 500 грн: ' + (500 - (a + b + c)));
console.log('Среднее значение цен: ' + ((a + b + c)/3).toFixed(2));
let randomDiscount = Math.floor(Math.random(0,1)*100);
console.log(`Скидка: ${randomDiscount}%`);
console.log('Сумма со скидкой: ' + (((a + b + c)-((a + b + c) / 100 * randomDiscount)).toFixed(2)));
console.log('Чистая прибыль: ' + ((a + b + c) / 2 -((a + b + c) / 100 * randomDiscount)).toFixed(2));