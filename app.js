let weather = {
    apikey: "1652773cf93410719c6cee6486c7dc2d",
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" + 
            city +
            "&units=metric&appid=" +
            this.apikey
        )
             .then((response) => response.json())
             .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
    }
};
