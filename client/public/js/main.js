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
        link.href = '/images/clear.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= sunny> <div id= temp></div> <span class= sun></span> <span class= sunx></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #4885ff51, #4885ff51, #d49b0077, #e96b043b)";
    }

    if (data.weather[0].main === 'Clouds') {
        link.href = '/images/clouds.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <span class= cloud3></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #20212351, #48494b22, #7575763b, #d6d6d631)";
    }

    if (data.weather[0].main === 'Mist' || data.weather[0].main === 'Fog' || data.weather[0].main === 'Haze') {
        link.href = '/images/haze.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= fog></span> <span class= fog2></span> <span class= fog3></span> <span class= fog4></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #6f6c8883, #7f7f7f53, #9c9c9ca5, #d6d6d68f)";
    }

    if (data.weather[0].main === 'Drizzle') {
        link.href = '/images/drizzle.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= breezy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= cloudr></span>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #0941b051, #2686ec22, #08d3ee3b, #0ecc3131)";
    }

    if (data.weather[0].main === 'Rain') {
        link.href = '/images/rain.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= rainy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #4885ff51, #3c67bc51, #9a97973b, #25231c86)";
    }

    if (data.weather[0].main === 'Snow') {
        link.href = '/images/snow.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= stormy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= snowe></span> <span class= snowex></span> <span class= stick></span> <span class= stick2></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #ffffffb6, #d6d6d651, #9a97973b, #25231c86)";
    }

    if (data.weather[0].main === 'Thunderstorm') {
        link.href = '/images/thunderstorm.png';
        document.querySelector('#weather_icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud-storm></span> <span class= cloud2-storm></span> <span class= cloud3-storm></span> </div>';
        document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #2a2a2ab6, #51515151, #e9c3043b, #32280086)";
    }

    document.querySelector('#temp').textContent = data.main.temp + '°C';
}

function weatherError(error) {
    console.error('There was a problem fetching weather data:', error);
    document.querySelector('#temp').textContent = '0°C'
    document.querySelector('#city').textContent = '';
    document.querySelector('#desc').textContent = 'Not found';
    document.querySelector('#min_temp').textContent = '0°C';
    document.querySelector('#max_temp').textContent = '0°C';
    document.querySelector('#humi').textContent = '0%';
    document.querySelector('#wind').textContent = '0Km/H';
}

/*=============== SEARCH WEATHER ===============*/

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            setWeather(data);
        })
        .catch(weatherError);
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#search_input').value;

    apiCall(ville);
})

/*=============== GEOLOCATION ===============*/

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric&lang=fr`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setWeather(data);
            })
            .catch(weatherError);
    });
} else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur. Veuillez entrer manuellement votre position.");
}

/*=============== LOCATION ===============*/

function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            document.getElementById("lat").textContent = `Lat: ${lat}`;
            document.getElementById("long").textContent = `Long: ${long}`;
        });
    } else {
        console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
}

/*=============== TIME ===============*/

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').textContent = h + ":" + m;
    var t = setTimeout(startTime, 500);
};

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};

startTime();

function startDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById('date').textContent = today;
}

startDate();