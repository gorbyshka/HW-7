// Перваяя часть 

const firstQuestion = prompt('Введите год рождения?');
const secondQuestion = prompt('В каком городе вы живете?');
const thirdQuestion = prompt('Какой ваш любимый вид спорта? ');

alert('Ваш год рождения' + ' :' + ' ' + firstQuestion + `
Вы живете в городе` + ' :' + ' ' + secondQuestion + `
Ваш любимый вид спорта` + ' :' + ' ' + thirdQuestion);

if (secondQuestion === 'Киев') {
    alert('Вы живете в столице Украины');
} else if (secondQuestion === 'Вашингтон') {
    alert('Вы живете в столице США');
} else if (secondQuestion === 'Лондон') {
    alert('Вы живете в столице Франции');
} else if (secondQuestion) {
} else {
    alert('Жаль что вы не захотели вводить свой город');
}

// Вторая часть 

if (thirdQuestion === 'Футбол') {
    alert('Круто! Хочешь стать как Леонель Месси? ');
} else if (thirdQuestion === 'Баскетбол') {
    alert('Круто! Хочешь стать как Майкл Джордан?');
} else if (thirdQuestion === 'Большой тенис') {
    alert('Круто! Хочешь стать как Новак Джокавич?');
} else if (thirdQuestion) {
} else {
    alert('Жаль что ты не захотел ввести вид спорта');
}

if (firstQuestion) {
    alert('Ух... Какой ты взрослый))');
} else {
    alert('Жаль что ты не захотел ввести дату своего рождения');
}