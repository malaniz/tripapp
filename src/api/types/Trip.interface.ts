import {ImageSourcePropType} from "react-native"
import {PlaceProperties} from "./Place.interface"

export interface KarmaProperties {
  point: number
  likes: number
  dislikes: number
  promoted: boolean
}

export interface TripPropierties {
  id: string
  name: string
  description: string
  thumbnail: ImageSourcePropType
  karma: KarmaProperties
  places: PlaceProperties[]
}

