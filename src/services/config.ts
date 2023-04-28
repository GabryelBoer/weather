const apiKey = import.meta.env.VITE_API_KEY;
const dataURL = import.meta.env.VITE_DATA_URL;

import { Props } from "../types/Props";

const getWeather = async (placeName: string): Promise<Props> => {
  const res = await fetch(
    `${dataURL}weather?q=${placeName}&lang=pt_br&appid=${apiKey}`
  );
  const data = await res.json();
  return data;
};

export default getWeather;
