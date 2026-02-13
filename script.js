document.addEventListener("DOMContentLoaded", function () {

    // ⭐ YILDIZ ANİMASYONU
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

    // 🔐 ŞİFRE
    const correctPassword = "1234";
    const unlockBtn = document.getElementById("unlockBtn");
    const input = document.getElementById("passwordInput");
    const unlockText = document.getElementById("unlockText");

    unlockBtn.addEventListener("click", function () {

        if (input.value !== correctPassword) return;

        // Şifre ekranı gizle
        document.getElementById("lockScreen").classList.add("hidden");

        // Unlock ekranı göster
        document.getElementById("afterUnlock").classList.remove("hidden");

        // Eski yazıyı temizle
        unlockText.innerHTML = "";

        const text = "Kalbimin şifresini bulabileceğini biliyordum... ❤️";
        let i = 0;

        const typing = setInterval(() => {

            unlockText.innerHTML += text[i];
            i++;

            if (i >= text.length) {
                clearInterval(typing);

                // 2 saniye sonra giriş mesajına geç
                setTimeout(() => {

                    document.getElementById("afterUnlock").classList.add("hidden");
                    startIntro();

                }, 2000);
            }

        }, 50);

    });

    // 💌 GİRİŞ MESAJLARI
    function startIntro() {

        const introSection = document.getElementById("introMessages");
        const introText = document.getElementById("introText");

        introSection.classList.remove("hidden");
        introText.innerHTML = "";

        const messages = [
            "Bugün sıradan bir gün değil...",
            "Çünkü bugün kalbimin sahibine küçük bir sürprizim var...",
            "Hazırsan devam edelim ❤️"
        ];

        let index = 0;

        function showNextMessage() {

            if (index >= messages.length) {
                // Hepsi bittiyse ana bölüme geç
                setTimeout(() => {
                    introSection.classList.add("hidden");
                    document.getElementById("mainSection").classList.remove("hidden");
                }, 3500);
                return;
            }

            introText.innerHTML = messages[index];
            index++;

            setTimeout(showNextMessage, 2000);
        }

        showNextMessage();
    }

    // 📸 FOTO SLAYT
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

    // ❤️ BUTONLAR
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
            noBtn.style.position = "absolute";
            noBtn.style.left = Math.random() * window.innerWidth + "px";
            noBtn.style.top = Math.random() * window.innerHeight + "px";
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

