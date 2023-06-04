import * as C from "./styles";
import { useSelector } from "react-redux";
import { useDataSlice } from "../../redux/data/dataSlice";
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'

export const ResultArea = () => {
  const weatherDataG = useSelector(useDataSlice);
  return (
    <>
      {weatherDataG.map((data, index) => (
        data.name && (
          <C.Container key={index}>
            <C.Region>
              <div>{data.name} - {data.sys.country}</div>
              <img src={`https://flagsapi.com/${data.sys.country}/flat/32.png`} />
            </C.Region>

            <C.IconTemp>
              <img src={`https://openweathermap.org/img/wn/${data.weather.icon}@4x.png`} />            
            </C.IconTemp>

            <C.MaxMin>
              <div id="max">
                <FaTemperatureHigh />{data.main.temp_max?.toFixed(0)}°
              </div>
              <div id="min">
                <FaTemperatureLow />{data.main.temp_min?.toFixed(0)}°
              </div>
            </C.MaxMin>

            <C.Temp>        
              <div id="temp">{data.main.temp?.toFixed(0)}°</div>
              <div>|</div>
              <div id="description">{data.weather.description}</div>
            </C.Temp>

            <C.Feels>
              Sensação {data.main.feels_like?.toFixed(0)}°
            </C.Feels>
          </C.Container>
        )
      ))} 
    </>
  )
};
