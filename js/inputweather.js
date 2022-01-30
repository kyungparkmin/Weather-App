window.onload = function(){
    inputCity();
    
}
function inputCity(){
    let city = document.getElementById('city').value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16be444d79e7123ea85e80a308924fe6&units=metric&lang=kr`)
    .then(response=> response.json())
    .then(json => {
        console.log(json);
        console.log(`${json.weather[0].id}`);
        let icon = `${json.weather[0].icon}`;
        document.getElementById('img1').src="https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.getElementById('info').textContent = `${json.weather[0].description}`;
        document.getElementById('temp').textContent = `온도 : ${json.main.temp}°C`;
        document.getElementById('maxtemp').textContent = `최고기온 : ${json.main.temp_max}°C`;
        document.getElementById('mintemp').textContent = `최저온도 : ${json.main.temp_min}°C`;
        document.getElementById('feeltemp').textContent = `체감온도 : ${json.main.feels_like}°C`;
    });
}


function onlyAlphabet(ele) {
    ele.value = ele.value.replace(/[^\\!-z]/gi,"");
}





