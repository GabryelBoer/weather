import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface WeatherData {
  name: string | undefined;
  sys: {
    country: string | undefined,
  },

  main: {
    feels_like: number | null,
    temp: number | null,
    temp_max: number | null,
    temp_min: number | null,
  },

  weather: {
    description: string | undefined,
    icon: string | undefined,
    main: string | undefined,
  }
}

const INITIAL_STATE: WeatherData[] = [
  {name: undefined,
  sys: {
    country: undefined,
  },

  main: {
    feels_like: null,
    temp: null,
    temp_max: null,
    temp_min: null,
  },

  weather: {
    description: undefined,
    icon: undefined,
    main: undefined,
  }}
];

type Weather = {
  description: string | undefined,
  icon: string | undefined,
  main: string | undefined,
}

type Sys = {
  country: string | undefined,
}

type Main = {
  feels_like: number | null,
  temp: number | null,
  temp_max: number | null,
  temp_min: number | null,
}

const dataSlice = createSlice({
  name: 'data',
  initialState: INITIAL_STATE,
  reducers: {
    addNameData(state, { payload }: PayloadAction<string>) {
      return state.map(st => ({...st, name: payload, sys: st.sys, main: st.main, weather: st.weather}))
    },
    addSysData(state, { payload }: PayloadAction<Sys>) {
      return state.map(st => ({...st, name: st.name, sys: payload, main: st.main, weather: st.weather}))
    },
    addMainData(state, { payload }: PayloadAction<Main>) {
      return state.map(st => ({...st, name: st.name, sys: st.sys, main: payload, weather: st.weather}))
    },
    addWeatherData(state, { payload }: PayloadAction<Weather>) {
      return state.map(st => ({...st, name: st.name, sys: st.sys, main: st.main, weather: payload}))
    }
  },

})

export default dataSlice.reducer;
export const { addNameData, addSysData, addMainData, addWeatherData } = dataSlice.actions;

export const useDataSlice = (state: any) => {
  return state.weather as WeatherData[];
}