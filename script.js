document.addEventListener("DOMContentLoaded", function () {
    const buttonArming = document.getElementById('disarmed');
    const statusText = document.getElementById('disarmed-text');

    buttonArming.addEventListener('click', () => {
        if (statusText.innerText === 'Disarmed') {
            statusText.innerText = 'Armed';
        } else {
            statusText.innerText = 'Disarmed';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttonDoors = document.getElementsByClassName('doors-buttons');

    for (let button of buttonDoors) {
        button.addEventListener('click', () => {
            window.location.href = 'doors.html';
        });
    };
    
});


document.addEventListener("DOMContentLoaded", function () {
    const securityHome = document.getElementById('security');

    securityHome.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
});


document.addEventListener("DOMContentLoaded", function () {
    const thermostat = document.getElementById('thermostat');

    thermostat.addEventListener('click', () => {
        window.location.href = 'thermostat.html';
    });
    
});



document.addEventListener("DOMContentLoaded", function () {
    const moreButton = document.getElementById('more');
    const lessButton = document.getElementById('less');
    const tempText = document.getElementById('temp');

    moreButton.addEventListener('click', () => {
        tempText.innerText = parseInt(tempText.innerText) + 1;
    });
    lessButton.addEventListener('click', () => {
        tempText.innerText = parseInt(tempText.innerText) - 1;
    });
});