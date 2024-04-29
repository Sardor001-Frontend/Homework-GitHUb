///Первое задание
let str = 'aaa@bbb@ccc';
console.log(str.replaceAll('@', '!'));
/// Второе задание
const str2 = 'HELLOWORLD';
const changing = str2.slice(0, 1).toUpperCase() + str2.slice(1).toLowerCase();
console.log(changing);
///Третье задание
let str3 = 'Hello, it is HTML';
console.log(str3.replace('HTML', 'not JS'));
///Четвертое задание
const str4 = 'alex';
const changing2 = str4.slice(0, 1).toUpperCase() + str4.slice(1);
console.log(changing2);
///Пятое задание
const str5 = Math.round(Math.random() * (1000 - 1 + 1) + 1);
console.log(str5);
///Шестое задание 
let str6 = 'Lex Lutter has a big suit'
console.log(str6.replace('Lex Lutter has a big suit', 'ALex'));