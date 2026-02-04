function checkAccess() {
    const name = document.getElementById("name").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
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
    const icon = document.getElementById("musicIcon");

    if (music.paused) {
        music.play().then(() => {
            icon.src = "pause.png";
        }).catch(() => {
            console.log("User interaction required");
        });
    } else {
        music.pause();
        icon.src = "play.png";
    }
}
