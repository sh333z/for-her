const player = document.getElementById("player");

function playSong(song) {
    player.src = song;
    player.play();
}
