import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as IconsSolid from 'react-native-heroicons/solid';
import * as IconsOutlined from 'react-native-heroicons/outline';

import OnBoarding from './components/Onboarding';

import TripListScreen from './screens/TripListScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DetailTripScreen from './screens/Trip/DetailTripScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = 'HomeTab';
const setttingsName = 'SettingsTab';

const HomeScreen = () => (
  <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let Icon = IconsOutlined.ExclamationCircleIcon;
        let rn = route.name;

        if (rn === homeName) {
          Icon = focused ? IconsSolid.HomeIcon : IconsOutlined.HomeIcon;
          color = focused ? '#dcfe00' : color;
        } else if (rn === setttingsName) {
          Icon = focused ? IconsSolid.CogIcon : IconsOutlined.CogIcon;
          color = focused ? '#dcfe00' : color;
        }
        return <Icon size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: '#111',
        color: '#fff',
      },
    })}>
    <Tab.Screen
      options={{headerShown: false}}
      name={homeName}
      component={TripListScreen}
    />
    <Tab.Screen
      options={{headerShown: false}}
      name={setttingsName}
      component={SettingsScreen}
    />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="OnBoarding"
        component={OnBoarding}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        name="Detail"
        component={DetailTripScreen}
        initialParams={{trip: 'trip2'}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
