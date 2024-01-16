function customIsNaN(value) {
  // Перевірка, чи переданий аргумент є числом
  if (typeof value !== 'number' && typeof value !== 'string') {
    return false;
  }

  // Перевірка, чи є рядок числом
  // Тут використовуємо регулярний вираз для перевірки, чи є рядок числом
  if (typeof value === 'string' && !/^\d+(\.\d+)?$/.test(value.trim())) {
    return false;
  }

  // Перевірка, чи є числове значення не NaN
  return value - value === 0;
}

// Приклад використання:
console.log(customIsNaN('abc'));      // true
console.log(customIsNaN('123'));      // false
console.log(customIsNaN(123));        // false
console.log(customIsNaN(NaN));        // true
console.log(customIsNaN(undefined));  // false