function checkAccess() {
    const name = document.getElementById("name").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    const correctName = "shifa";
    const correctPassword = "30-09-2021";

    if (name === correctName && password === correctPassword) {
        document.getElementById("opening").classList.add("fade");

        setTimeout(() => {
            document.getElementById("opening").style.display = "none";
            document.getElementById("main").classList.remove("hidden");

            const music = document.getElementById("bgMusic");
            music.volume = 0.2;
            music.play();
        }, 1000);
    } else {
        error.textContent = "Wrong details 💔 Try again";
    }
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicToggle");

    if (music.paused) {
        music.play();
        btn.textContent = "⏸";
    } else {
        music.pause();
        btn.textContent = "▶️";
    }
}
function openPage(pageId) {
    document.querySelector(".home-card").style.display = "none";

    const page = document.getElementById(pageId);
    page.classList.remove("hidden-page");

    setTimeout(() => {
        page.classList.add("show");
    }, 10);
}

function goHome() {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("show");
        page.classList.add("hidden-page");
    });

    setTimeout(() => {
        document.querySelector(".home-card").style.display = "flex";
    }, 600);
}
