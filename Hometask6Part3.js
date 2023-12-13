function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

// Приклад виклику функції
let result = pow(2, 3);
console.log(result); // Виведе 8
