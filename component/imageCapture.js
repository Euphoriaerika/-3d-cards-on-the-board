function captureTable() {
  // Вибрати ваш елемент таблиці
  var tableElement = document.getElementById("table");

  // Викликати Dom-to-Image для створення зображення
  domtoimage.toPng(tableElement)
    .then(function (dataUrl) {
      // Отримати зображення у вигляді base64-рядка
      const imgData = dataUrl;

      // Створити посилання для завантаження зображення
      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = "table_image.png";
      downloadLink.click(); // Спрацьовує клік на посилання для завантаження
    })
    .catch(function (error) {
      console.error('Помилка Dom-to-Image:', error);
    });
}
