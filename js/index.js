window.addEventListener('load', function() {
  var detailRange = document.getElementById('detail');

  detailRange.addEventListener('input', function(e) {
    document.body.classList.remove('show-detail-1', 'show-detail-2', 'show-detail-3', 'show-detail-4', 'show-detail-5');
    document.body.classList.add('show-detail-' + e.target.value);
  });
  detailRange.focus();
});