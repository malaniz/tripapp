import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Map from '../../components/Map'

import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {getTrip} from '../../api';
import {TripPropierties} from '../../api/types/Trip.interface';
import Section from '../../components/Section';

export default function ({route}: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';
  const [trip, setTrip] = React.useState<TripPropierties | null>(null);

  const {trip: tripId} = route.params;
  console.log({tripId});

  const doGetTrips = React.useCallback(async () => {
    try {
      const data = await getTrip(tripId);
      setTrip(data);
    } catch (error) {
      console.log(error);
    }
  }, [tripId]);

  React.useEffect(() => {
    doGetTrips();
  }, [doGetTrips]);

  if (!trip) {
    return (
      <SafeAreaView className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <Section title="Loading">
            <Text> We are trying to load your trip</Text>
          </Section>
        </View>
      </SafeAreaView>
    );
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
        <View className="bg-white dark:bg-black flex-1 justify-center">
          <Section title={`Name: ${trip.name}`}>
            <View>
              <Text>Description: {trip.description}</Text>
              {trip.places.map((place, index) => {
                return (
                  <View key={index} className="h-10 pt-5">
                    <Text>{place.name}</Text>
                  </View>
                );
              })}
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tripButtonsContainer: {
    marginTop: -40
  }
});
