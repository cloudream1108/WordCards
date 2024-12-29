const wordCard = document.getElementById("word-card");
const counter = document.getElementById("counter");
const chinese = document.getElementById("chinese");
const hint = document.getElementById("hint");
const ans = document.getElementById("answer");
const result = document.getElementById("result");
const startButton = document.getElementById("start");

let words = [];        // 單字表
let shuffleWords = []; // 隨機排序單字表
let currentWord = {};  // 當前測驗的單字
let wrongAnswers = []; // 錯誤的答案
let index = 0;         // 目前單字索引
let len = 0;           // 單字數
let correctCount = 0;  // 回答正確數
let linkText = "https://dictionary.cambridge.org/zht/詞典/英語-漢語-繁體/";

// 開始
function start() {
    reset();
    selectedWords();
    if (len > 0) {
        shuffleWords = shuffleArray(words);
        currentWord = shuffleWords[0];
        updateCounter();
        displayQuestion();
        showCard();
    }
    // 未選擇範圍
    else {
        hideCard();
        alert("請選擇單字範圍");
    }
}

// 檢查答案
function checkAnswer() {
    // 去除頭尾多餘的空白 + 全部轉小寫
    const answer = document.getElementById("answer").value.trim().toLowerCase();

    if (answer === currentWord.english) {
        correctCount++;
        result.textContent = "正確🎉";
        result.style.color = "#4CAF50";
    } else {
        wrongAnswers.push({
            chinese: currentWord.chinese,
            correctAnswer: currentWord.english,
            yourAnswer: answer
        });
        result.textContent = `${currentWord.chinese} - ${currentWord.english}`;
        result.style.color = "#FF6961";
    }
    index++;
    updateCounter();

    // 如果所有單字都答對
    if (index >= len) {
        hideCard();
        endQuiz();
    } else {
        displayQuestion(); // 顯示下一題
    }
}

// 顯示提示與中文
function displayQuestion() {
    currentWord = shuffleWords[index];
    link();
    chinese.textContent = `${currentWord.chinese}`;
    hint.textContent = hintText();
    answer.value = ""; // 清空答案輸入框
}

// 生成英文提示
function hintText() {
    let text = ``;
    let arr = currentWord.english.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length <= 3) text += `___　`;
        else text += `${word[0]}___${word[word.length - 1]}　`;
    }
    text = text.slice(0, -1);
    return text;
}

// word-card 顯示
function showCard() {
    startButton.textContent = "重新開始";
    wordCard.style.display = "block";
    counter.style.display = "block";
}

// word-card 隱藏
function hideCard() {
    startButton.textContent = "開始";
    wordCard.style.display = "none";
    counter.style.display = "none";
    ans.value = "";
}

// 歸零
function reset() {
    words = [];
    shuffleWords = [];
    currentWord = {};
    wrongAnswers = [];
    index = 0;
    len = 0;
    correctCount = 0;
    result.textContent = "";
}

// 範圍選擇
function selectedWords() {
    const checkboxes = document.querySelectorAll("#word-list-selection input:checked");
    checkboxes.forEach(checkbox => {
        words = words.concat(wordLists[checkbox.value]);
    });
    // 更新單字數
    len = words.length;
}

// enter 送出
document.body.addEventListener('keydown', key, false);
function key(e) {
    if (e.keyCode == 13) checkAnswer();
}

// 點擊看字典
hint.addEventListener("click", function () {
    window.open(linkText, "_blank");
})

// 計數器顯示
function updateCounter() {
    const counter = document.getElementById("counter");
    counter.textContent = `${correctCount} / ${len}`;
}

// 連結至劍橋辭典
function link() {
    linkText = "https://dictionary.cambridge.org/zht/詞典/英語-漢語-繁體/";
    let arr = currentWord.english.split(' ');
    for (let i = 0; i < arr.length; i++) {
        linkText += arr[i];
        if (i !== arr.length - 1) {
            linkText += "-";
        }
    }
}

// Fisher-Yates 洗牌演算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // 交換元素
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 彩帶
function launchConfetti() {
    const duration = 3000; // 彩帶持續時間 (毫秒)
    const end = Date.now() + duration;

    // 建立黑色半透明遮罩
    const overlay = document.createElement("div");
    overlay.id = "celebration-overlay";
    document.body.appendChild(overlay);

    // 建立提示文字
    const celebrationText = document.createElement("div");
    celebrationText.id = "celebration-text";
    celebrationText.textContent = "全部答對！🎊";

    // 加入畫面
    document.body.appendChild(celebrationText);

    // 設定文字在動畫結束後移除
    setTimeout(() => {
        celebrationText.remove();
        overlay.remove();
    }, 5000); // 文字持續 5 秒

    (function frame() {
        confetti({
            scalar: 2, // 彩帶大小
            particleCount: 5, // 每次產生的粒子數量
            angle: Math.random() * 360, // 隨機角度
            spread: Math.random() * 100 + 50, // 擴散範圍
            origin: {
                x: Math.random(), // 隨機 X 軸位置
                y: Math.random() - 0.2, // 隨機 Y 軸位置
            },
            colors: ["#f08", "#0ff", "#80f", "#fa0", "#0f0"], // 彩帶顏色
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame); // 讓彩帶效果持續
        }
    })();
}

function endQuiz() {
    if (wrongAnswers.length > 0) {
        const wrongData = JSON.stringify(wrongAnswers);
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
            <head>
                <title>Wrong Answers</title>
                <link rel="stylesheet" href="wrongAnswers.css">
            </head>
            <body>
                <h1>WRONG ANSWERS</h1>
                <table>
                    <thead>
                        <tr>
                            <th>中文</th>
                            <th>正確答案</th>
                            <th>你的答案</th>
                        </tr>
                    </thead>
                    <tbody id="wrongList"></tbody>
                </table>
            </body>
            <script>
                const wrongAnswers = ${wrongData};
                const tbody = document.getElementById("wrongList");
                wrongAnswers.forEach(item => {
                    const row = document.createElement("tr");
                    row.innerHTML = \`
                        <td>\${item.chinese}</td>
                        <td>\${item.correctAnswer}</td>
                        <td>\${item.yourAnswer}</td>
                    \`;
                    tbody.appendChild(row);
                });
            </script>
            </html>
        `);
    } else {
        launchConfetti(); // 觸發彩帶
    }
}