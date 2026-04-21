// ===============================
// 🌟 CARD CLICK HIGHLIGHT EFFECT
// ===============================
function selectCard(element) {
    let cards = document.querySelectorAll(".card");

    // Remove active class from all cards
    cards.forEach(card => {
        card.classList.remove("active");
    });

    // Add active class to clicked card
    element.classList.add("active");
}


// ===============================
// 🌦️ WEATHER FUNCTION (OPTIONAL)
// Use this in your separate weather page
// ===============================
async function getWeather() {

    let cityInput = document.getElementById("city");

    // If input not found (like in blog page), stop
    if (!cityInput) return;

    let city = cityInput.value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "YOUR_API_KEY";  // 🔑 Replace with your key

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        let result = document.getElementById("weatherResult");

        if (data.cod === 200) {
            result.innerHTML = `
                🌍 ${data.name} <br>
                🌡 Temperature: ${data.main.temp}°C <br>
                ☁ Weather: ${data.weather[0].description}
            `;
        } else {
            result.innerHTML = "❌ City not found";
        }

    } catch (error) {
        console.log(error);
        alert("Error fetching weather data");
    }
}