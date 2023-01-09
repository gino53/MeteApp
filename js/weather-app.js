const APIKEY = "57fd11162b9f4854afbcd63b8bf8ebd1";

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url).then(response =>
        response.json().then((data) => {
            document.querySelector("#city").textContent = data.name;
            document.querySelector("#humi").textContent = data.main.humidity + '%';
            document.querySelector("#wind").textContent = data.wind.speed + 'Km/h';
            document.querySelector("#desc").textContent = data.weather[0].description;
            if (data.weather[0].main === "Clear") {
                document.querySelector("#icon").innerHTML = "<div class= sunny> <div id= temp></div> <span class= sun></span> <span class= sunx></span> </div>";
            }

            if (data.weather[0].main === "Clouds") {
                document.querySelector("#icon").innerHTML = "<div class= cloudy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <span class= cloud3></span> </div>";
            }

            if (data.weather[0].main === "Drizzle") {
                document.querySelector("#icon").innerHTML = "<div class= breezy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= cloudr></span>";
            }

            if (data.weather[0].main === "Rain") {
                document.querySelector("#icon").innerHTML = "<div class= rainy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div>";
            }

            if (data.weather[0].main === "Snow") {
                document.querySelector("#icon").innerHTML = "<div class= stormy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= snowe></span> <span class= snowex></span> <span class= stick></span> <span class= stick2></span> </div>";
            }

            if (data.weather[0].main === "Thunderstorm") {
                document.querySelector("#icon").innerHTML = "<div class= cloudy> <div id= temp></div> <span class= cloud-storm></span> <span class= cloud2-storm></span> <span class= cloud3-storm></span> </div>";
            }

            document.querySelector("#temp").textContent = data.main.temp + '°C';
        })
    ).catch (err => console.log('Erreur : ' + err));
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;

    apiCall(ville);
})

apiCall("Paris");