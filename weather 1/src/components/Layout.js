import React, { Component } from 'react'
import WeatherActions from '../WeatherActions/WeatherActions'
import WeatherStore from '../WeatherStore/WeatherStore'
import ServerActions from '../WeatherActions/ServerActions'


export default class Layout extends Component {
  constructor() {
    super();
    this.state = { // initially when we first get to this component we will go to the store
      weather: WeatherStore.getWeather()
    }

    this.fetchWeather = this.fetchWeather.bind(this); //bind your methods step 1
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    WeatherActions.fetchWeather();
  }

  componentWillMount(){
    WeatherStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    WeatherStore.stopListening(this._onChange)
  }

  _onChange(){ // need to bind this
    this.setState({                 //get pokemon update the store which will update the state and render it
      weather: WeatherStore.getWeather()
      
       // same as the original this.state but whenever it changes it reads as the store
    })
    //any time the data in the store updates we will recieve it
  }


fetchWeather() {
  let { DropDown } = this.props;
  let { weatherNumber } = this.refs; // setting this object variable to be used in refs
  let data = weatherNumber.value;  //pulling from the refs value  after creating it and creating number
  WeatherActions.fetchWeather(data); // giving number to action creator!!!
}

  render() {
    const {weather} = this.state;
    return (
      <div className='container'>
        <h1 className='text-center'>Weather</h1>
        <div>
          <input type = 'number' ref ='weatherNumber'/>
          <button
            onClick={this.fetchWeather}
            className = 'btn btn-default'> Input Zip </button>
            {weather.map((cur,i) => (
              <div>
              <div><img src={cur.icon}/></div>
            <div>{cur.weather}</div>
            <div>{cur.temp}</div>
              
        <object width="290" height="130">
<param name="movie" value={`http://www.wunderground.com/swf/pws_mini_rf_nc.swf?station=${cur.location}&freq=&units=english&lang=EN`} />,
<embed src="http://www.wunderground.com/swf/pws_mini_rf_nc.swf?station=KCATRACY5&freq=&units=english&lang=EN" type="application/x-shockwave-flash" width="290" height="130" />, 
</object></div>
))}
      </div></div>
    )
  }
}
