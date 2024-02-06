// Add an event listener to each element with the class 'btn'
document.querySelectorAll('.btn').forEach(function(btn) {
  // Toggle the 'active' class when a button is clicked
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
