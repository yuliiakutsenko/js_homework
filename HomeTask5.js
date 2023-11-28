// розписала за параметрами конвертації, якщо окремо запускати код з "конвертація км", "конвертація годин", "конвертація кг" усе рахується, якщо вкажимо непрописаний параметр "мл" то видає "Невідома одиниця вимірювання".

// конвертація км
const unit = "км";
const amount = 10; 

function convertUnits(unit, amount) {
  let result;

  switch (unit) {
    case "км":
      result = `${amount} км це ${amount * 1000} м.`;
      break;
    default:
      result = "Невідома одиниця вимірювання.";
  }

  return result;
}
console.log(convertUnits(unit, amount));

// конвертація годин
const unit = "год";
const amount = 1; 

function convertUnits(unit, amount) {
  let result;

  switch (unit) {
    case "год":
      result = `${amount} год це ${amount * 60} хв.`;
      break;
    default:
      result = "Невідома одиниця вимірювання.";
  }

  return result;
}
console.log(convertUnits(unit, amount));

// конвертація кг
const unit = "кг"; 
const amount = 1; 

function convertUnits(unit, amount) {
  let result;

  switch (unit) {
    case "кг":
      result = `${amount} кг це ${amount * 1000} грм.`;
      break;
    default:
      result = "Невідома одиниця вимірювання.";
  }

  return result;
}
console.log(convertUnits(unit, amount));


// або можна якось так зробити - з'єднавши три case і вказати 3 параментри для конвертації, але перед запуском коду треба руками міняти const unit та const amount, щоб видало розрахунок тих данних яких вводимо

const unit = "км"; // підставляємо різні значення км, год, кг
const amount = 10; // кількість

function convertUnits(unit, amount) {
  let result;

  switch (unit) {
    case "км":
      result = `${amount} км це ${amount * 1000} м.`;
      break;
    case "год":
      result = `${amount} год це ${amount * 60} хв.`;
      break;
    case "кг":
      result = `${amount} кг це ${amount * 1000} грм.`;
      break;
    default:
      result = "Невідома одиниця вимірювання.";
  }

  return result;
}
console.log(convertUnits(unit, amount));