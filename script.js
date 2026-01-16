const questions = [
  // 一、體型與數字
  {
    text: "我通常很相信家用體脂機所顯示的數字。",
    category: "body",
    type: "myth",
    image: "images/scale.png",
    correctDirection: "left",
    explain:
      "家用體脂機容易受水分、量測時間、餐前餐後、運動後狀態與機型影響，數字不一定精準。建議固定時間與條件量測、看長期趨勢，並搭配腰圍、體重、生活型態與臨床評估一起看。"
  },
  {
    text: "我知道體重可以常量，但重點是看一段時間的變化趨勢。",
    category: "body",
    type: "correct",
    image: "images/trend.png",
    correctDirection: "right",
    explain:
      "體重每天會因水分、飲食內容、排便與生理期等波動。與其執著單一天數字，更重要的是用同樣條件定期量測，觀察 2–4 週或更長時間的變化趨勢，才能更準確反映身體組成與習慣改變。"
  },
  {
    text: "只要 BMI 在正常範圍，我就不太擔心健康問題。",
    category: "body",
    type: "myth",
    image: "images/meter.png",
    correctDirection: "left",
    explain:
      "BMI 只能粗略反映體重與身高的比例，無法分辨肌肉與脂肪、也不代表脂肪分布。即使 BMI 正常，若腰圍偏大、內臟脂肪高、血糖血脂血壓異常，健康風險仍可能增加，因此需要綜合評估。"
  },

  // 二、飲食與運動
  {
    text: "我認為不吃澱粉是最快看到效果的方式。",
    category: "diet",
    type: "myth",
    image: "images/carb.png",
    correctDirection: "left",
    explain:
      "完全不吃澱粉可能讓總熱量短期下降，但也可能導致疲勞、飲食失衡與反彈。更關鍵的是「總熱量」與「飲食品質」：選擇全穀雜糧、增加纖維與蛋白質、減少含糖飲料與精製點心，通常更可長期維持。"
  },
  {
    text: "我會用流汗的程度來判斷運動有沒有效。",
    category: "diet",
    type: "myth",
    image: "images/sweat.png",
    correctDirection: "left",
    explain:
      "流汗主要是散熱反應，和消耗脂肪不是一回事；環境溫度、衣服厚度也會影響出汗量。運動是否有效更應看運動強度、心肺負荷、肌力進步、運動頻率，以及長期的體能與健康指標變化。"
  },
  {
    text: "我知道體重變化和「整天的總熱量」比較有關，而不只是有沒有吃宵夜。",
    category: "diet",
    type: "correct",
    image: "images/allday.png",
    correctDirection: "right",
    explain:
      "體重管理的核心是長期能量收支（吃進 vs 消耗）。宵夜本身不一定“必胖”，但宵夜常讓總熱量超標、也可能影響睡眠與隔天食慾。重點是看一天/一週的總量與飲食品質，並建立可持續的作息。"
  },

  // 三、肥胖成因
  {
    text: "我認為體重增加主要是因為吃得比較多。",
    category: "cause",
    type: "myth",
    image: "images/eat.png",
    correctDirection: "left",
    explain:
      "吃得多確實會增加體重風險，但肥胖成因通常更複雜，包含睡眠不足、壓力、藥物、荷爾蒙、代謝與飲食環境等。把原因簡化成“意志力/吃太多”容易忽略真正需要調整或治療的因素。"
  },
  {
    text: "我不太覺得壓力或情緒會影響體重。",
    category: "cause",
    type: "myth",
    image: "images/stress.png",
    correctDirection: "left",
    explain:
      "壓力與情緒會影響荷爾蒙與食慾（例如想吃高糖高油）、睡眠品質、活動量，進而影響體重。長期壓力也可能讓人更難維持規律飲食與運動，因此心理與生活壓力管理也是體重管理的一部分。"
  },
  {
    text: "我知道睡眠品質會影響荷爾蒙與體重。",
    category: "cause",
    type: "correct",
    image: "images/sleep.png",
    correctDirection: "right",
    explain:
      "睡眠不足會影響飢餓與飽足相關荷爾蒙，增加食慾與對高熱量食物的偏好，也會降低白天活動意願。維持固定作息、提升睡眠品質，往往能讓飲食控制與運動更容易執行。"
  },

  // 四、醫療與治療
  {
    text: "體重管理主要只是生活習慣問題，並不屬於醫療議題。",
    category: "medical",
    type: "myth",
    image: "images/habit.png",
    correctDirection: "left",
    explain:
      "生活習慣很重要，但肥胖也可能伴隨代謝異常、睡眠呼吸中止、脂肪肝等健康風險，屬於需要醫療評估的議題之一。必要時可透過營養、運動、行為治療、藥物或其他醫療介入，建立更安全有效的策略。"
  },
  {
    text: "網路上關於減重與健康的資訊品質不一，通常需要再諮詢專業醫療人員。",
    category: "medical",
    type: "correct",
    image: "images/doctor.png",
    correctDirection: "right",
    explain:
      "網路資訊可能缺乏個人化、或引用不明。若你有慢性病、正在用藥、或曾嘗試多種方法仍無效，建議諮詢醫師/營養師，並用可靠來源（臨床指引、醫療院所衛教）建立適合自己的方案。"
  },
  {
    text: "減重門診與相關醫療服務大多缺乏明確規範與標準流程。",
    category: "medical",
    type: "myth",
    image: "images/flow.png",
    correctDirection: "left",
    explain:
      "多數醫療體系其實有相對完整的評估與介入流程（例如病史、身體組成、抽血檢查、共病評估、飲食與運動處方、追蹤與調整）。不同院所資源與作法會有差異，但並非完全沒有規範；重點是找有專業團隊、能追蹤的服務。"
  }
];

