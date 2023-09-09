import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailTripScreen from './screens/Trip/DetailTripScreen';

const Stack = createNativeStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail"
        component={DetailTripScreen}
        initialParams={{trip: 'trip2'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
