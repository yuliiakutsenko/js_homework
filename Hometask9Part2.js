function findValueByKey(companyName, companyObj) {
  // Перевірка, чи існує об'єкт та чи є в ньому властивість "name"
  if (companyObj && companyObj.name) {
    // Порівняння імені з поточним об'єктом
    if (companyObj.name === companyName) {
      console.log("Знайдено інформацію про компанію:", companyObj);
      return;
    }
  }

  // Перевірка, чи є властивість "clients" та чи є масивом
  if (companyObj && companyObj.clients && Array.isArray(companyObj.clients)) {
    // Рекурсивний виклик для кожного клієнта
    for (const client of companyObj.clients) {
      findValueByKey(companyName, client);
    }
  }
  
  // Перевірка, чи є властивість "partners" та чи є масивом
  if (companyObj && companyObj.partners && Array.isArray(companyObj.partners)) {
    // Рекурсивний виклик для кожного партнера
    for (const partner of companyObj.partners) {
      findValueByKey(companyName, partner);
    }
  }
}

// Приклад використання:
findValueByKey('Клієнт 1.2.3', company);
