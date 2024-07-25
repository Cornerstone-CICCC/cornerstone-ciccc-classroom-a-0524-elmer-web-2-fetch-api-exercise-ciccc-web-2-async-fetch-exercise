// YOUR JS CODE HERE

async function getWeatherData() {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

getWeatherData()
  .then((data) => {
    // tempature
    const tempature = document.querySelector(".tempature");
    tempature.innerText = data.current.temperature_2m;
    // tempature unit
    const tempatureUnit = document.querySelector(".tempature-unit");
    tempatureUnit.innerText = data.current_units.temperature_2m;

    // wind speed
    const windSpeed = document.querySelector(".windspeed");
    windSpeed.innerText = data.current.wind_speed_10m;

    // wind speed unit
    const windSpeedUnit = document.querySelector(".windspeed-unit");
    windSpeedUnit.innerText = data.current_units.wind_speed_10m;

    // wind speed unit
    const timezone = document.querySelector(".timezone");
    timezone.innerText = data.timezone;

    // local time
    const timeData = data.current.time;
    const newTime = new Date(timeData);
    const formattedTime = newTime.toLocaleString("jp-JP");

    const time = document.querySelector(".time");
    time.innerText = formattedTime;
  })
  .catch((e) => {
    console.log(e);
  });
