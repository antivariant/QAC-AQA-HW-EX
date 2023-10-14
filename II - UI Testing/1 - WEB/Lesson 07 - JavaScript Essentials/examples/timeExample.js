var localDate = new Date("2023-01-10T22:11:01"); //локальная дата GTM+2
var utcDate = new Date("2023-01-10T22:11:01Z");//UTC дата
// 1 - перевести из локальной даты в UTC и обратно
//2023-01-10T20:11:01.000Z 2023-01-10T22:11:01.000Z
console.log(localDate.toISOString(), utcDate.toISOString());
//Tue, 10 Jan 2023 20:11:01 GMT Tue, 10 Jan 2023 22:11:01 GMT
console.log(localDate.toUTCString(), utcDate.toUTCString());
//Tue Jan 10 2023 Wed Jan 11 2023
console.log(localDate.toDateString(), utcDate.toDateString());
// 2 - получить время выполнения операции
var time1 = Date.now();
var a = 1; for (let i = 1; i < 100000; i++) a += a ** i / 2 % 2;
console.log(Date.now() - time1);
// 3 - Добавление и вычитание времени к/из даты
var utcPlus11Min = new Date(localDate.getTime()+11*60*1000)
console.log(utcPlus11Min.toUTCString());//Tue, 10 Jan 2023 20:22:01 GMT
// 4 - Рассчитать количество дней между датами
var localDate1 = new Date("2023-01-13T22:11:01");
var days = (localDate1 - localDate)/1000/60/60/24;
console.log(days);