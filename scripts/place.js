document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 0;
const windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

const windChillElement = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}