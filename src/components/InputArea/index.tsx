import * as C from "./styles";
import { CgSearch } from "react-icons/cg";
import { useEffect, useState } from "react";
import getWeather from "../../services/config";
import { ResultArea } from "../ResultArea";
import {Props} from '../../types/Props'

export const InputArea = () => {
  const [placeName, setPlaceName] = useState("");
  const [weatherData, setWeatherData] = useState<Props>();

  const handleSubmit = async () => {
    setWeatherData(await getWeather(placeName));
  };

  useEffect(() => {
    ResultArea(weatherData)
  }, [weatherData]);

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
