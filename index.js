var form = document.querySelector('form')
var locationInput = document.querySelector('input[type=text]')

var allWeather = document.getElementById('weather')

form.onsubmit = function (e) {
    e.preventDefault()


    fetch(
        'https://api.openweathermap.org/data/2.5/weather?appid=d96b9094faaeb0e1b4a4f6ac7d4166a4&units=imperial&q=' + locationInput.value)

    
        .then(function (res) {

            return res.json()

        })
        .then(function (data) {
            console.log(data)
            var div = document.createElement('div')
            var h3 = document.createElement('h3')
            h3.textContent = data.main.temp
            div.appendChild(h3)
            document.getElementById("current").innerHTML = "Current: " + h3.innerHTML + "° F";

            console.log(data)
            var divfive = document.createElement('div')
            var h3five = document.createElement('h3')
            h3five.textContent = data.weather[0].description
            divfive.appendChild(h3five)
            document.getElementById("sky").innerHTML =  h3five.innerHTML;
          

           
            var divtwo = document.createElement('div')
            var h2 = document.createElement('h2')
            h2.textContent = data.name
            divtwo.appendChild(h2)
          

            document.getElementById("location").innerHTML = h2.innerHTML;

       

            var divfour = document.createElement('div')
            var h3four = document.createElement('h3')
            h3four.textContent = data.timezone
            divfour.appendChild(h3four)
            document.getElementById("last").innerHTML = "Last updated: " + h3four.innerHTML;
        


        })
        .catch(function (err){
            console.log(err)
           
    })

}

