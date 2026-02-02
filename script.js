// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});

// Audio Screen
const audioContainer = document.getElementById("audio-container");
const playBtn = document.getElementById("play-audio-btn");
const audio = document.getElementById("valentine-audio");

audio.loop = true; // ✅ audio loops forever

playBtn.addEventListener("click", () => {
    audio.play();
    audioContainer.style.display = "none";
    envelope.style.display = "block";
});

// Function to surround an element with a heart shape
function surroundWithHeart(targetId) {
  const target = document.getElementById(targetId);
  const rect = target.getBoundingClientRect();

  const container = document.createElement("div");
  container.className = "big-heart bounce";
  container.style.left = rect.left + "px";
  container.style.top = rect.top + "px";
  container.style.width = rect.width + "px";
  container.style.height = rect.height + "px";
  document.body.appendChild(container);

  const numHearts = 80;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  for (let i = 0; i < numHearts; i++) {
    const t = (Math.PI * 2 * i) / numHearts;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);

    const heart = document.createElement("div");
    heart.className = "mini-heart";
    heart.textContent = "♡";

    heart.style.left = centerX + x * 10 + "px";
    heart.style.top = centerY - y * 10 + "px";

    container.appendChild(heart);
  }
}

// Surround the audio screen and letter screen
surroundWithHeart("audio-wrapper");
surroundWithHeart("letter-wrapper");

function createBorderHearts() {
  const hearts = [
    { class: "heart-blue", text: "♡" },
    { class: "heart-green", text: "♡" },
    { class: "heart-red", text: "♡" },
    { class: "heart-purple", text: "♡" }
  ];

  hearts.forEach(h => {
    const heart = document.createElement("div");
    heart.className = "big-heart " + h.class;
    heart.textContent = h.text;
    document.body.appendChild(heart);
  });
}

createBorderHearts();


// Messages to show when hovering over "No"
const noMessages = [
  "really?? :c",
  "but.. i loving you..",
  "don't break my heart 💔",
  "you sure about that?",
  "please say yes 🥺",
  "nooo, I’ll be sad!",
  "but.. I want you ;33",
  "I'll..cook..lexis..",
  "Hey mayn...",
  "Nuh UHHHH",
  "BLEHHH :P",
  "Meowwww"
];

noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Pick a random message
    const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];

    // Create message element
    let msg = document.createElement("div");
    msg.className = "no-message";
    msg.textContent = randomMessage;

    // Random position anywhere on screen
    const randX = Math.random() * (window.innerWidth - 200); // keep inside screen
    const randY = Math.random() * (window.innerHeight - 50);

    msg.style.position = "fixed";
    msg.style.left = randX + "px";
    msg.style.top = randY + "px";

    document.body.appendChild(msg);

    // Remove after 2 seconds
    setTimeout(() => msg.remove(), 2000);
});
