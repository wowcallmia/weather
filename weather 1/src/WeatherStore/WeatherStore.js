import AppDispatcher from '../AppDispatcher'
import {EventEmitter } from 'events';

let _weather = [
]  // this is going to get replaced with pokemon from the server

class WeatherStore extends EventEmitter {
constructor(){
  super();

  AppDispatcher.register(action => {
    switch(action.type) {
      case 'RECEIVE_WEATHER':
      // let {response} = action.payload.response
      // let types = `${action.payload.pokemon.types[0].type.name} / ${action.payload.pokemon.types[1].type.name}`



      let temp = {
        temp: action.payload.response.data.current_observation.temperature_string,
        weather: action.payload.response.data.current_observation.weather,
        icon: action.payload.response.data.current_observation.icon_url,
        location: action.payload.response.data.current_observation.station_id
      }
      
      
      _weather.push(temp)
       //replacing the pokemon variable with the one recieved


      this.emit('CHANGE');
      break;
    }

  })
}
startListening(cb){
    this.on('CHANGE', cb);
}
  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getWeather() {
    return _weather;
     //this is a getter and we will use this elswhwere to get the value of it after updated
  }
}

export default new WeatherStore();