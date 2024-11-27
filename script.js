let cityInput = document.getElementById("city")
let searchBtn = document.getElementById("search-Btn")
searchBtn.addEventListener("click", () => {
    let city = cityInput.value.trim();
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=244c5b3edd2bbdedb7411837ec52c8d7&units=metric`)
        .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message)
                }
                else {
                    // console.log(data.name);
                    // console.log(data.main.temp);
                    // console.log(data.main.humidity);
                    // console.log(data.weather[0].main);
                    document.querySelector(".info").style.display = "flex";
                    document.getElementById("cityname").innerHTML = data.name;
                    document.getElementById("temp").innerHTML ="Temp:-"+data.main.temp + "℃";
                    document.getElementById("wind").innerHTML="WIND:-"+data.wind.speed + "m/s";
                    document.getElementById("humidity").innerHTML=" HUMIDITY:-"+data.main.humidity + "%";
                }
            })
            .catch(error => console.log(error))
    } else {
        alert("First write the city name")
    }
})

