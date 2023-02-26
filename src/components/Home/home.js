import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from '../Screens/HomeScreen';
import VehicleScreen from '../Screens/VehicleScreen';
import PhoneScreen from '../Screens/PhoneScreen';
import BookingsScreen from '../Screens/BookingScreen';





const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Vehicle" component={VehicleScreen} />
        <Tab.Screen name="Phone" component={PhoneScreen} />
        <Tab.Screen name="Bookings" component={BookingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
