import { trip1 } from "../mockupData/trip1"
import { trip2 } from "../mockupData/trip2"
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

  const t1 = convertJsonDataToTrip(trip1)
  const t2 = convertJsonDataToTrip(trip2)
  const t3 = convertJsonDataToTrip(trip2)
  const mytrips = [t1, t2, t3]


export async function getTrips(): Promise<TripPropierties[]> {
  return mytrips
}


export async function getTrip(id: string): Promise<TripPropierties> {
  console.log(`GET ${id}`)
  const result = mytrips.find((x) => x.id === id)
  console.log(result)
  return result
}

