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
        else text += `${word[0]}____${word[word.length - 1]}　`;
    }
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
    } else {
        displayQuestion(); // 顯示下一題
    }
}

// 創建彩帶效果
function launchConfetti() {
    const container = document.createElement("div");
    container.id = "confetti-container";
    document.body.appendChild(container);

    // 生成多個彩帶
    for (let i = 0; i < 500; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // 隨機設定彩帶的位置與顏色
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = Math.random() * 3 + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);
    }

    // 自動清除彩帶容器（4秒後）
    setTimeout(() => {
        document.body.removeChild(container);
    }, 10000);
}

// 隨機顏色生成
function getRandomColor() {
    const colors = ["#FF5733", "#FFBD33", "#33FF57", "#33FFF3", "#335BFF", "#A633FF"];
    return colors[Math.floor(Math.random() * colors.length)];
}