function sumOfNonMultiplesOfThree() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    console.log("Сума чисел від 1 до 100, які не кратні 3: " + sum);
}

// Виклик функції
sumOfNonMultiplesOfThree();
