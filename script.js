function openLetter() {
    document.querySelector(".letter").innerHTML = `
        <h1>Will you be hillys?</h1>

        <button class="button-yes" onclick="handleYesClick()">
            Yes
        </button>

        <button class="button-no" onclick="handleNoClick()">
            No
        </button>
    `;
}

function handleNoClick() {
    const noButton = document.querySelector(".button-no");

    const messages = [
        "No",
        "Waittt",
        "Are you sure?",
        "REALLY??",
        "STOP",
        "PLEASEEE",
        "NOOOO"
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    noButton.textContent = randomMessage;

    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    const yesButton = document.querySelector(".button-yes");

    let currentSize = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );

    yesButton.style.fontSize = (currentSize * 1.15) + "px";

    const currentNoSize = parseFloat(
        window.getComputedStyle(noButton).fontSize
    );

    noButton.style.fontSize = (currentNoSize * 0.9) + "px";
}

function handleYesClick() {
    window.location.href = "./yes_page.html";
}