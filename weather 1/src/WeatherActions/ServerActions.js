import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveWeather(response) { // come get pokemon then to payload and dispatch this action
    AppDispatcher.dispatch ({
      type: 'RECEIVE_WEATHER' ,
      payload: { response }
    })

  }

}
export default ServerActions