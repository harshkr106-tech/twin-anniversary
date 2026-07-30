// =======================
// PAGE SWITCH FUNCTION
// =======================

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// =======================
// PAGE 1 → PAGE 2
// =======================

const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    showPage("memories");
  });
}

// =======================
// PAGE 2 → PAGE 3
// =======================

const nextBtn = document.getElementById("nextBtnX");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showPage("letterPage");
  });
}

// =======================
// LETTER
// =======================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");

const message =
`Dear twin
I wanted to write something to celebrate our 6 months of friendship.
I never expected you to become an important person in my life and I'm grateful to the day we met and will always be. I always enjoy our conversation even if we talk nonsense in them and always tease each other I don't know why but it's always fun to talk to you. And I wouldn't have gotten to know myself as a monkey if it weren't for you and I like how we both became so attached to each other online, I never expected it . And while talking to you I have always felt good, I admire your kindness towards me and how you don't ignore my long texts and always reply to them I really appreciate it. We both are super lazy but never been lazy to text each other. Thank you for always supporting me and being here for me while I only teased you . I always wish you to be happy and achieve greater things in life and always stay healthy. May God always protect my lazy monkey twin.
Your twin 🤗
`;

let i = 0;

function typeLetter() {

  typingText.innerHTML = "";
  i = 0;

  function type() {

    if (i < message.length) {

      typingText.innerHTML += message.charAt(i);

      i++;

      setTimeout(type, 35);

    }

  }

  type();

}

if (envelope) {

  envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(()=>{

        letter.classList.remove("hidden");

        typeLetter();

    },900);

  });

}

// =======================
// PAGE 3 → PAGE 4
// =======================

const celebrateBtn = document.getElementById("celebrateBtn");

if (celebrateBtn) {

  celebrateBtn.addEventListener("click", () => {

    showPage("celebration");
    
    createHearts();

    launchConfetti();

  });

}

// =======================
// FLOATING HEARTS
// =======================

function createHearts() {

  for (let j = 0; j < 40; j++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 8000);

  }

}
// Celebration → Question

document.getElementById("celebrateBtn").addEventListener("click", () => {

    showPage("twinForever");

});

// YES

document.getElementById("yesBtn").addEventListener("click", () => {

    showPage("finalPage");

});

// NO 😂

document.getElementById("noBtn").addEventListener("click", () => {

    alert("Nope 😝 Try again.");

});
// ==========================
// CONFETTI
// ==========================

function launchConfetti(){

    const colors = [
        "#ff4d6d",
        "#4aa8ff",
        "#ffd93d",
        "#7dff7d",
        "#b266ff",
        "#ffffff"
    ];

    for(let i=0;i<120;i++){

        const confetti = document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.background=
            colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDuration=
            (3+Math.random()*2)+"s";

        confetti.style.transform=
            "rotate("+Math.random()*360+"deg)";

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}
// ===== FRIENDSHIP TIMER =====

const friendshipDate = new Date("2026-02-12T20:00:00");

function updateFriendshipTimer(){

    const now = new Date();

    const diff = now - friendshipDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60)) % 24);

    const minutes = Math.floor((diff/(1000*60)) % 60);

    const seconds = Math.floor((diff/1000) % 60);

    const timer = document.getElementById("friendshipTimer");

    if(timer){
        timer.innerHTML =
        `${days} Days<br>${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }
}

updateFriendshipTimer();

setInterval(updateFriendshipTimer,1000);
const restartBtn = document.getElementById("restartBtn");

if(restartBtn){

    restartBtn.addEventListener("click",()=>{

        showPage("welcome");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}