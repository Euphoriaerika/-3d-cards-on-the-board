document.querySelectorAll('.btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
