function updateDateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = day;
}

updateDateTime();
setInterval(updateDateTime, 60000);
