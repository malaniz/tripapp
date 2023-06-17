import {PlaceProperties} from "./Place.interface"

export interface KarmaProperties {
  point: number
  likes: number
  dislikes: number
  promoted: boolean
}

export interface TripPropierties {
  name: string
  description: string
  karma: KarmaProperties
  places: PlaceProperties[]
}

