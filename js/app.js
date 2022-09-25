const APIKEY = "57fd11162b9f4854afbcd63b8bf8ebd1";

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url).then(response =>
        response.json().then((data) => {
            console.log(data);
            document.querySelector("#city").innerHTML = data.name;
            document.querySelector("#temp").innerHTML = "<i class='fa-solid fa-temperature-low'></i>" + data.main.temp + '°C';
            document.querySelector("#humi").innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.main.humidity + '%';
            document.querySelector("#wind").innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'Km/h';
            document.querySelector("#desc").innerHTML = data.weather[0].description;
            if (data.weather[0].main === "Clear") {
                document.querySelector("#icon").innerHTML = "<i class='fa-solid fa-sun fa-xl'></i>";
            }

            if (data.weather[0].main === "Clouds") {
                document.querySelector("#icon").innerHTML = "<i class='fa-solid fa-cloud fa-xl'></i>";
            }

            if (data.weather[0].main === "Drizzle") {
                document.querySelector("#icon").innerHTML = "<i class='fa-solid fa-cloud-sun-rain'></i>";
            }

            if (data.weather[0].main === "Rain") {
                document.querySelector("#icon").innerHTML = "<i class='fa-solid fa-cloud-showers-heavy'></i>";
            }

            if (data.weather[0].main === "Snow") {
                document.querySelector("#icon").innerHTML = "<i class='fa-solid fa-snowflake'></i>";
            }

            if (data.weather[0].main === "Thunderstorm") {
                document.querySelector("#icon").innerHTML = "<i class='fa-solid fa-cloud-bolt'></i>";
            }
        })
    ).catch (err => console.log('Erreur : ' + err));
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;

    apiCall(ville);
})

apiCall("Paris");