const audio = document.getElementById('valentineAudio');
const left = document.getElementById('leftHalf');
const right = document.getElementById('rightHalf');

function checkHearts() {
    // Проверяем, открыты ли ОБЕ половинки
    const isLeftOpen = left.classList.contains('is-open');
    const isRightOpen = right.classList.contains('is-open');

    if (isLeftOpen && isRightOpen) {
        audio.play().catch(e => {
            console.log("Браузер ждет клика для запуска музыки");
        });
    } else {
        audio.pause();
    }
}

// Слушатели событий на клик
left.addEventListener('click', () => {
    left.classList.toggle('is-open');
    checkHearts();
});

right.addEventListener('click', () => {
    right.classList.toggle('is-open');
    checkHearts();
});
