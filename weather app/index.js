const API_KEY = `7a0aedb3e3ba77d87fe6233bad92dc1f`;


// const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
// const IMG_URL="";

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const showdate = document.querySelector("p");


setInterval(() => {
    var date = new Date();
    showdate.innerHTML = date.toLocaleString();

}, 1000);


const getweather = async (city) => {
    weather.innerHTML = `<h1>  LOADING ......</h1>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    //console.log(response)
    const data = await response.json();
    //console.log(data);
    return showwather(data);
}
const showwather = (data) => {
    if (data.cod == '404') {
        weather.innerHTML = `<h1>CITY NOT FOUND</h1>`;
        return;
    }

    weather.innerHTML = `
              <div>
               <h1> ${data.main.temp} C </h1>
                 <h4> ${data.weather[0].main}</h4>
              </div> `
}
form.addEventListener("submit", (event) => {
    getweather(search.value)
    event.preventDefault();
})