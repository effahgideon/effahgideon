document.addEventListener('DOMContentLoaded', () => {
    const scoreElement = document.querySelector('.score');
    const labelElement = document.querySelector('.label');
    const infoElement = document.querySelector('.info');
    const summaryScores = document.querySelectorAll('.summary-score');
    const continueBtn = document.querySelector('.continue-btn');

    const scores = {
        reaction: 80,
        memory: 92,
        verbal: 61,
        visual: 72
    };

    function updateCard(score) {
        scoreElement.textContent = score;

        if (score >= 90) {
            labelElement.textContent = 'Excellent';
            infoElement.textContent = 'You scored higher than 95% of the people who have taken these tests.';
        } else if (score >= 75) {
            labelElement.textContent = 'Great';
            infoElement.textContent = 'You scored higher than 65% of the people who have taken these tests.';
        } else if (score >= 50) {
            labelElement.textContent = 'Good';
            infoElement.textContent = 'You scored higher than 35% of the people who have taken these tests.';
        } else {
            labelElement.textContent = 'Keep Trying';
            infoElement.textContent = 'You scored lower than 35% of the people who have taken these tests.';
        }
    }

    continueBtn.addEventListener('click', () => {
        // Simulate new scores
        scores.reaction = Math.floor(Math.random() * 101);
        scores.memory = Math.floor(Math.random() * 101);
        scores.verbal = Math.floor(Math.random() * 101);
        scores.visual = Math.floor(Math.random() * 101);

        // Update the summary scores
        summaryScores[0].textContent = `${scores.reaction} / 100`;
        summaryScores[1].textContent = `${scores.memory} / 100`;
        summaryScores[2].textContent = `${scores.verbal} / 100`;
        summaryScores[3].textContent = `${scores.visual} / 100`;

        // Calculate the average score
        const averageScore = Math.round((scores.reaction + scores.memory + scores.verbal + scores.visual) / 4);

        // Update the card with the new average score
        updateCard(averageScore);
    });

    // Initialize the card with the initial score
    updateCard(76);
});