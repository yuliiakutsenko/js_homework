function checkProbabilityTheory(count) {
  // Ініціалізація лічильників парних та не парних чисел
  let evenCount = 0;
  let oddCount = 0;

  // Генерація та аналіз випадкових чисел
  for (let i = 0; i < count; i++) {
    // Генерація випадкового числа в діапазоні від 100 до 1000
    const randomNum = Math.floor(Math.random() * (1001 - 100) + 100);

    // Підрахунок парних та не парних чисел
    if (randomNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // Розрахунок відсоткового співвідношення парних до не парних чисел
  const percentageEven = (evenCount / count) * 100;
  const percentageOdd = (oddCount / count) * 100;

  // Виведення інформації
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Не парних чисел: ${oddCount}`);
  console.log(`Відсоток парних до не парних: ${percentageEven.toFixed(2)}% : ${percentageOdd.toFixed(2)}%`);
}

// Приклад використання:
checkProbabilityTheory(1000);
