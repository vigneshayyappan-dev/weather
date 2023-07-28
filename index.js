let cityName

const weather = async function(){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=4cc82568bdf18af4e44da217ca2e562a&units=metric`)
    if(response.status === 200) {
        const data = await response.json()
        return data
    }
    else{
        throw new Error("Unable to find")
    }
}

const p = document.createElement("p")

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    cityName = document.getElementById("inputElement").value 

    weather(cityName).then((data)=>{
        console.log(data)
        if(data.main.temp >= 37){
            document.getElementById("temp").textContent = `${data.main.temp}c so HOT`
        }
        else if(data.main.temp > 25){
            document.getElementById("temp").textContent = `${data.main.temp}c HOT `
        }
        else if(data.main.temp > 21){
            document.getElementById("temp").textContent = `${data.main.temp}c Room Temp`
        }
        else if(data.main.temp > 5){
            document.getElementById("temp").textContent = `${data.main.temp}c Warm & Mild`
        }
        else if(data.main.temp > 0){
            document.getElementById("temp").textContent = `${data.main.temp}c Cool`
        }
        else{
            document.getElementById("temp").textContent = `${data.main.temp}c Very Cold`
        }
        document.getElementById("pressure").textContent = `${data.main.pressure}%`
        document.getElementById("humidity").textContent = `${data.main.humidity}%`
        document.getElementById("speed").textContent = `${  data.wind.speed} Km/h`
        const time = new Date()
        const timeStamp = time.getTime()
        const myDate = new Date(timeStamp)
        document.getElementById("time").textContent= `${myDate.getHours()}: 0${myDate.getMinutes()}`
    }).catch((e)=>{
        console.log(e.message)
    })
})




