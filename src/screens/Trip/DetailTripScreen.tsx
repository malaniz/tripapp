import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native';
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
          <Section title="Nice Trips to make">
            <View>
              <Text>Name: {trip.name}</Text>
              <Text>Description: {trip.description}</Text>
              {trip.places.map((place, index) => {
                return (
                  <View>
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
