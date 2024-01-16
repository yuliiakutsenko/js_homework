var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

// Метод для обчислення та повернення загальної вартості послуг
services.price = function () {
  let total = 0;
  for (const serviceName in this) {
    if (typeof this[serviceName] === 'string' && serviceName !== 'price' && serviceName !== 'minPrice' && serviceName !== 'maxPrice') {
      total += parseInt(this[serviceName]);
    }
  }
  return total;
};

// Метод для повернення мінімальної вартості послуг
services.minPrice = function () {
  let min = Infinity;
  for (const serviceName in this) {
    if (typeof this[serviceName] === 'string' && serviceName !== 'price' && serviceName !== 'minPrice' && serviceName !== 'maxPrice') {
      const price = parseInt(this[serviceName]);
      if (price < min) {
        min = price;
      }
    }
  }
  return min;
};

// Метод для повернення максимальної вартості послуг
services.maxPrice = function () {
  let max = -Infinity;
  for (const serviceName in this) {
    if (typeof this[serviceName] === 'string' && serviceName !== 'price' && serviceName !== 'minPrice' && serviceName !== 'maxPrice') {
      const price = parseInt(this[serviceName]);
      if (price > max) {
        max = price;
      }
    }
  }
  return max;
};

// Приклад використання:
console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");
