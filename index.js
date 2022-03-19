// - Объявите две переменные: admin и user.
// - Запишите строку "Anna" в переменную user.
// - Скопируйте значение из переменной user в admin.
// - Выведите на экран значение admin, используя функцию alert (должна показать Anna).

let admin;
let user = "Anna";
admin = user;
alert (admin);

// Задача 2**: В уроке вы ознакомились с встроенными методами строки которые позволяют 
// получить срез строки или перевести строку в заглавный регистр. Используя эти 
// методы преобразуйте строку чтобы первая буква была заглавной.
// let user = 'ivan';
// let newUser = ??? // 'Ivan';

let userTask = "ivan";
let upString = userTask.toUpperCase ();
let firstLetterUser = upString [0];
let partUser = userTask.slice (1);
let newUser = firstLetterUser + partUser;
console.log (newUser);

// возможно можно так

let userAnother = "ivan";
let newUserAnother = userAnother[0].toUpperCase() + userAnother.slice (1);
console.log (newUserAnother);


// Задача 3: Тип данных String имеет и другие встроенные методы, используя 
// поиск в гугл найдите их и приведите примеры их использования


let string = "I love basketball";
console.log (string.indexOf("love"));
console.log (string.indexOf("v"));
console.log (string.indexOf("j"));
console.log (string.lastIndexOf("l"));
// // возвращает позицию, на которой располагается совпадение
console.log (string.includes("l"));
console.log (string.includes("j"));
// // возвращает true если есть совпадение, либо false, если нет.
console.log (string.substr(1,5));
// Возвращает часть строки


// **Задача 4**. Что выведется в следующем примере?:
let a = '';
let b = 'bbb';
let c = false;
let test1 = !b.length === c; // False (b и c имеют разные типы данных)
let test2 = a.length > b.length; // False (0 !> 3)
let test3 = !a.length && !b.length; // True (оператор и)
let test4 = a === c; // False (a и c имеют разные типы данных)



