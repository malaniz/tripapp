import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default function () {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Setting Screen
        </Text>
      </View>
    </SafeAreaView>
  );
}
