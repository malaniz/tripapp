import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {getTrips} from '../api';
import {TripPropierties} from '../api/types/Trip.interface';
import Section from '../components/Section';
import TripButton from '../components/TripButton';

export default function () {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-gray-900 dark:bg-slate-900';
  const [trips, setTrips] = React.useState<TripPropierties[]>([]);

  const doGetTrips = React.useCallback(async () => {
    try {
      const data = await getTrips();
      setTrips(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    doGetTrips();
  }, [doGetTrips]);

  if (trips.length === 0) {
    return (
      <SafeAreaView className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <Section title="Loading">
            <Text> We are trying to load your trips</Text>
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
        <View
          className="bg-gray-900 dark:bg-black flex-1 justify-center"
          style={styles.tripButtonsContainer}>
          <Section title="Viajes que no te podes perder">
            {trips.map((trip, index) => (
              <TripButton trip={trip} key={index} />
            ))}
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tripButtonsContainer: {
    marginTop: -40,
  },
});
