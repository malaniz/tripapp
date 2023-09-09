import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

export default function () {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-gray-900">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-400 p-3 rounded-full ml-4"
            onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-white font-bold text-4xl text-center py-8">
            Sign up
          </Text>
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tr-3xl rounded-tl-3xl">
        <View className="form space-y-w">
          <Text className="text-gray-700 ml-4"> Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="Chelo Rider"
            placeholder="Enter email"
          />
          <Text className="text-gray-700 ml-4"> Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="chelo@gmail.com"
            placeholder="Enter email"
          />
          <Text className="text-gray-700 ml-4"> Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            value="testing1234"
            placeholder="Enter Password"
          />
          <TouchableOpacity
            className="mt-4 py-3 bg-yellow-400 rounded-xl"
            onPress={() => {
              navigation.navigate('Login')
            }}>
            <Text className="font-xl font-bold text-center text-gray-700">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-4">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require('../../assets/icons/google.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require('../../assets/icons/instagram.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require('../../assets/icons/facebook.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center py-4">
          <Text className="text-gray-700">
            Already have an account?
            <Link to="/Login">
              <Text className="font-semibold text-yellow-400">Login</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}
