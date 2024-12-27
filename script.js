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
        if (word == '...') text += '... ';
        else if (word.length <= 2) text += `${word} `;
        else text += `${word[0]}___${word[word.length - 1]} `;
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
        result.textContent = "正確！🎉";
        result.style.color = "green";
    } else {
        result.textContent = `${currentWord.chinese} - ${currentWord.english}`;
        result.style.color = "red";
    }
    index++;
    updateCounter();
    displayQuestion();
}