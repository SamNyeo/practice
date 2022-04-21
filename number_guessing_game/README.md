
>MDN 공식문서 JavaScript 가이드에서<br>
숫자맞추기 예시를 보고 간단하게 풀어보았다.<br>

<br>

### ERROR LIST
- $input.value가 string으로 저장됨<br>
  - `Number($input.value)`
or
`+$input.value`

<br>

- 버튼 클릭시 입력된 input 값이 0으로 저장됨<br>
  - 변수에 값을 저장하는 input 이벤트보다 `$input.value=''`로 초기화하는 버튼 이벤트가 먼저 실행되고 있었음