const APIKEY = '57fd11162b9f4854afbcd63b8bf8ebd1';

/*=============== FUNCTION WEATHER ===============*/

function setWeather(data) {
    const link = document.querySelector("link[rel*='icon']");

    document.querySelector('#city').textContent = data.name;
    document.querySelector('#desc').textContent = data.weather[0].description;
    document.querySelector('#min_temp').textContent = data.main.temp_min + '°C';
    document.querySelector('#max_temp').textContent = data.main.temp_max + '°C';
    document.querySelector('#humi').textContent = data.main.humidity + '%';
    document.querySelector('#wind').textContent = data.wind.speed + 'Km/h';

    if (data.weather[0].main === 'Clear') {
        link.href = 'clear.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= sunny> <div id= temp></div> <span class= sun></span> <span class= sunx></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #4885ff51, #4885ff51, #d49b0077, #e96b043b)";
    }

    if (data.weather[0].main === 'Clouds') {
        link.href = 'clouds.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <span class= cloud3></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #20212351, #48494b22, #7575763b, #d6d6d631)";
    }

    if (data.weather[0].main === 'Mist' || data.weather[0].main === 'Fog' || data.weather[0].main === 'Haze') {
        link.href = 'clouds.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= fog></span> <span class= fog2></span> <span class= fog3></span> <span class= fog4></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #6f6c8883, #7f7f7f53, #9c9c9ca5, #d6d6d68f)";
    }

    if (data.weather[0].main === 'Drizzle') {
        link.href = 'drizzle.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= breezy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= cloudr></span>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #0941b051, #2686ec22, #08d3ee3b, #0ecc3131)";
    }

    if (data.weather[0].main === 'Rain') {
        link.href = 'rain.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= rainy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #4885ff51, #3c67bc51, #9a97973b, #25231c86)";
    }

    if (data.weather[0].main === 'Snow') {
        link.href = 'snow.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= stormy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= snowe></span> <span class= snowex></span> <span class= stick></span> <span class= stick2></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #ffffffb6, #d6d6d651, #9a97973b, #25231c86)";
    }

    if (data.weather[0].main === 'Thunderstorm') {
        link.href = 'thunderstorm.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud-storm></span> <span class= cloud2-storm></span> <span class= cloud3-storm></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #2a2a2ab6, #51515151, #e9c3043b, #32280086)";
    }

    document.querySelector('#temp').textContent = data.main.temp + '°C';
}

/*=============== SEARCH WEATHER ===============*/

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url).then(response =>
        response.json().then((data) => {
            setWeather(data);
        })
    ).catch(err => console.log('Erreur : ' + err),
        document.querySelector('#city').textContent = '',
        document.querySelector('#desc').textContent = 'Not found',
        document.querySelector('#humi').textContent = '0',
        document.querySelector('#wind').textContent = '0'
    );
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#search_input').value;

    apiCall(ville);
})

/*=============== LOCALISATION WEATHER ===============*/

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric&lang=fr`;
        fetch(url).then(response =>
            response.json()).then(data => {
                setWeather(data);
            })
            .catch(err => console.log('Erreur : ' + err),
                document.querySelector('#city').textContent = '',
                document.querySelector('#desc').textContent = 'Not found',
                document.querySelector('#humi').textContent = '0',
                document.querySelector('#wind').textContent = '0'
            );
    });
} else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur. Veuillez entrer manuellement votre position.");
}