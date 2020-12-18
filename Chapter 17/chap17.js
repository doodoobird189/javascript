var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunner", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

var minTemp = 0;
var maxTemp = 100;

generateWeather();

function generateWeather() {
    for (var i = 0; i < days.length; i++) {
        var weatherToday = weather[Math.floor(Math.random() *
            weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML +=
            "<div id='" + days[i] + "' class='" +
            weatherToday + "'><b>Forecast for " + days[i] +
            ":</b><br><br>" + weatherToday + " and " +
            tempToday + " degrees.</div>";
    }
}