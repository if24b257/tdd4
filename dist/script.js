"use strict";
const allIcons = ["⛩️", "⚖️", "🏴‍☠️", "🌆", "💥", "🤹‍♂️", "🧬", "💱", "💮", "🎰"];
let cards = [];
let flippedCards = [];
let matchedCards = 0;
let pairCount = 4;
let currentPlayer = 1;
let player1score = 0;
let player2score = 0;
const gameBoard = document.getElementById('game-board');
const statusElement = document.getElementById("status");
const pairCountInput = document.getElementById("pair-count");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const player1scoreElement = document.getElementById("player1score");
const player2scoreElement = document.getElementById("player2score");
const currentPlayerElement = document.getElementById("currentplayer");
const player1Element = document.getElementById("player1");
const player2Element = document.getElementById("player2");
// Funktion zum Mischen der Karten
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Spielfeld erstellen
function createBoard() {
    gameBoard.innerHTML = ''; // Spielfeld leeren
    statusElement.textContent = ""; // Status zurücksetzen
    flippedCards = [];
    matchedCards = 0;
    currentPlayer = 1;
    player1score = 0;
    player2score = 0;
    updateScoreboard(); // Punktestand zurücksetzen	
    console.log("Karten erstellt:", cards.length);
    const selectedIcons = allIcons.slice(0, pairCount);
    cards = [...selectedIcons, ...selectedIcons];
    shuffle(cards); // Karten mischen
    cards.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}
// Karte umdrehen
function flipCard(event) {
    var _a;
    const card = event.target;
    // Wenn die Karte bereits umgedreht ist, nichts tun
    if (card.classList.contains('flipped') || flippedCards.length >= 2)
        return;
    card.classList.add('flipped');
    card.textContent = (_a = card.dataset.symbol) !== null && _a !== void 0 ? _a : '';
    flippedCards.push(card);
    if (flippedCards.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}
// Karten vergleichen
function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        // Karten stimmen überein → dauerhaft sichtbar machen
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards++;
        console.log("Paar gefunden");
        if (currentPlayer === 1) {
            player1score++;
        }
        else {
            player2score++;
        }
        updateScoreboard();
        // Wenn alle Paare gefunden wurden → Sieg-Nachricht anzeigen
        if (matchedCards === pairCount) {
            console.log("Spiel gewonnen");
            winnerAnnouncement();
        }
    }
    else {
        // Karten zurückdrehen, wenn sie nicht übereinstimmen
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = "";
        card2.textContent = "";
        console.log("Kein Paar gefunden");
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateScoreboard();
    }
    // Zurücksetzen für den nächsten Zug
    flippedCards = [];
}
// Spiel zurücksetzen
function resetGame() {
    flippedCards = [];
    matchedCards = 0;
    statusElement.textContent = "";
    gameBoard.innerHTML = '';
    createBoard(); // Neues Spielfeld erstellen
    console.log("Spiel zurückgesetzt");
}
// Reset-Button aktivieren
const button = document.getElementById('reset-button');
button.addEventListener('click', resetGame);
startButton.addEventListener("click", () => {
    const inputPairs = parseInt(pairCountInput.value);
    if (isNaN(inputPairs) || inputPairs < 1 || inputPairs > allIcons.length) {
        alert(`Bitte gebe eine gültige Anzahl zwischen 1 und ${allIcons.length} ein.`);
        return;
    }
    pairCount = inputPairs;
    createBoard();
});
function updateScoreboard() {
    player1scoreElement.textContent = player1score.toString();
    player2scoreElement.textContent = player2score.toString();
    currentPlayerElement.textContent = currentPlayer.toString();
    if (currentPlayer === 1) {
        player1Element.classList.add("active-player");
        player2Element.classList.remove("active-player");
    }
    else {
        player2Element.classList.add("active-player");
        player1Element.classList.remove("active-player");
    }
}
function winnerAnnouncement() {
    const message = `
🎉 Spiel beendet! 🎉
Spieler 1: ${player1score} Punkte
Spieler 2: ${player2score} Punkte
${player1score > player2score ? "🏆 Gewinner: Spieler 1!" :
        player2score > player1score ? "🏆 Gewinner: Spieler 2!" :
            "🤝 Es ist ein Unentschieden!"}
`;
    statusElement.textContent = message;
}
