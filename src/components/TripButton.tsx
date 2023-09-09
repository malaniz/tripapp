import React from 'react';
import {Link} from '@react-navigation/native';
import {Image, Text, View, StyleSheet} from 'react-native';
import {TripPropierties} from '../api/types/Trip.interface';

function TripButton({trip}: {trip: TripPropierties}) {
  return (
    <Link to="/Detail" params={{trip: trip.id}} className="absolute top-0">
      <View className="relative max-w-full">
        <Image source={trip.thumbnail} className="rounded-md h-56 max-w-full" />
        <View className="absolute w-full rounded-b-md bottom-0 px-2 py-2"
          style={styles.container}>
          <Text className="text-white text-2xl px-1" style={styles.title}>
            {trip.name}
          </Text>
          <Text className="drop-shadow-md text-white text-md">
            {trip.description}
          </Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    textShadowColor: 'rgba(255, 255, 255, 0.55)',
    textShadowOffset: {width: -2, height: 1},
    textShadowRadius: 3,
  },
});

export default TripButton