let index = 0;

const score = {
    body: 0,
    diet: 0,
    cause: 0,
    medical: 0
};

const resultScreen = document.getElementById("resultScreen");
const restartBtn = document.getElementById("restartBtn");

let radarChart = null;

const card = document.getElementById("card");
const progress = document.getElementById("progress");

const answers = [];
const resultReview = document.getElementById("resultReview");

function renderQuestion() {
  if (index >= questions.length) {
    showResult();
    return;
  }

  const current = index + 1;
  const total = questions.length;
  const percent = Math.round((current / total) * 100);

  progress.innerHTML = `
    <div class="progress-track" aria-label="測驗進度" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${current}">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>
  `;

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
    // 1) 隱藏測驗頁、顯示結果頁
    quizApp.classList.add("is-hidden");
    resultScreen.classList.remove("is-hidden");
    renderReview(); // ✅ 顯示錯題解析

    // 2) 確保 canvas 存在且可見後再初始化 Chart
    const canvas = document.getElementById("chart");

    // 若之前畫過，先銷毀（避免重畫疊在一起）
    if (radarChart) {
        radarChart.destroy();
        radarChart = null;
    }

    // 用 requestAnimationFrame 確保切換顯示已套用、canvas 有尺寸
    requestAnimationFrame(() => {
        radarChart = new Chart(canvas, {
            type: "radar",
            data: {
            labels: ["體型數字", "飲食運動", "肥胖成因", "醫療求助"],
            datasets: [{
                label: "得分",
                data: [score.body, score.diet, score.cause, score.medical],
                fill: true,
                backgroundColor: "rgb(255 189 189 / 75%)",
                borderColor: "#cc6b6b",
                pointBackgroundColor: "#cc6b6b"
            }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                    min: 0,
                    max: 4,
                    ticks: {
                        stepSize: 1,
                        precision: 0
                    }
                    }
                }
            }
        });
    });
}

let isTransitioning = false;

const leftBtn = document.querySelector(".circle-btn.left");
const rightBtn = document.querySelector(".circle-btn.right");

function setControlsDisabled(disabled) {
  if (leftBtn) leftBtn.disabled = disabled;
  if (rightBtn) rightBtn.disabled = disabled;

  // 也順便禁止卡片再被拖（可選，但更一致）
  card.style.pointerEvents = disabled ? "none" : "auto";
}

