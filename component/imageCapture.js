function captureTable() {
    // Вибрати ваш елемент таблиці
    const tableElement = document.getElementById('table');
  
    // Викликати html2canvas для створення зображення
    html2canvas(tableElement).then(canvas => {
      // Отримати зображення у вигляді base64-рядка
      const imgData = canvas.toDataURL('image/png');
  
      // Створити посилання для завантаження зображення
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = 'table_image.png';
  
      // Додати посилання до DOM та автоматично спрацювати клік на нього для завантаження
      document.body.appendChild(downloadLink);
      downloadLink.click();
  
      // Видалити посилання з DOM (не обов'язково, але чистий підхід)
      document.body.removeChild(downloadLink);
    });
  }
  