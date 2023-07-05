const key = "ed603dba1863be0ec046fc39a36ac755"
const button = document.querySelector('.container__search-button')

const onClick = () => {

  const city = document.querySelector('.container__input').value
  seekCity(city)
}

async function seekCity(city) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)

  const json = await data.json()
  showData(json)
}

const showData = (json) => {
  const selectedCity = document.querySelector('.container__city')
  selectedCity.innerHTML = `Tempo em ${json.name}`

  const temperature = document.querySelector('.container__temperature-data')
  temperature.innerHTML = `${Math.floor(json.main.temp)}°`

  const description = document.querySelector('.container__weather-data')
  description.innerHTML = `${json.weather[0].description}.`

  const humidity = document.querySelector('.container__humidity-data')
  humidity.innerHTML = `Umidade: ${json.main.humidity}%`

  const icon = document.querySelector('.prevision')
  icon.src =  `https://openweathermap.org/img/wn/${json.weather[0].icon}.png`
  console.log(json)
}

button.addEventListener('click', () => {
  onClick()
})

document.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    onClick()
  }
})