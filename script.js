import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"
const button = document.getElementById('confetti');

button.addEventListener('click', () => {
    console.log('Button clicked!');
    confetti();
});