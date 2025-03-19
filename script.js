
// Data evenimentului nuntii
const weddingDate = new Date("2025-06-15T00:00:00").getTime();

// Funcția care actualizează contorul
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculăm zilele, orele, minutele și secundele
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afișăm valorile
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Dacă evenimentul a avut loc, oprește contorul
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Ziua nuntii a sosit!";
    }
}

// Actualizăm contorul o dată pe secundă
const interval = setInterval(updateCountdown, 1000);
