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
      date: "6/9",
      week: "Tue",
      time: "15:30–18:30",
      title: "Custom Umbrella Design Studio",
      subtitle: "オリジナル傘デザイン工房",
      category: "Creative Design Activity",
      description: "Design your own umbrella and explain your ideas in English.",
      descriptionJa: "JOURNEYデザインスタジオへようこそ！自分だけのオリジナル傘作りに挑戦です！カラフルなペンやステッカー、スタンプを使って、好きな絵を自由に描こう！",
      condition: "Beginner OK",
      capacity: "5名",
      theme: "umbrella",
      image: "assets/Custom Umbrella Design Studio.png",
      stripeUrl: "https://book.stripe.com/7sY28qemU8Zu0QJ8pRcIE0b"
    },
    {
      number: "02",
      date: "6/19",
      week: "Fri",
      time: "15:30–18:30",
      title: "Rainy Day Indoor Olympic",
      subtitle: "雨の日の室内オリンピック",
      category: "Active Communication Game",
      description: "Try indoor challenges and cheer for friends using English.",
      descriptionJa: "チームで協力してゲームに勝ち、金メダルを掴み取れ！インドア・オリンピック、開幕！",
      capacity: "5名",
      theme: "olympic",
      image: "assets/Rainy Day Indoor Olympic.png",
      stripeUrl: "https://book.stripe.com/3cIfZg0w43Fabvn7lNcIE0c"
    },
    {
      number: "03",
      date: "6/25",
      week: "Thu",
      time: "15:30–18:30",
      title: "JOURNEY Connect Escape!",
      subtitle: "The Double Code Mystery",
      category: "Escape Mission Activity",
      description: "Work together, solve the double code, and escape the mission room.",
      descriptionJa: "怪盗Jが、みんなのおやつを２つの宝箱に閉じ込めた！相棒チームと力を合わせてコードを合体させ、宝箱を開けよう！",
      condition: "Teamwork",
      capacity: "5名",
      theme: "escape",
      image: "assets/JOURNEY Connect Escape The Double Code Mystery.png",
      stripeUrl: "https://book.stripe.com/28E9ASemUgrWarj9tVcIE0d"
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
