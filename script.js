document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;

    // YILDIZ
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    for (let i = 0; i < 150; i++) {
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
    setInterval(drawStars, 60);

    // ŞİFRE
    const correctPassword = "Özden";

    document.getElementById("unlockBtn").addEventListener("click", function () {

        if (document.getElementById("passwordInput").value !== correctPassword) return;

        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("afterUnlock").classList.remove("hidden");

        document.getElementById("unlockText").innerHTML =
            "Kalbimin şifresini bulabileceğini biliyordum... ❤️";

        setTimeout(() => {
            document.getElementById("afterUnlock").classList.add("hidden");
            body.classList.remove("lock-mode");
            body.classList.add("love-mode");
            startIntro();
        }, 2000);
    });

    function startIntro() {
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
                intro.classList.add("hidden");
                document.getElementById("mainSection").classList.remove("hidden");
                return;
            }

            text.innerHTML = messages[index];
            index++;
            setTimeout(next, 3500);
        }

        next();
    }

    // SLIDER
    const slides = document.querySelectorAll("#slider img");
    if (slides.length > 0) {
        let slideIndex = 0;
        slides[0].style.opacity = 1;

        setInterval(() => {
            slides[slideIndex].style.opacity = 0;
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].style.opacity = 1;
        }, 3000);
    }

    // BUTONLAR
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let noScale = 1;
    let yesScale = 1;

    noBtn.addEventListener("click", function () {

        document.getElementById("warningText").classList.remove("hidden");

        yesScale += 0.2;
        yesBtn.style.transform = `scale(${yesScale})`;

        noScale -= 0.2;

        if (noScale <= 0) {
            noBtn.style.display = "none";
        } else {
            noBtn.style.transform = `scale(${noScale})`;
        }
    });

    yesBtn.addEventListener("click", function () {
        document.getElementById("mainSection").classList.add("hidden");
        document.getElementById("loveScreen").classList.remove("hidden");
    });

    document.getElementById("nextMessageBtn").addEventListener("click", function () {
        document.getElementById("loveScreen").classList.add("hidden");
        document.getElementById("noteScreen").classList.remove("hidden");
    });

});


