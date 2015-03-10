var each = Array.prototype.forEach;

function switchDetail(level) {
  document.body.classList.remove('show-detail-1', 'show-detail-2', 'show-detail-3', 'show-detail-4', 'show-detail-5');
  document.body.classList.add('show-detail-' + level);

  if (typeof window.ga !== "undefined") {
    ga('send', 'event', 'detail', 'switch', level /* as label, not value */);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  FastClick.attach(document.body);

  each.call(document.getElementsByClassName('detail-button'), function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      switchDetail(e.target.getAttribute('data-level'));
    });
  });

  each.call(document.getElementsByClassName('detail-scrubber'), function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      var current = parseInt(document.body.className.replace(/.*show-detail-(\d+).*/, '$1'), 10);
      var difference = parseInt(e.target.getAttribute('data-direction'), 10);
      switchDetail(Math.max(1, Math.min(4, current + difference)));
    });
  });

  document.querySelector('.powerline').addEventListener('click', function(e) {
    var expando = document.querySelector('.powerline-expando');

    expando.style.display = expando.style.display == 'block' ? 'none' : 'block';
    requestAnimationFrame(function() {
      expando.style.height = expando.style.display == 'block' ? expando.querySelector('iframe').height : 0;
    })
  });

});