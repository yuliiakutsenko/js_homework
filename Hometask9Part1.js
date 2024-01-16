function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Генеруємо випадковий індекс в межах невідсортованої частини масиву
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Обмін елементів між поточним індексом та випадковим індексом
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
}

// Приклад використання:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Початковий масив:", arr);

myBlend(arr);
console.log("Перемішаний масив:", arr);