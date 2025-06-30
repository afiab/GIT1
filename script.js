// Shuffle Fun Facts
const shuffleButton = document.getElementById('shuffleFacts');
const factCards = document.querySelectorAll('.fact-card');

const originalFacts = [
    document.getElementById('fact1').textContent,
    document.getElementById('fact2').textContent,
    document.getElementById('fact3').textContent
];

shuffleButton.addEventListener('click', () => {
    // shuffled facts
    const shuffledFacts = [...originalFacts].sort(() => Math.random() - 0.5);

    // Update the text content of the fact cards
    factCards.forEach((card, index) => {
        card.textContent = shuffledFacts[index];
    });
});