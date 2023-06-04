import { useSelector } from 'react-redux';
import './App.css'
import { InputArea } from './components/InputArea';
import { ResultArea } from './components/ResultArea';
import { useDataSlice } from './redux/data/dataSlice';
import $ from 'jquery'

import Sunny from './assets/img/sunny.jpg'
import Clouds from './assets/img/clouds.jpg'
import Snow from './assets/img/snow.jpg'
import Rain from './assets/img/rain.jpg'
import Drizzle from './assets/img/drizzle.jpg'
import Thunderstorm from './assets/img/thunderstorm.jpg'

const App = () => {
  const weatherDataG = useSelector(useDataSlice);
  var imgMain;
  weatherDataG.map(data => {
    switch(data.weather.main) {
      case "Clear":
        $("#container").css("background-image", `url(${Sunny})`)
        break;
      case "Clouds":
        $("#container").css("background-image", `url(${Clouds})`)
        break;
      case "Snow":
        $("#container").css("background-image", `url(${Snow})`)
        break;
      case "Drizzle":
        $("#container").css("background-image", `url(${Drizzle})`)
        break;
      case "Mist":
        $("#container").css("background-image", `url(${Rain})`)
        break;
      case "Rain":
        $("#container").css("background-image", `url(${Rain})`)
        break;
      case "Thunderstorm":
        $("#container").css("background-image", `url(${Thunderstorm})`)
        break;
      default:
        break;
    }
  })
  return (
    <div id="container">
      <div id="area">
        <InputArea />
        <ResultArea />
      </div>
    </div>
  )
}

export default App