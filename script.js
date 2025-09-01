let count = 0;
const countSpan = document.getElementById('count');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');

clickBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  countSpan.textContent = count;
});
