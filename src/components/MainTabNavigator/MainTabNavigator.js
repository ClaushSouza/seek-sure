// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// import HomeScreen from '../Screens/HomeScreen';

// const Tab = createBottomTabNavigator();

// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Veiculos') {
//             iconName = focused ? 'car-sport' : 'car-sport-outline';
//           } else if (route.name === 'Telefone') {
//             iconName = focused ? 'call' : 'call-outline';
//           } else if (route.name === 'Hoteis Agendados') {
//             iconName = focused ? 'book' : 'book-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Veiculos" component={VeiculosScreen} />
//       <Tab.Screen name="Telefone" component={TelefoneScreen} />
//       <Tab.Screen name="Hoteis Agendados" component={HoteisAgendadosScreen} />
//     </Tab.Navigator>
//   );
// };

// export default MainTabNavigator;