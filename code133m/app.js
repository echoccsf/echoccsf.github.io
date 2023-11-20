if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err));
}

function lightBlue() {
    document.body.style.backgroundImage = "url('lightblue.jpg')";
}

function lightGold() {
    document.body.style.backgroundImage = "url('lightgold.jpg')";
}

function resetBackground() {
    document.body.style.backgroundImage = "none";
}
