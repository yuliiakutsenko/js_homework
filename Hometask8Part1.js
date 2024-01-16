const myObject = {
  name: 'John Doe',
  age: 25,
  city: 'Example City',

  getInfo: function () {
    let info = '';
    for (const key in this) {
      // Перевірка, чи ключ не є функцією (методом)
      if (typeof this[key] !== 'function') {
        info += `${key}: ${this[key]}\n`;
      }
    }
    console.log(info);
  },
};

// Виводимо інформацію про об'єкт
myObject.getInfo();

// Додаємо нову властивість
myObject.newProperty = 'Нова властивість!';

// Виводимо інформацію про об'єкт з новою властивістю
myObject.getInfo();