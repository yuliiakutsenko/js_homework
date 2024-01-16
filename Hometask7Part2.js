function pad(str, char, len, addToStart) {
  // Перевірка, чи char є рядком з одним символом
  if (typeof char !== 'string' || char.length !== 1) {
    console.error("Другий аргумент має бути рядком із одним символом.");
    return str;
  }

  // Перевірка, чи len є додатнім числом
  if (typeof len !== 'number' || len <= 0) {
    console.error("Третій аргумент має бути додатнім числом.");
    return str;
  }

  // Визначення напрямку (до початку чи до кінця)
  if (addToStart) {
    // Додавання символів до початку рядка
    while (str.length < len) {
      str = char + str;
    }
  } else {
    // Додавання символів до кінця рядка
    while (str.length < len) {
      str = str + char;
    }
  }

  return str;
}

// Приклад використання:
console.log(pad('qwerty', '+', 10, true));   // "+++++qwerty"
console.log(pad('qwerty', '+', 10, false));  // "qwerty+++++"
console.log(pad('qwerty', '+', 5, true));    // "qwerty"
console.log(pad('qwerty', '+', 3, false));   // "qwerty"