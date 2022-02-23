window.onload = function(){
    getposition();
}
const link = 'https://api.openweathermap.org/data/2.5/weather?lat=36.111004&lon=128.158282&appid=&units=metric';

let position; 
function getposition(){
    navigator.geolocation.getCurrentPosition(res=>{
        position=res;
        lats = position.coords.latitude;
        lons = position.coords.longitude;
        console.log(lats, lons);

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${lons}&appid=16be444d79e7123ea85e80a308924fe6&units=metric&lang=kr`)
            .then(response=> response.json())
            .then(json => {
                console.log(json);
                console.log(`${json.weather[0].id}`);
                let icon = `${json.weather[0].icon}`;
                document.getElementById('img').src="https://openweathermap.org/img/wn/"+ icon +"@2x.png";
                document.getElementById('info').textContent = `${json.weather[0].description}`;
                document.getElementById('temp').textContent = `온도 : ${json.main.temp}°C`;
                document.getElementById('maxtemp').textContent = `최고기온 : ${json.main.temp_max}°C`;
                document.getElementById('mintemp').textContent = `최저온도 : ${json.main.temp_min}°C`;
                document.getElementById('feeltemp').textContent = `체감온도 : ${json.main.feels_like}°C`;
        })
    });
}


