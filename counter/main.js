const $num = document.querySelector('.num');
const $dec = document.querySelector('.decrease');
const $reset = document.querySelector('.reset');
const $inc = document.querySelector('.increase')

$dec.addEventListener('click', () => $num.textContent -= 1);
$reset.addEventListener('click', () => $num.textContent = 0)
$inc.addEventListener('click', () => {
  let num = Number($num.textContent)
  num += 1;
  $num.textContent = num
})