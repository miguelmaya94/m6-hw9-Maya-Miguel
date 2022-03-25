var form = document.querySelector('form')
var locationInput = document.querySelector('input[type=text]')



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
            document.getElementById("current").innerHTML = "Current: " + h3.innerHTML + "  &#8457";

            var divfeel = document.createElement('div')
            var h3feel = document.createElement('h3')
            h3feel.textContent = data.main.feels_like
            divfeel.appendChild(h3feel)
            document.getElementById("feels").innerHTML = "Feels like: " + h3feel.innerHTML + "  &#8457";

           

 
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








            var divlon = document.createElement('div')
            var h3lon = document.createElement('h3')
            h3lon.textContent = data.coord.lon
            divlon.appendChild(h3lon)
            console.log(h3lon)

            var divlat = document.createElement('div')
            var h3lat = document.createElement('h3')
            h3lat.textContent = data.coord.lat
            divlat.appendChild(h3lat)
            console.log(h3lat)


            var divicon = document.createElement('div')
            var h3icon = document.createElement('h3')
            h3icon.textContent = data.weather[0].icon
            divicon.appendChild(h3icon)
            document.getElementById("myImg").src = h3icon;
          



            const date = new Date(document.lastModified);
            document.getElementById("last").innerHTML = "Last Updated:  " + date;


        })
        .catch(function (err){
            console.log(err)
           
    })

}

