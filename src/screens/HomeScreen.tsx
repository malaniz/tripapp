import {Link} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native';
import {getTrips} from '../api';
import {TripPropierties} from '../api/types/Trip.interface';
import Section from '../components/Section';

export default function () {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';
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
  }, [doGetTrips])

  if (trips.length === 0) {
    return (
      <SafeAreaView className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <Section title="Loading">
            <Text> We are trying to load your trips</Text>
          </Section>
        </View>
      </SafeAreaView>
    )
  }

  console.log(JSON.stringify(trips, null, 2))

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
            {
              trips.map((trip, index) => (
                <View key={index}>
                  <Link to="/Detail">
                    <Text>{trip.name}</Text>
                  </Link>
                </View>
              ))
            }
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
