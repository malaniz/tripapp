import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {View, Dimensions, StyleSheet} from 'react-native';

export default function ({trip}: any) {

  let paths = [];
  for (let i = 0; i < trip.places.length - 1; i++) {
    paths.push([trip.places[i], trip.places[i + 1]]);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: trip.places[0].lat,
          longitude: trip.places[0].lng,
          latitudeDelta: 5.1622,
          longitudeDelta: 5.1121,
        }}>
        {paths.map((path, index) => (
          <MapViewDirections key={index}
            origin={{
              latitude: path[0].lat,
              longitude: path[0].lng,
            }}
            destination={{
              latitude: path[1].lat,
              longitude: path[1].lng,
            }}
            apikey={'AIzaSyAYO1VY0LZZ5yCmeumeP8o9AGTx-AUf05Y'}
            strokeWidth={4}
            strokeColor="#111111"
          />
        ))}

        {trip.places.map((place, index) => (
          <Marker key={index}
            coordinate={{latitude: place.lat, longitude: place.lng}} />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
  },
});
