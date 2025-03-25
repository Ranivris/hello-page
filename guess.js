(function main() {
  const answer = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  // 엔터 키로 실행되도록 이벤트 등록
  document.getElementById("guessInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkGuess();
  });

  // 전역 함수 등록 (HTML 버튼과 연결됨)
  window.checkGuess = function () {
    const input = document.getElementById("guessInput");
    const guess = parseInt(input.value);
    if (isNaN(guess)) return;

    attempts++;

    const logItem = document.createElement("li");

    if (guess > answer) {
      logItem.textContent = `#${attempts} → ${guess}, 큰 수`;
    } else if (guess < answer) {
      logItem.textContent = `#${attempts} → ${guess}, 작은 수`;
    } else {
      logItem.textContent = `#${attempts} 맞 춘 듯?`;
    }

    document.getElementById("logList").appendChild(logItem);

    document.getElementById("resultMessage").textContent = (guess === answer)
      ? `정답입니다! 🎉 ${attempts}번 만에 맞췄어요!`
      : '';

    document.getElementById("attempts").textContent = `시도 횟수: ${attempts}`;

    input.value = '';
    input.focus();
  };
})();
