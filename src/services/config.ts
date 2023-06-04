const apiKey = import.meta.env.VITE_API_KEY;
const dataURL = import.meta.env.VITE_DATA_URL;
import { Props } from '../types/Props'

const getWeather = async (placeName: string) => {
  const res = await fetch(
    `${dataURL}weather?q=${placeName}&lang=pt_br&units=metric&appid=${apiKey}`
  );
  const data: Props = await res.json();
  return data;
};

export default getWeather;
