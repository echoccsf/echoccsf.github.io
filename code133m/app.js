// const registerServiceWorker = async () => {
//     if ("serviceWorker" in navigator) {
//         try {
//             const registration = await 
//             navigator.serviceWorker.register("serviceworker.js")
//             if (registration.installing) {
//                 console.log("Service worker installing");
//             } else if (registration.waiting) {
//                 console.log("Service worker installed");
//             } else if (registration.active) {
//                 console.log("Service worker active");
//             }
//         } catch (error) {
//             console.error("Service worker failed to register");
//         }
//     }
// };

// registerServiceWorker();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceworker.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err) => console.log('Service worker not registered', err));
}

// function changeBackground(background) {
//     var element = document.getElementById("url");
//     element.value = background;
//     element.innerHTML = background;
// }

function lightBlue() {
    document.body.style.backgroundImage = "url('lightblue.jpg')";
}

function lightGold() {
    document.body.style.backgroundImage = "url('lightgold.jpg')";
}

function resetBackground() {
    document.body.style.backgroundImage = "none";
}

// function changeBackground(blue) {
//     var element = document.getElementById("url");
//     element.value = background;
//     element.innerHTML = background;
// }

// function changeBackground(gold) {
//     var element = document.getElementById("url");
//     element.value = background;
//     element.innerHTML = background;
// }