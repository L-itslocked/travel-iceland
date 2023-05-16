function displayTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#temp").innerHTML = `${temperature}`;
  //   let icon = icon.setAttribute(
  //     "src",
  //     `https://api.openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
  //   );
  //   document.querySelector("#icon").innerHTML = `${icon}`;
}

function getTemperature() {
  let key = "acf4f9701d8363a6ed361252f2b74e65";
  let city = "Reykjavik";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(api).then(displayTemperature);
}
getTemperature();
