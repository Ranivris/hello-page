const baseballAnswer = generateAnswer();
let tries = 0;

function generateAnswer() {
  const nums = [];
  while (nums.length < 3) {
    const n = Math.floor(Math.random() * 9) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums;
}

function checkBaseball() {
  const input = document.getElementById("baseballInput").value;
  if (!/^[1-9]{3}$/.test(input)) {
    alert("1~9 사이의 서로 다른 숫자 3자리를 입력하세요.");
    return;
  }

  const guess = input.split("").map(Number);
  const unique = new Set(guess);
  if (unique.size < 3) {
    alert("서로 다른 숫자를 입력해야 해요!");
    return;
  }

  tries++;
  let strike = 0;
  let ball = 0;

  guess.forEach((n, i) => {
    if (n === baseballAnswer[i]) strike++;
    else if (baseballAnswer.includes(n)) ball++;
  });

  const logItem = document.createElement("li");
  logItem.textContent = `#${tries} → ${input} : ${strike}S ${ball}B`;
  document.getElementById("baseballLog").appendChild(logItem);

  if (strike === 3) {
    document.getElementById("baseballResult").textContent = `🎉 정답입니다! ${tries}번 만에 맞췄어요!`;
    document.getElementById("baseballInput").disabled = true;
  } else {
    document.getElementById("baseballResult").textContent = `${strike} 스트라이크, ${ball} 볼`;
  }

  document.getElementById("baseballInput").value = '';
  document.getElementById("baseballInput").focus();
}
