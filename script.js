document.addEventListener("DOMContentLoaded", function () {

    const unlockBtn = document.getElementById("unlockBtn");
    const lockScreen = document.getElementById("lockScreen");
    const mainSection = document.getElementById("mainSection");

    unlockBtn.addEventListener("click", function () {
        console.log("Buton çalıştı");

        lockScreen.classList.add("hidden");
        mainSection.classList.remove("hidden");

        initOtherFeatures(); // diğer şeyleri sonra başlat
    });

    function initOtherFeatures() {

        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");

        if (yesBtn && noBtn) {

            let noScale = 1;
            let yesScale = 1;

            noBtn.addEventListener("click", function () {
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
                alert("Evet seçildi ❤️");
            });
        }
    }

});
