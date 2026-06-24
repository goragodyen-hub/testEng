// app.js

const QUESTIONS_PER_PAGE = 1;
const TOTAL_QUESTIONS = 30;
let activeQuestions = [];
let currentPage = 0;
let userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
let score = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

const questionsContainer = document.getElementById('questions-container');
const progressBar = document.getElementById('progress-bar');
const currentQRangeEl = document.getElementById('current-q-range');
const totalQEl = document.getElementById('total-q');

// Initialize
totalQEl.textContent = TOTAL_QUESTIONS;

// Events
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestions);
prevBtn.addEventListener('click', prevQuestions);
submitBtn.addEventListener('click', showResults);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    
    // Shuffle and pick 30 questions
    activeQuestions = [...quizQuestions].sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS);
    
    setTimeout(() => {
        startScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        // trigger reflow
        void quizScreen.offsetWidth;
        quizScreen.classList.add('active');
        renderQuestions();
        updateProgress();
    }, 500);
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    
    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, TOTAL_QUESTIONS);
    
    for (let i = startIndex; i < endIndex; i++) {
        const q = activeQuestions[i];
        
        const qEl = document.createElement('div');
        qEl.className = 'question-item';
        
        const qTitle = document.createElement('div');
        qTitle.className = 'question-text';
        qTitle.textContent = q.question;
        qEl.appendChild(qTitle);
        
        const optionsGrid = document.createElement('div');
        optionsGrid.className = 'options-grid';
        
        q.options.forEach((opt, optIndex) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${i}`;
            input.value = optIndex;
            input.className = 'option-input';
            
            // Restore previous answer if any
            if (userAnswers[i] === optIndex) {
                input.checked = true;
            }
            
            input.addEventListener('change', (e) => {
                userAnswers[i] = parseInt(e.target.value);
                updateButtons();
            });
            
            const customRadio = document.createElement('div');
            customRadio.className = 'custom-radio';
            
            const span = document.createElement('span');
            span.className = 'option-text';
            span.textContent = opt;
            
            label.appendChild(input);
            label.appendChild(customRadio);
            label.appendChild(span);
            optionsGrid.appendChild(label);
        });
        
        qEl.appendChild(optionsGrid);
        questionsContainer.appendChild(qEl);
    }
    
    // Update labels
    if (startIndex + 1 === endIndex) {
        currentQRangeEl.textContent = `${startIndex + 1}`;
    } else {
        currentQRangeEl.textContent = `${startIndex + 1}-${endIndex}`;
    }
    updateButtons();
}

function updateButtons() {
    // Show/Hide Prev
    if (currentPage === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    const isLastPage = (currentPage + 1) * QUESTIONS_PER_PAGE >= TOTAL_QUESTIONS;
    
    if (isLastPage) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function updateProgress() {
    const isLastPage = (currentPage + 1) * QUESTIONS_PER_PAGE >= TOTAL_QUESTIONS;
    let percentage;
    if (isLastPage) {
        percentage = 100;
    } else {
        percentage = ((currentPage * QUESTIONS_PER_PAGE) / TOTAL_QUESTIONS) * 100;
    }
    progressBar.style.width = `${percentage}%`;
}

function nextQuestions() {
    // Save state implicitly happens via event listeners
    currentPage++;
    renderQuestions();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevQuestions() {
    currentPage--;
    renderQuestions();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults() {
    calculateScore();
    
    quizScreen.classList.remove('active');
    setTimeout(() => {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        void resultScreen.offsetWidth;
        resultScreen.classList.add('active');
        
        // Render score
        const scoreEl = document.getElementById('score');
        scoreEl.textContent = score;
        
        // Score message
        const msgEl = document.getElementById('score-message');
        if (score >= 25) msgEl.textContent = "🏆 ยอดเยี่ยมมาก! เก่งสุดๆ!";
        else if (score >= 20) msgEl.textContent = "🌟 ทำได้ดีมาก! เข้าใจทะลุปรุโปร่ง";
        else if (score >= 15) msgEl.textContent = "👍 ผ่านเกณฑ์! ลองทบทวนอีกนิดจะเป๊ะมาก";
        else msgEl.textContent = "💪 ไม่เป็นไร! ลองทบทวนกฎแล้วทำใหม่อีกครั้งนะ";
        
        renderAnswerKey();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((ans, index) => {
        if (ans === activeQuestions[index].answer) {
            score++;
        }
    });
}

function renderAnswerKey() {
    const container = document.getElementById('answer-key-container');
    container.innerHTML = '';
    
    activeQuestions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.answer;
        const userAnswerText = userAnswers[index] !== null ? q.options[userAnswers[index]] : "ไม่ได้ตอบ";
        const correctAnswerText = q.options[q.answer];
        
        const el = document.createElement('div');
        el.className = `answer-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        el.innerHTML = `
            <div class="ans-q">${q.question}</div>
            <div class="ans-yours ${isCorrect ? 'right' : 'wrong'}">คำตอบของคุณ: ${userAnswerText}</div>
            ${!isCorrect ? `<div class="ans-correct">คำตอบที่ถูก: ${correctAnswerText}</div>` : ''}
            <div class="ans-exp"><strong>คำอธิบาย:</strong> ${q.explanation}</div>
        `;
        
        container.appendChild(el);
    });
}

function restartQuiz() {
    userAnswers.fill(null);
    currentPage = 0;
    score = 0;
    
    resultScreen.classList.remove('active');
    setTimeout(() => {
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        void startScreen.offsetWidth;
        startScreen.classList.add('active');
        
        progressBar.style.width = '0%';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
}
