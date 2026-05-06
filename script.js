const LP_CONFIG = {
  text: {
    target: "小学1〜6年生のお子さま。英語経験は問いません。",
    belongings: "筆記用具、飲み物、動きやすい服装でお越しください。",
    guardian: "受付・お迎えは保護者の方にお願いいたします。見学可否は日程によりご案内します。",
    price: "3,300円",
    priceNote: "教材・アクティビティ費込み。詳細はお申し込み後にご案内します。"
  },
  schedule: [
    {
      month: "6",
      day: "15",
      week: "Sat",
      title: "Morning Journey",
      time: "10:00〜12:30 / 定員12名"
    },
    {
      month: "6",
      day: "22",
      week: "Sat",
      title: "Afternoon Journey",
      time: "14:00〜16:30 / 定員12名"
    },
    {
      month: "7",
      day: "06",
      week: "Sat",
      title: "Summer Trial",
      time: "10:00〜12:30 / 定員12名"
    }
  ]
};

document.querySelectorAll("[data-text]").forEach((node) => {
  const key = node.dataset.text;
  node.textContent = LP_CONFIG.text[key] || "";
});

const scheduleList = document.querySelector("[data-schedule-list]");

LP_CONFIG.schedule.forEach((item) => {
  const card = document.createElement("article");
  card.className = "schedule-card";
  card.innerHTML = `
    <div class="schedule-card__date">${item.month}/${item.day}<small>${item.week}</small></div>
    <p><strong>${item.title}</strong>${item.time}</p>
  `;
  scheduleList.appendChild(card);
});

document.querySelectorAll('a[href="#form"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#form").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
