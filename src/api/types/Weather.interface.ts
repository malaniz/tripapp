export interface WeatherMeassureProperties {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface WeatherWindProperties {
  speed: number
  deg: number
  gust: number
}
export interface WeatherDescriptionProperties {
  id: number
  main: string
  description: string
  icon: string
}

export interface WeatherLightProperties {
  country: string
  sunrise: Date
  sunset: Date
}

export interface WeatherCloudProperties {
  all: number
}

export interface WeatherProperties {
  id: number
  dt: Date
  coord: {
    lon: number
    lat: number
  }
  weather: WeatherDescriptionProperties[]
  base: string
  main: WeatherMeassureProperties
  visibility: number
  wind: WeatherWindProperties
  clouds: WeatherCloudProperties
  sys: WeatherLightProperties
}
