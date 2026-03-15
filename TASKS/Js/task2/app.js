let img = document.getElementById("myImage");
let button = document.getElementById("btn");
let form = document.getElementById("frm");
let tempDisplay = document.getElementById("tempDisplay");

let currentWeather = null; // لتخزين البيانات الحالية

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userLat = parseFloat(document.getElementById("lat").value);
  const userLong = parseFloat(document.getElementById("long").value);

  // جلب بيانات الطقس
  currentWeather = await fetchWeather(userLat, userLong);

  // تغيير لون الخلفية حسب درجة الحرارة
  const conditions = processWeatherData(currentWeather);

  // جلب صورة GIF مناسبة
  await fetchImg(conditions);

  // عرض درجة الحرارة بالـ Celsius
  tempDisplay.textContent = `Temperature: ${currentWeather.temp}°C`;
});

// زر تحويل ل Fahrenheit
button.addEventListener("click", () => {
  if (!currentWeather) return alert("Please get weather first!");
  const fahrenheit = convertToFahrenheit(currentWeather.temp);
  tempDisplay.textContent = `Temperature: ${fahrenheit}°F`;
});

// جلب بيانات الطقس من Visual Crossing
async function fetchWeather(lat, lon) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&key=DH9A8ZBFQ8T3NACMRJL7ZVH8E&contentType=json`
  );
  const data = await response.json();
  const { temp, conditions } = data.currentConditions;
  console.log(`Temperature is ${temp}°C, conditions: ${conditions}`);
  return { temp, conditions };
}

// معالجة البيانات وتغيير لون الخلفية
function processWeatherData(data) {
  let color = "";
  const temp = data.temp;

  if (temp <= 20 && temp > 10) color = "lightblue";
  else if (temp <= 10 && temp > 0) color = "lightgray";
  else if (temp <= 0) color = "white";
  else color = "orange";

  document.body.style.backgroundColor = color;
  return data.conditions;
}

// جلب صورة GIF من Giphy
async function fetchImg(cond) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=bvbDKzvAAyKw5jGCAJLm6LqVLN80TnoA&q=${cond.split(",")[0]} weather&limit=1`
  );
  const data = await response.json();
  if (data.data.length > 0) {
    img.src = data.data[0].images.original.url;
  } else {
    img.src = "";
  }
}

// تحويل درجة الحرارة
function convertToFahrenheit(celsius) {
  return ((celsius * 9) / 5 + 32).toFixed(1);
}