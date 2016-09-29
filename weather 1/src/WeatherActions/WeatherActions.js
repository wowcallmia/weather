import API from '../API'

const WeatherActions = {
                            //api method leaves room for other methods
  fetchWeather(number) {    // this is recieving action from click button on layout!!!
  API.fetchWeather(number);
  }
}

export default WeatherActions