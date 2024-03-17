let screenPrice = 2500
let percentage = 10

let titleProject = prompt('Название проекта?')
let screensValue = prompt('Укажите типы экранов')
let responsive = prompt('нужен ли респонсивный сайт')
let service1 = prompt('Какой сервис нужен?')
let servicePrice1 = prompt('Сколько это будет стоить?')
let service2 = prompt('Какой еще сервис тебе нужен?')
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?')
console.log (titleProject, screensValue, responsive, service1, servicePrice1, service2, servicePrice2);

let fullPrice = screenPrice + +servicePrice1 + +servicePrice2
console.log ('Полная стоиомсть =', fullPrice);

let servicePercentPrice = fullPrice * (percentage / 100)

if (fullPrice > 50000) {
    console.log ('Скидка =', fullPrice * (10 / 100));
} else if (fullPrice > 20000){
    console.log ('Скидка =', fullPrice * (5 / 100));
} else if (fullPrice > 0){
    console.log ('Скидка не предусмотрена');
} else {
    console.log ('Что-то пошло не так');
}

