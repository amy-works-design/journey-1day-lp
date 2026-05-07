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
      number: "01",
      date: "5/15",
      week: "Fri",
      time: "15:30–18:30",
      title: "The Lost Island Expedition",
      subtitle: "失われた島の探検隊",
      category: "Riddle Activity",
      description: "Solve the puzzles and dig up the key to the treasure chest!",
      descriptionJa: "謎解きをクリアして、宝箱の鍵を発掘しよう！",
      capacity: "5名",
      theme: "island",
      image: "assets/The Lost Island Expedition.png",
      stripeUrl: "https://book.stripe.com/4gMaEWgv2a3y56ZdKbcIE07"
    },
    {
      number: "02",
      date: "5/21",
      week: "Thu",
      time: "15:30–18:30",
      title: "Observation & Adjectives",
      subtitle: "Mistery box",
      category: "",
      description: "(観察力・形容詞)",
      descriptionJa: "【目的】物の特徴を捉えて、詳しく説明する力を養う",
      capacity: "5名",
      theme: "reading",
      image: "assets/Observation & Adjectives.png",
      stripeUrl: "https://book.stripe.com/00w14m0w4a3ygPHbC3cIE08"
    },
    {
      number: "03",
      date: "5/26",
      week: "Tue",
      time: "15:30–18:30",
      title: "Physical Expression",
      subtitle: "身体表現・ジェスチャー",
      category: "Body Language Activity",
      description: "Use the body to connect words and actions.",
      descriptionJa: "体全体を使って、言葉と動きをリンクさせます。",
      activity: "Flag & Foot Frenzy",
      condition: "Beginner OK",
      capacity: "5名",
      theme: "body",
      image: "assets/Physical Expression.png",
      stripeUrl: "https://book.stripe.com/28E00ia6EdfKarj0XpcIE09"
    },
    {
      number: "04",
      date: "5/30",
      week: "Sat",
      time: "9:00–12:00",
      title: "Hobbies Day",
      subtitle: "好きなものを英語でシェアしよう",
      category: "Show & Share Activity",
      description: "Bring something you love and share it with everyone.",
      descriptionJa: "自分の好きな趣味や好きなものを持ち寄って、みんなと共有しよう！",
      capacity: "10名",
      theme: "hobbies",
      image: "assets/Hobbies Day.png",
      stripeUrl: "https://book.stripe.com/eVq4gy5QogrW2YRdKbcIE0a"
    }
  ]
};

document.querySelectorAll("[data-text]").forEach((node) => {
  const key = node.dataset.text;
  node.textContent = LP_CONFIG.text[key] || "";
});

document.querySelectorAll("[data-schedule-list]").forEach((scheduleList) => {
  const isBooking = scheduleList.closest(".schedule--repeat");

  LP_CONFIG.schedule.forEach((item) => {
    const card = document.createElement("article");
    card.className = `schedule-card schedule-card--${isBooking ? "booking" : "info"} schedule-card--${item.theme}`;

    if (isBooking) {
      card.innerHTML = `
        <span class="schedule-card__number">${item.number}</span>
        <span class="schedule-card__date">${item.date}<small>${item.week}</small></span>
        <span class="schedule-card__line"></span>
        <span class="schedule-card__visual" aria-hidden="true">
          <img src="${item.image}" alt="" loading="lazy" />
        </span>
        <h3 class="schedule-card__title">${item.title}</h3>
        <span class="schedule-card__time"><span aria-hidden="true"></span>${item.time}</span>
        <span class="schedule-card__capacity">定員：${item.capacity}</span>
        <div class="schedule-card__payment">
          <a class="schedule-card__reserve" href="${item.stripeUrl}">予約する</a>
        </div>
      `;
    } else {
      card.innerHTML = `
        <span class="schedule-card__number">${item.number}</span>
        <div class="schedule-card__header">
          <div>
            <span class="schedule-card__date">${item.date}<small>${item.week}</small></span>
            <span class="schedule-card__time"><span aria-hidden="true"></span>${item.time}</span>
          </div>
          <span class="schedule-card__illo" aria-hidden="true">
            <img src="${item.image}" alt="" loading="lazy" />
          </span>
        </div>
        ${item.category ? `<span class="schedule-card__category">${item.category}</span>` : ""}
        <h3 class="schedule-card__title">${item.title}</h3>
        <p class="schedule-card__subtitle">${item.subtitle}</p>
        <p class="schedule-card__description">
          ${item.description}<br />
          <span>${item.descriptionJa}</span>
        </p>
        ${item.note ? `<p class="schedule-card__note">${item.note}<br /><span>${item.noteJa}</span></p>` : ""}
        ${item.activity ? `<p class="schedule-card__activity">Activity: ${item.activity}</p>` : ""}
        <div class="schedule-card__meta">
          ${item.condition ? `<span class="schedule-card__condition">${item.condition}</span>` : ""}
          <span class="schedule-card__capacity">定員：${item.capacity}</span>
        </div>
      `;
    }

    scheduleList.appendChild(card);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".schedule-card__reserve, .footer-info__law").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = link.href;
  });
});
