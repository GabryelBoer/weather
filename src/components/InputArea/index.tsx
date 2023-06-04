import * as C from "./styles";
import { CgSearch } from "react-icons/cg";
import { useEffect, useState } from "react";
import getWeather from "../../services/config";
import { Props } from '../../types/Props';
import { addNameData, addSysData, addMainData, addWeatherData } from "../../redux/data/dataSlice";
import { useDispatch } from "react-redux";

export const InputArea = () => {
  const dispatch = useDispatch();
  const [placeName, setPlaceName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Props>();

  const handleSubmit = async () => {
    setWeatherData(await getWeather(placeName))
    console.log(weatherData)
  }

  useEffect(() => {
    {weatherData?.name && dispatch(addNameData(weatherData.name))}
    {weatherData?.name && dispatch(addSysData(weatherData.sys))}
    {weatherData?.name && dispatch(addMainData(weatherData.main))}
    {weatherData?.name && dispatch(addWeatherData(weatherData.weather[0]))}
  }, [weatherData])

  return (
    <C.Container>
      <input
        type="text"
        placeholder="Digite o local"
        value={placeName}
        onChange={(e) => setPlaceName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        <CgSearch />
      </button>
    </C.Container>
  );
};
