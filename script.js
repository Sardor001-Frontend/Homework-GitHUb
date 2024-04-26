let name =  'Alex';
let money = 10000;
let account = 7777;
const first = prompt ('Как вас зовут?');
if (first === name) {
}
else {
    alert ('Пользователь не найден , досвидули ' +  first)
}

const second = prompt ('Номер счета?');
if (second == account) {
}
else {
    alert ('Пользователь не найден , досвидули '  + first)
}
const therd = prompt ('Сколько обналичить?');
if (therd < money) {
    alert ('Все отлично')
}
else {
    alert ('Недостаточно средств')
}


     
    