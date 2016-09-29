import ServerActions from './WeatherActions/ServerActions';
import axios from "axios"

const API = {

fetchWeather(number){
  if(number){
axios.get(`http://api.wunderground.com/api/930c2acc0fca2d83/conditions/q/${number}.json`)// getting the number from the action!!!!
  .then(response => {
    console.log('response:' , response)

    ServerActions.receiveWeather(response); 
    })
}else{
  console.log('ok')
  axios.get(`http://api.wunderground.com/api/930c2acc0fca2d83/conditions/q/autoip.json`)
    .then(response =>{

      ServerActions.receiveWeather(response);
    })
}
  // .catch(err => {
  //   console.log('err:', err);
  // })
}
}
//http://pokeapi.co/api/v2/pokemon/${number}

      // calling the API in order to recieve the pokemon
     // ServerActions.recieveWeather(data); //first
      //is making the CALL
  

export default API

//http://api.wunderground.com/api/930c2acc0fca2d83/conditions/q/${number}.json
