document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;

    // YILDIZ
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
        if (!body.classList.contains("lock-mode")) return;
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
    document.getElementById("unlockBtn").onclick = function () {
        if (document.getElementById("passwordInput").value !== correctPassword) return;

        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("afterUnlock").classList.remove("hidden");

        const text = "Kalbimin şifresini bulabileceğini biliyordum... ❤️";
        let i = 0;

        const typing = setInterval(() => {
            document.getElementById("unlockText").innerHTML += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(typing);
                setTimeout(() => {
                    document.getElementById("afterUnlock").classList.add("hidden");
                    body.classList.remove("lock-mode");
                    body.classList.add("love-mode");
                    showIntro();
                }, 1500);
            }
        }, 80);
    };

    function showIntro() {
        const intro = document.getElementById("introMessages");
        const text = document.getElementById("introText");

        intro.classList.remove("hidden");

        const messages = [
            "Bugün sıradan bir gün değil...",
            "Çünkü bugün kalbimin sahibine küçük bir sürprizim var...",
            "Hazırsan devam edelim ❤️"
        ];

        let index = 0;

        function next() {
            if (index >= messages.length) {
                setTimeout(() => {
                    intro.classList.add("hidden");
                    document.getElementById("mainSection").classList.remove("hidden");
                }, 2000);
                return;
            }
            text.innerHTML = messages[index];
            index++;
            setTimeout(next, 3000);
        }

        next();
    }

    // SLI
