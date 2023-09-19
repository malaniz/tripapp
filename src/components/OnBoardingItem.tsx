import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function ({item, currentIndex, finalSlideIndex}: any) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  if (currentIndex === finalSlideIndex) {
    console.log('final');
  }

  return (
    <View
      className="flex justify-center items-center"
      style={{width, height: height}}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.container}>
        <Text className="text-white font-bold text-4xl text-center">
          {item.title}
        </Text>
        <Text
          className="font-semibold text-white text-md"
          style={styles.slogan}>
          {item.description}
        </Text>
        {currentIndex === finalSlideIndex ? (
          <View className="space-y-4">
            <TouchableOpacity
              className="py-4 bg-yellow-400 rounded-full my-1 mx-9"
              style={{backgroundColor: '#dcfe00'}}
              onPress={() => navigation.navigate('Welcome')}>
              <Text className="font-semibold text-black text-center"> Go </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 0.7,
  },
  container: {
    flex: 0.3,
  },
  slogan: {
    color: '#dcfe00',
  },
  title: {},
});
