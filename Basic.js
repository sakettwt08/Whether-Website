document.getElementById('but').addEventListener('click', async ()=>{

    let city = document.getElementById('inp').value;

    const geoUrl =
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

    const response = await fetch(geoUrl);
    const data = await response.json();
    console.log(data)

    const lat = data.results[0].latitude;
    const lon = data.results[0].longitude;

    const weatherUrl =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;

    const weatherres = await fetch(weatherUrl);
    const weatherData = await weatherres.json();

    let temp = weatherData.current.temperature_2m;
    let humi = weatherData.current.relative_humidity_2m;

    document.getElementById('op').innerHTML = `
    Temperature: ${temp}°C <br>
    Humidity: ${humi}%
    `;

});