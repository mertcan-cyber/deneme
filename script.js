// YILDIZ ANİMASYONU
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
        document.getElementById("afterUnlock").classList.remove("hidden");

        const text = "Kalbimin şifresini bulabileceğini biliyordum... ❤️\nHer zaman kalbimde bu şifre
