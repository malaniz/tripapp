import {WeatherProperties} from "./Weather.interface"

export interface PlaceProperties {
  name: string
  lat: number
  lng: number
  weather: WeatherProperties
}

