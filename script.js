async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = "2944079c8b3a40179a660629251404"; // Your API Key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").textContent = `🌡 Temperature: ${data.current.temp_c}°C`;
    document.getElementById("condition").textContent = `⛅ Condition: ${data.current.condition.text}`;
    document.getElementById("icon").src = data.current.condition.icon;
    document.getElementById("weatherCard").classList.remove("hidden");
  } catch (error) {
    alert("Something went wrong!");
    console.error("Error:", error);
  }
}