function swipe(direction) {
    // ✅ 避免連點/連滑造成重複觸發
    if (isTransitioning) return;
    isTransitioning = true;
    setControlsDisabled(true);

    const q = questions[index];
  // 記錄作答（先寫入當下 index，因為下面會 index++）
    const correct = q.correctDirection ?? (q.type === "correct" ? "right" : "left");
    answers[index] = {
        index,
        chosen: direction,
        correct,
        isCorrect: direction === correct
    };

    // ✅ 計分（邏輯 B）
    if (q.type === "correct") {
        if (direction === "right") score[q.category] += 2;
    } else if (q.type === "myth") {
        if (direction === "left") score[q.category] += 1;
    }

    // 1) 舊卡片滑出 + 淡出
    card.style.opacity = "0";
    card.style.transform =
        direction === "right" ? "translateX(120vw)" : "translateX(-120vw)";

    // 2) 等滑出動畫結束（注意：你 CSS transform 是 0.5s，這裡建議改 500）
    setTimeout(() => {
    card.classList.add("dragging");
    card.style.opacity = "0";
    card.style.transform = "translateX(0)";

    index++;
    if (index < questions.length) {
        renderQuestion();
    } else {
      // 結束：不要再解鎖，因為畫面要切到結果頁
        showResult();
        return;
    }

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            card.classList.remove("dragging");
            card.style.opacity = "1";

            // ✅ 下一張卡片開始出現後才解鎖（你也可等 transitionend，見下方）
            isTransitioning = false;
            setControlsDisabled(false);
        });
    });
    }, 500); // ✅ 跟 CSS 的 transform 0.5s 對齊
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
  if (isTransitioning) {
    isDragging = false;
    currentX = 0;
    return;
  }

  if (!isDragging) return;
  isDragging = false;
  card.classList.remove("dragging");

  if (currentX > 80) swipe("right");
  else if (currentX < -80) swipe("left");
  else card.style.transform = "translateX(0)";

  currentX = 0;
});


// 開始頁切換
if (startBtn) {
  startBtn.addEventListener("click", () => {
    // ✅ 每次按「開始挑戰」都當作新的一輪
    index = 0;
    score.body = 0;
    score.diet = 0;
    score.cause = 0;
    score.medical = 0;

    answers.length = 0;
    if (resultReview) resultReview.innerHTML = "";

    // UI 狀態也復原（避免上次結束停在透明/位移）
    isTransitioning = false;
    setControlsDisabled(false);
    card.classList.remove("dragging");
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";

    // 切畫面
    startScreen.classList.add("is-hidden");
    resultScreen.classList.add("is-hidden"); // ✅ 保險：確保結果頁關掉
    quizApp.classList.remove("is-hidden");

    // ✅ 渲染第一題
    renderQuestion();
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    // 1) 重置狀態
    index = 0;
    score.body = 0;
    score.diet = 0;
    score.cause = 0;
    score.medical = 0;
    answers.length = 0;
    if (resultReview) resultReview.innerHTML = "";

    // 2) 重置測驗 UI（下次再進測驗才乾淨）
    document.querySelector(".actions").style.display = "";
    progress.innerText = "";
    card.classList.remove("dragging");
    card.style.transform = "translateX(0)";
    card.style.opacity = "1";
    card.innerHTML = "";

    // 3) 畫面切換：回到開始頁
    resultScreen.classList.add("is-hidden");
    quizApp.classList.add("is-hidden");
    startScreen.classList.remove("is-hidden");

    // 不要在這裡 renderQuestion();
    // 等使用者按「開始挑戰」再開始出題
  });
}

function renderReview() {
  if (!resultReview) return;

  const wrong = answers.filter(a => a && !a.isCorrect);

  if (wrong.length === 0) {
    resultReview.innerHTML = `<div class="review-item">
      <div class="review-q">太棒了！你沒有答錯的題目</div>
      <p class="review-explain">繼續保持，把正確觀念變成生活習慣。</p>
    </div>`;
    return;
  }

  resultReview.innerHTML = wrong.map(a => {
    const q = questions[a.index];
    const chosenText = a.chosen === "right" ? "符合（○）" : "不符合（✕）";
    const correctText = a.correct === "right" ? "符合（○）" : "不符合（✕）";

    return `
      <div class="review-item">
        <div class="review-q">第 ${a.index + 1} 題：${q.text}</div>
        <div class="review-meta">你的選擇：${chosenText}｜正確：${correctText}</div>
        <p class="review-explain">${q.explain || "（尚未提供解析）"}</p>
      </div>
    `;
  }).join("");
}