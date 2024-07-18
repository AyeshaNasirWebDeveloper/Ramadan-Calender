const ramadanStartDate = new Date('March 30, 2025 00:00:00').getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = ramadanStartDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>Ramadan has started!</h2>';
    }
}, 1000);
