document.addEventListener("DOMContentLoaded", function () {

    const unlockBtn = document.getElementById("unlockBtn");
    const lockScreen = document.getElementById("lockScreen");
    const mainSection = document.getElementById("mainSection");

    unlockBtn.addEventListener("click", function () {
        console.log("Buton çalıştı");

        lockScreen.style.display = "none";
        mainSection.style.display = "flex";
    });

});
