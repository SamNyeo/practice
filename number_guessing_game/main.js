const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $inputNum = document.querySelector('.inputNum')
const $ment = document.querySelector('.ment')
const result = Math.floor((Math.random() * 100) + 1)
let order = 0
let num
let monitor = []

const onInput = function() {
  num = +$input.value;
}

const onClickButton = function() {
$inputNum.textContent += $input.value + ' '
  if (num == result) {
    alert('정답입니다!');
    let question = confirm('다시 하시겠습니까?')
    if (question == true) {
      location.reload()
    }
  } else {
    if (order < 9) {
      if (num < result) {
        $ment.textContent = 'Last guess was too low!'
      } else {
        $ment.textContent = 'Last guess was too high!'
      }
      order += 1;
      $input.value = '';
    } else {
      alert('기회를 모두 사용하셨습니다');
      let question = confirm('다시 시작하시겠습니까?')
      if (question == true) {
        location.reload()
      }
    }
  }
}

$button.addEventListener('click', onInput)
$button.addEventListener('click', onClickButton)
