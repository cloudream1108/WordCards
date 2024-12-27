let words = [];        // 單字表
let shuffleWords = []; // 隨機排序單字表
let currentWord = {};  // 當前測驗的單字
let index = 0;         // 目前單字索引
let len = 0;           // 單字數
let correctCount = 0;  // 回答正確數

// 開始
function start() {
    reset();
    selectedWords();
    if (len > 0) {
        // word-card 顯示
        document.getElementById("word-card").style.display = "block";
        document.getElementById("counter").style.display = "block";
        
        shuffleWords = shuffleArray(words);
        currentWord = shuffleWords[0];
        updateCounter();
        displayQuestion();
    }
    // 未選擇範圍
    else {
        // word-card 隱藏
        document.getElementById("word-card").style.display = "none";
        document.getElementById("counter").style.display = "none";
        
        alert("請選擇單字範圍");
    }
}

// 歸零
function reset() {
    words = [];
    shuffleWords = [];
    currentWord = {};
    index = 0;
    len = 0;
    correctCount = 0;
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
let body = document.body;
body.addEventListener('keydown', key, false);
function key(e) {
    if (e.keyCode == 13) checkAnswer();
}

// 計數器顯示
function updateCounter() {
    const counter = document.getElementById("counter");
    counter.textContent = `${correctCount} / ${len}`;
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

// 生成英文提示
function hintText() {
    let text = ``;
    let arr = currentWord.english.split(' ');
    for (let i=0; i < arr.length; i++) {
        let word = arr[i];
        if (word.length <= 3) text += `___　`;
        else text += `${word[0]}___${word[word.length - 1]}　`;
    }
    text = text.slice(0, -1);
    return text;
}

// 顯示提示與中文
function displayQuestion() {
    currentWord = shuffleWords[index];
    const chinese = document.getElementById("chinese");
    const hint = document.getElementById("hint");

    chinese.textContent = `${currentWord.chinese}`;
    hint.textContent = hintText();
    document.getElementById("answer").value = ""; // 清空答案輸入框
}

// 檢查答案
function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const result = document.getElementById("result");

    if (answer === currentWord.english) {
        correctCount++;
        result.textContent = "正確🎉";
        result.style.color = "#4CAF50";
    } else {
        result.textContent = `${currentWord.chinese} - ${currentWord.english}`;
        result.style.color = "#FF6961";
    }
    index++;
    updateCounter();
    
    // 如果所有單字都答對
    if (correctCount === len && index === len) {
        result.textContent = "全部答對！🎊";
        launchConfetti(); // 觸發彩帶
        // word-card 隱藏
        document.getElementById("word-card").style.display = "none";
        document.getElementById("counter").style.display = "none";
    } else if (index === len) {
        // word-card 隱藏
        document.getElementById("word-card").style.display = "none";
        document.getElementById("counter").style.display = "none";
    } else {
        displayQuestion(); // 顯示下一題
    }
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