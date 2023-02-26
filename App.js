import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import HomeScreen from './src/components/Homescreen';
import Home from './src/components/Home/home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} independent={true}  />
          <Stack.Screen name="Home" component={Home} independent={true} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    padding: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
