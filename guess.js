const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const guess = parseInt(input.value);
  if (isNaN(guess)) return;

  attempts++;
  let message = '';

  if (guess > answer) {
    message = '너무 커요!';
  } else if (guess < answer) {
    message = '너무 작아요!';
  } else {
    message = `정답입니다! 🎉 ${attempts}번 만에 맞췄어요!`;
  }

  document.getElementById("resultMessage").textContent = message;
  document.getElementById("attempts").textContent = `시도 횟수: ${attempts}`;

  const logItem = document.createElement("li");

  if (guess > answer) {
     logItem.textContent = `#${attempts} → ${guess}, 큰 수`;
  }
  else if (guess > answer) {
     logItem.textContent = `#${attempts} → ${guess}, 작은 수`;
  }
  else{
     logItem.textContent = `#${attempts} 맞 춘 듯?`;
  }
  
  document.getElementById("logList").appendChild(logItem);

  input.value = '';
  input.focus();
}
