import { trip1 } from "../mockupData/trip1"
import {PlaceProperties} from "./types/Place.interface"
import {TripPropierties} from "./types/Trip.interface"
import {WeatherProperties} from "./types/Weather.interface"

function convertJsonDataToTrip(trip: any): TripPropierties {
  const t1 = JSON.parse(JSON.stringify(trip))

  t1.places = t1.places.map((place:PlaceProperties) => {
    place.weather.dt = new Date(place.weather.dt)
    place.weather.sys.sunrise = new Date(place.weather.sys.sunrise)
    place.weather.sys.sunset = new Date(place.weather.sys.sunset)
    return place
  })

  return t1 as TripPropierties
}
export async function getTrips(): Promise<TripPropierties[]> {
  const t = convertJsonDataToTrip(trip1)

  return [t, t, t]
}


export async function getTrip(id: string): Promise<TripPropierties> {
  console.log(`GET ${id} -> returning trip1`)

  const t = convertJsonDataToTrip(trip1)
  return t
}



