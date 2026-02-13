// Intro yazıları sırayla göster
const introTexts = document.querySelectorAll(".intro-text p");
let introIndex = 0;

function showIntroText() {
    if (introIndex < introTexts.length) {
        introTexts[introIndex].style.opacity = "1";
        introTexts[introIndex].style.transition = "1s";
        introIndex++;
        setTimeout(showIntroText, 1500);
    }
}
showIntroText();

setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
}, 8000);

// Mesaj sistemi
let currentMessage = 0;
const messages = document.querySelectorAll(".message");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    if (currentMessage < messages.length - 1) {
        messages[currentMessage].classList.add("hidden");
        currentMessage++;
        messages[currentMessage].classList.remove("hidden");
    } else {
        document.getElementById("messages").classList.add("hidden");
        nextBtn.classList.add("hidden");
        document.getElementById("questionSection").classList.remove("hidden");
    }
});

// Hayır butonu
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("click", () => {

    document.getElementById("warningText").classList.remove("hidden");

    document.body.classList.add("shake");
    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 400);

    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

    noScale -= 0.2;

    if (noScale <= 0) {
        noBtn.style.display = "none";
    } else {
        noBtn.style.transform = `scale(${noScale})`;
    }

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

// EVET'e basınca
yesBtn.addEventListener("click", () => {

    document.getElementById("questionSection").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    // Konfeti
    confetti({
        particleCount: 200,
        spread: 100
    });

    // Kalp patlaması
    const container = document.getElementById("heartExplosion");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("explosion-heart");
        heart.innerHTML = "❤️";

        const x = (Math.random() - 0.5) * 600 + "px";
        const y = (Math.random() - 0.5) * 400 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
});

// Kalp yağmuru
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}, 300);
