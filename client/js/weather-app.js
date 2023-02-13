const APIKEY = '57fd11162b9f4854afbcd63b8bf8ebd1';

let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url).then(response =>
        response.json().then((data) => {
            document.querySelector('#city').textContent = data.name;
            document.querySelector('#desc').textContent = data.weather[0].description;
            document.querySelector('#humi').textContent = data.main.humidity + '%';
            document.querySelector('#wind').textContent = data.wind.speed + 'Km/h';
            
            if (data.weather[0].main === 'Clear') {
                document.querySelector('#icon').innerHTML = '<div class= sunny> <div id= temp></div> <span class= sun></span> <span class= sunx></span> </div>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #4885ff51, #4885ff51, #d49b0077, #e96b043b)";
            }

            if (data.weather[0].main === 'Clouds') {
                document.querySelector('#icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <span class= cloud3></span> </div>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #20212351, #48494b22, #7575763b, #d6d6d631)";
            }

            if (data.weather[0].main === 'Mist' || data.weather[0].main === 'Fog' || data.weather[0].main === 'Haze') {
                document.querySelector('#icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <span class= cloud3></span> <span class= cloud4></span> </div>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #6f6c8883, #7f7f7f53, #9c9c9ca5, #d6d6d68f)";
            }

            if (data.weather[0].main === 'Drizzle') {
                document.querySelector('#icon').innerHTML = '<div class= breezy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= cloudr></span>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #0941b051, #2686ec22, #08d3ee3b, #0ecc3131)";
            }

            if (data.weather[0].main === 'Rain') {
                document.querySelector('#icon').innerHTML = '<div class= rainy> <div id= temp></div> <span class= cloud></span> <span class= cloud2></span> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #4885ff51, #3c67bc51, #9a97973b, #25231c86)";
            }

            if (data.weather[0].main === 'Snow') {
                document.querySelector('#icon').innerHTML = '<div class= stormy> <div id= temp></div> <ul> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> </ul> <span class= snowe></span> <span class= snowex></span> <span class= stick></span> <span class= stick2></span> </div>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #ffffffb6, #d6d6d651, #9a97973b, #25231c86)";
            }

            if (data.weather[0].main === 'Thunderstorm') {
                document.querySelector('#icon').innerHTML = '<div class= cloudy> <div id= temp></div> <span class= cloud-storm></span> <span class= cloud2-storm></span> <span class= cloud3-storm></span> </div>';
                document.querySelector('form').style.backgroundImage = "linear-gradient(to top, #2a2a2ab6, #51515151, #e9c3043b, #32280086)";
            }

            document.querySelector('#temp').textContent = data.main.temp + '°C';
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
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
})

apiCall('Paris');