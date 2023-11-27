let yearInput, year, wordForm;

while (true) {
    yearInput = prompt("Введіть кількість років:");
    year = parseInt(yearInput, 10);

    if (year >= 0 && year === parseInt(yearInput, 10)) {
        break;
    } else {
        alert("Будь ласка, введіть коректне, не від'ємне число.");
    }
}

function getCorrectWordForm(year) {
    if (year % 10 === 1 && year % 100 !== 11) {
        return "рік";
    } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
        return "роки";
    } else {
        return "років";
    }
}

wordForm = getCorrectWordForm(year);
alert(`${year} ${wordForm}`);