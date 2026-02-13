document.addEventListener("DOMContentLoaded", function () {

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

    const unlockBtn = document.getElementById("unlockBtn");
    const input = document.getElementById("passwordInput");

    unlockBtn.addEventListener("click", function () {

        if (input.value === correctPassword) {

            document.getElementById("lockScreen").classList.add("hidden");
            document.getElementById("afterUnlock").classList.remove("hidden");

            const text = "Kalbimin şifresini bulabileceğini biliyordum... ❤️\nHer zaman kalbimde bu şifre geçerlidir...";
            let i = 0;

            const typing = setInterval(() => {
                document.getElementById("unlockText").innerHTML += 
                    text[i] === "\n" ? "<br>" : text[i];
                i++;

                if (i >= text.length) {
                    clearInterval(typing);

                    setTimeout(() => {
                        document.getElementById("afterUnlock").classList.add("hidden");
                        document.getElementById("siteContent").classList.remove("hidden");
                    }, 2000);
                }

            }, 50);

        } else {
            document.getElementById("errorText").classList.remove("hidden");
        }
    });

    // FOTO SLAYT
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

});
