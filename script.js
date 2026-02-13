// YILDIZLAR
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}
setInterval(drawStars, 50);

// ŞİFRE
const correctPassword = "1234";

document.getElementById("unlockBtn").onclick = () => {
    const input = document.getElementById("passwordInput").value;

    if (input === correctPassword) {
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("siteContent").classList.remove("hidden");
    } else {
        document.getElementById("errorText").classList.remove("hidden");
    }
};

// FOTO SLAYT
const slides = document.querySelectorAll("#slider img");
let slideIndex = 0;
slides[0].style.opacity = 1;

setInterval(() => {
    slides[slideIndex].style.opacity = 0;
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.opacity = 1;
}, 3000);

// BUTON OYUNU
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
let noScale = 1;
let yesScale = 1;

noBtn.onclick = () => {

    document.getElementById("warningText").classList.remove("hidden");

    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    noScale -= 0.2;

    if (noScale <= 0) {
        noBtn.style.display = "none";
    } else {
        noBtn.style.transform = `scale(${noScale})`;
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
        noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
    }
};

// FİNAL
yesBtn.onclick = () => {

    document.getElementById("siteContent").classList.add("hidden");
    document.getElementById("finalScreen").classList.remove("hidden");

    const text = "Sevgililer Günün Kutlu Olsun ❤️";
    let i = 0;

    const typing = setInterval(() => {
        document.getElementById("finalText").innerHTML += text[i];
        i++;
        if (i >= text.length) clearInterval(typing);
    }, 80);
};
