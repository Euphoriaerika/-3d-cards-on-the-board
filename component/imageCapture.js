function captureTable() {
  // Select your table element
  var tableElement = document.getElementById("table");

  // Call Dom-to-Image to create an image
  domtoimage.toPng(tableElement)
    .then(function (dataUrl) {
      // Get the image as a base64 string
      const imgData = dataUrl;

      // Create a link to download the image
      const downloadLink = document.createElement("a");
      downloadLink.href = imgData;
      downloadLink.download = "my_prediction.png";
      downloadLink.click(); // Triggers a click on the link to initiate the download
    })
    .catch(function (error) {
      console.error('Dom-to-Image Error:', error);
    });
}
