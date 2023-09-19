import {Link} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ({navigation}: any) {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Let's Get Started!
        </Text>
      </View>
      <View className="space-y-4">
        <TouchableOpacity
          className="py-3 bg-yellow-400 mx-7 rounded-xl"
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-xl font-bold text-center text-gray-700">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center py-4">
        <Text className="text-white font-semibold">
          Already have an account?
          <Link to="/Login">
            <Text
              className="font-semibold text-yellow-400"
              style={styles.loginText}>
              Login
            </Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#dcfe00',
  },
  loginText: {
    color: '#dcfe00',
  },
})
