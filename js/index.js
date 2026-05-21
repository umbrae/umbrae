const MIN_LEVEL = 1;
const MAX_LEVEL = 4;
let currentLevel = 1;

function switchDetail(level) {
  const next = Math.max(MIN_LEVEL, Math.min(MAX_LEVEL, Number(level)));
  document.body.classList.remove(
    'show-detail-1',
    'show-detail-2',
    'show-detail-3',
    'show-detail-4',
  );
  document.body.classList.add(`show-detail-${next}`);
  currentLevel = next;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.detail-button').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      switchDetail(e.currentTarget.dataset.level);
    });
  });

  document.querySelectorAll('.detail-scrubber').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const direction = Number(e.currentTarget.dataset.direction);
      switchDetail(currentLevel + direction);
    });
  });
});
