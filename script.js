const questions = [
  // 一、體型與數字
  { text: "我通常很相信家用體脂機顯示的數字。", category: "body", type: "myth", image: "images/scale.png" },
  { text: "我知道體重可以常量，但重點是看一段時間的變化趨勢。", category: "body", type: "correct", image: "images/scale.png" },
  { text: "只要 BMI 在正常範圍，我就不太擔心健康問題。", category: "body", type: "myth", image: "images/scale.png" },

  // 二、飲食與運動
  { text: "我認為不吃澱粉是最快看到效果的方式。", category: "diet", type: "myth", image: "images/scale.png" },
  { text: "我會用流汗的程度來判斷運動有沒有效。", category: "diet", type: "myth", image: "images/scale.png" },
  { text: "我知道體重變化和「整天的總熱量」比較有關，而不只是有沒有吃宵夜。", category: "diet", type: "correct", image: "images/scale.png" },

  // 三、肥胖成因
  { text: "我認為體重增加主要是因為吃得比較多。", category: "cause", type: "myth", image: "images/scale.png" },
  { text: "我不太覺得壓力或情緒會影響體重。", category: "cause", type: "myth", image: "images/scale.png" },
  { text: "我知道睡眠品質會影響荷爾蒙與體重。", category: "cause", type: "correct", image: "images/scale.png" },

  // 四、醫療與治療
  { text: "體重管理主要只是生活習慣問題，並不屬於醫療議題。", category: "medical", type: "myth", image: "images/scale.png" },
  { text: "網路上關於減重與健康的資訊品質不一，通常需要再諮詢專業醫療人員。", category: "medical", type: "correct", image: "images/scale.png" },
  { text: "減重門診與相關醫療服務大多缺乏明確規範與標準流程。", category: "medical", type: "myth", image: "images/scale.png" },
];

let index = 0;

const score = {
  body: 0,
  diet: 0,
  cause: 0,
  medical: 0
};

const card = document.getElementById("card");
const progress = document.getElementById("progress");

function renderQuestion() {
  if (index >= questions.length) {
    showResult();
    return;
  }

  progress.innerText = `第 ${index + 1} / ${questions.length} 題`;
  const q = questions[index];

  const mediaHtml = q.image
    ? `<div class="card-media"><img src="${q.image}" alt="" /></div>`
    : "";

  card.innerHTML = `
    ${mediaHtml}
    <div class="card-text">${q.text}</div>
  `;
}



function showResult() {
  document.querySelector(".actions").style.display = "none";
  progress.innerText = "你的肥胖迷思雷達圖";

  card.innerHTML = `<canvas id="chart"></canvas>`;

  new Chart(document.getElementById("chart"), {
    type: "radar",
    data: {
      labels: ["體型數字", "飲食運動", "肥胖成因", "醫療求助"],
      datasets: [{
        label: "理解程度",
        data: [
          score.body,
          score.diet,
          score.cause,
          score.medical
        ],
        fill: true,
        backgroundColor: "rgba(76, 209, 55, 0.2)",
        borderColor: "#4cd137",
        pointBackgroundColor: "#44bd32"
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

// renderQuestion();

function swipe(direction) {
  const q = questions[index];

  // ✅ 計分（邏輯在這裡）
  if (q.type === "correct") {
    if (direction === "right") score[q.category] += 2;
  } else if (q.type === "myth") {
    if (direction === "left") score[q.category] += 1;
  }

  // ✅ 動畫（維持你現在正常的）
  card.style.transform =
    direction === "right"
      ? "translateX(120vw)"
      : "translateX(-120vw)";

  setTimeout(() => {
    card.style.opacity = "0";

    card.classList.add("dragging");
    card.style.transform = "translateX(0)";

    index++;

    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult(); // 最後成績單
    }

    requestAnimationFrame(() => {
      card.classList.remove("dragging");
      card.style.opacity = "1";
    });
  }, 300);
}


let startX = 0;
let currentX = 0;
let isDragging = false;

card.addEventListener("pointerdown", e => {
  startX = e.clientX;
  isDragging = true;
  card.classList.add("dragging");
});

window.addEventListener("pointermove", e => {
  if (!isDragging) return;

  currentX = e.clientX - startX;
  card.style.transform = `translateX(${currentX}px)`;
});

window.addEventListener("pointerup", () => {
  if (!isDragging) return;
  isDragging = false;
  card.classList.remove("dragging");

  if (currentX > 1) {
    swipe("right");
  } else if (currentX < -1) {
    swipe("left");
  } else {
    // 回彈
    card.style.transform = "translateX(0)";
  }

  currentX = 0;
});



// 開始頁切換
const startScreen = document.getElementById("startScreen");
const quizApp = document.getElementById("quizApp");
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("is-hidden");
    quizApp.classList.remove("is-hidden");

    // 進入測驗後才渲染第一題（避免一開始就改動 card）
    renderQuestion();
  });
}

// 如果你不想一載入就出題，請把原本這行註解掉：
// renderQuestion();