// Intro sonrası ana ekranı göster
setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
}, 3000);

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

// Hayır butonu kaçsın
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";

    yesBtn.style.transform = "scale(1.5)";
});

// Evet butonu
yesBtn.addEventListener("click", () => {
    document.getElementById("questionSection").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    confetti();
});

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
