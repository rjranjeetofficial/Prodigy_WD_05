const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd46c689271msh3153bc45c856f63p1832c3jsn502d11022cde',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather =(city)=>{
	cityname.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML =response.cloud_pct
		temp.innerHTML =response.temp
		temp2.innerHTML =response.temp
		feels_like.innerHTML =response.feels_like
		humidity.innerHTML =response.humidity
		humidity2.innerHTML =response.humidity
		min_temp.innerHTML =response.min_temp
		max_temp.innerHTML =response.max_temp
		wind_speed.innerHTML =response.wind_speed
		wind_speed2.innerHTML =response.wind_speed
		wind_degrees.innerHTML =response.wind_degrees
		sunrise.innerHTML =response.sunrise
		sunset.innerHTML =response.sunset

		})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>
{
	e.preventDefault()
	getweather(city.value)
})
getweather("Delhi")

const getweatherDelhi =(city)=>{
	cityna=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityna, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		c_pct.innerHTML =response.cloud_pct
		tem.innerHTML =response.temp
		f_like.innerHTML =response.feels_like
		hum.innerHTML =response.humidity
		min_temp_Delhi.innerHTML =response.min_temp
		max_temp_Delhi.innerHTML =response.max_temp
		wind_speed_Delhi.innerHTML =response.wind_speed
		wind_degrees_Delhi.innerHTML =response.wind_degrees
		sunrise_Delhi.innerHTML =response.sunrise
		sunset_Delhi.innerHTML =response.sunset

		})
	.catch(err => console.error(err));
}
getweatherDelhi("Delhi")

const getweatherTokyo =(city)=>{
	city1=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city1, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		c_pct1.innerHTML =response.cloud_pct
		tem1.innerHTML =response.temp
		f_like1.innerHTML =response.feels_like
		hum1.innerHTML =response.humidity
		min_temp_Delhi1.innerHTML =response.min_temp
		max_temp_Delhi1.innerHTML =response.max_temp
		wind_speed_Delhi1.innerHTML =response.wind_speed
		wind_degrees_Delhi1.innerHTML =response.wind_degrees
		sunrise_Delhi1.innerHTML =response.sunrise
		sunset_Delhi1.innerHTML =response.sunset

		})
	.catch(err => console.error(err));
}
getweatherTokyo("Tokyo")

const getweatherNewYork =(city)=>{
	city2=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city2, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		c_pct2.innerHTML =response.cloud_pct
		tem2.innerHTML =response.temp
		f_like2.innerHTML =response.feels_like
		hum2.innerHTML =response.humidity
		min_temp_2.innerHTML =response.min_temp
		max_temp_2.innerHTML =response.max_temp
		wind_speed_2.innerHTML =response.wind_speed
		wind_degrees_2.innerHTML =response.wind_degrees
		sunrise_2.innerHTML =response.sunrise
		sunset_2.innerHTML =response.sunset

		})
	.catch(err => console.error(err));
}
getweatherNewYork("New York")
const getweatherParis =(city)=>{
	city3=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city3, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		c_pct3.innerHTML =response.cloud_pct
		tem3.innerHTML =response.temp
		f_like3.innerHTML =response.feels_like
		hum3.innerHTML =response.humidity
		min_temp_3.innerHTML =response.min_temp
		max_temp_3.innerHTML =response.max_temp
		wind_speed_3.innerHTML =response.wind_speed
		wind_degrees_3.innerHTML =response.wind_degrees
		sunrise_3.innerHTML =response.sunrise
		sunset_3.innerHTML =response.sunset
	})
}
getweatherParis("Paris")
const getweatherLondon =(city)=>{
	city3=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city3, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		c_pct4.innerHTML =response.cloud_pct
		tem4.innerHTML =response.temp
		f_like4.innerHTML =response.feels_like
		hum4.innerHTML =response.humidity
		min_temp_4.innerHTML =response.min_temp
		max_temp_4.innerHTML =response.max_temp
		wind_speed_4.innerHTML =response.wind_speed
		wind_degrees_4.innerHTML =response.wind_degrees
		sunrise_4.innerHTML =response.sunrise
		sunset_4.innerHTML =response.sunset
	})
}
getweatherLondon("London")
function newPage()
{

}