// Перваяя часть 

const firstQuestion = prompt('Введите год рождения?');
const secondQuestion = prompt('В каком городе вы живете?');
const thirdQuestion = prompt('Какой ваш любимый вид спорта? ');

alert('Ваш год рождения' + ' :' + ' ' + firstQuestion + `
Вы живете в городе` + ' :' + ' ' + secondQuestion + `
Ваш любимый вид спорта` + ' :' + ' ' + thirdQuestion);

let result;

switch (secondQuestion) {
    case 'Киев':
        result = 'Вы живете в столице Украины';
        break;
    case 'Вашингтон':
        result = 'Вы живете в столице США';
        break;
    case 'Лондон':
        result = 'Вы живете в столице Франции';
        break;
    default:
        result = 'Жаль что вы не захотели вводить свой город';
}
alert(result);

// Вторая часть 

let secondResult;

switch (thirdQuestion) {
    case 'Футбол':
        secondResult = 'Круто! Хочешь стать как Леонель Месси? ';
        break;
    case 'Баскетбол':
        secondResult = 'Круто! Хочешь стать как Майкл Джордан?';
        break;
    case 'Большой тенис':
        secondResult = 'Круто! Хочешь стать как Новак Джокавич?';
        break;
    default:
        secondResult = 'Жаль что ты не захотел ввести вид спорта';
}

alert(secondResult);

let thirdResult;

switch (firstQuestion) {
    case null:
        thirdResult = 'Жаль что ты не захотел ввести дату своего рождения';
        break;
    default:
        thirdResult = 'Ух... Какой ты взрослый))';
}

alert(thirdResult);
