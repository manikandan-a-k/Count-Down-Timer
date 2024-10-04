
document.getElementById('start-btn').addEventListener('click', function() {
    const targetDate = new Date(document.getElementById('target-date').value);
    const countdownDisplay = document.getElementById('countdown');

    if (!targetDate || isNaN(targetDate)) {
        countdownDisplay.textContent = "Invalid date.";
        return;
    }

    const updateCountdown = () => {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(interval);
            countdownDisplay.textContent = "Time's up!";
            countdownDisplay.style.animation = 'blink 1s infinite'; 
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        countdownDisplay.style.animation = 'fadeIn 0.5s ease'; 
    };

    updateCountdown(); 
    const interval = setInterval(updateCountdown, 1000); 
});
