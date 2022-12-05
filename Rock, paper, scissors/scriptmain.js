const title = document.getElementById('test');
const pi = document.getElementById('pi');
const btn = document.querySelector('.play');
const audio = new Audio();
audio.src = './Video Game Beep - Sound Effect.mp3'

btn.addEventListener('click', playButton);

function playButton() {
    audio.currentTime = 0;
    audio.play();
    title.classList.add("animate");
    btn.classList.add('btnanimation');
    pi.classList.add('playerinterface');
    btn.removeEventListener('click', playButton)
    btn.style.cursor = "default"
}