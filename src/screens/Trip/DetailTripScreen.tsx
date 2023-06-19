import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {getTrip} from '../../api';
import {TripPropierties} from '../../api/types/Trip.interface';
import Section from '../../components/Section';

export default function () {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';
  const [trip, setTrip] = React.useState<TripPropierties | null>(null);


  const doGetTrips = React.useCallback(async () => {
    try {
      const data = await getTrip("trip1");
      console.log(data);
      setTrip(data);

    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    doGetTrips();
  }, [doGetTrips])

  if (!trip) {
    return (
      <SafeAreaView className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <Section title="Loading">
            <Text> We are trying to load your trip</Text>
          </Section>
        </View>
      </SafeAreaView>
    )
  }

  let paths = [];
  for (let i = 0; i < trip.places.length - 1; i++) {
    paths.push([trip.places[i], trip.places[i + 1]]);
  }

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View style={styles.container}>
          <MapView
            style={styles.maps}
            initialRegion={{
              latitude: trip.places[0].lat,
              longitude: trip.places[0].lng,
              latitudeDelta: 5.1622,
              longitudeDelta: 5.1121,
            }}
          >
            { paths.map((path, index) => (
              <MapViewDirections key={index}
                origin={{
                  latitude: path[0].lat,
                  longitude: path[0].lng,
                }}
                destination={{
                  latitude: path[1].lat,
                  longitude: path[1].lng,
                }}
                apikey={"AIzaSyAYO1VY0LZZ5yCmeumeP8o9AGTx-AUf05Y"}
                strokeWidth={4}
                strokeColor="#111111"
              />
            ))}

            {trip.places.map((place, index) => {
              return (
                <Marker key={index} coordinate={{latitude: place.lat, longitude: place.lng}} />
              )
            })}
          </MapView>

        </View>
        <View className="bg-white dark:bg-black flex-1 justify-center">
          <Section title={`Name: ${trip.name}`}>
            <View>
              <Text>Description: {trip.description}</Text>
              {trip.places.map((place, index) => {
                return (
                  <View key={index} className="h-10 pt-5">
                    <Text>{place.name}</Text>
                  </View>
                )
              })}
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
