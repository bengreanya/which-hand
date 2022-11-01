const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const winsEl = document.getElementById('correct');
const lossesEl = document.getElementById('incorrect');
const totalEl = document.getElementById('total');
const coin1 = document.querySelector('#coin-1');
const coin2 = document.querySelector('#coin-2');

/* State */
let correct = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    total++;
    resetHands();
    // generate a random location for the pearl (number between 1 and 3)
    const coinLocation = Math.ceil(Math.random() * 2);
    if (coinLocation === 1) {
        correct++;
        img1.classList.add('reveal');
    } else if (coinLocation === 2) {
        img2.classList.add('reveal');
    }
    displayResults();
});
button2.addEventListener('click', () => {
    total++;
    resetHands();
    // generate a random location for the pearl (number between 1 and 3)
    const coinLocation = Math.ceil(Math.random() * 2);
    if (coinLocation === 1) {
        img1.classList.add('reveal');
    } else if (coinLocation === 2) {
        img2.classList.add('reveal');
        correct++;
    }

    displayResults();
});

function resetHands() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
}

/* Display Functions */
function displayResults() {
    winsEl.textContent = correct;
    lossesEl.textContent = total - correct;
    totalEl.textContent = total;
}
