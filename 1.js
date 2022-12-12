// Перваяя часть 

const firstQuestion = prompt('Введите год рождения?');
const secondQuestion = prompt('В каком городе вы живете?');
const thirdQuestion = prompt('Какой ваш любимый вид спорта? ');

alert('Ваш год рождения' + ' :' + ' ' + firstQuestion + `
Вы живете в городе` + ' :' + ' ' + secondQuestion + `
Ваш любимый вид спорта` + ' :' + ' ' + thirdQuestion);

switch (secondQuestion) {
    case 'Киев':
        alert('Вы живете в столице Украины');
        break;
    case 'Вашингтон':
        alert('Вы живете в столице США');
        break;
    case 'Лондон':
        alert('Вы живете в столице Франции');
        break;
    default:
        alert('Жаль что вы не захотели вводить свой город');
}

// Вторая часть 

switch (thirdQuestion) {
    case 'Футбол':
        alert('Круто! Хочешь стать как Леонель Месси? ');
        break;
    case 'Баскетбол':
        alert('Круто! Хочешь стать как Майкл Джордан?');
        break;
    case 'Большой тенис':
        alert('Круто! Хочешь стать как Новак Джокавич?');
        break;
    default:
        alert('Жаль что ты не захотел ввести вид спорта');
}

switch (firstQuestion) {
     case null:
        alert('Жаль что ты не захотел ввести дату своего рождения');
        break;
        default:
            alert('Ух... Какой ты взрослый))');
        }

