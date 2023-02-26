import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/home';


const HomeScreen = ({ navigation }) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, overflow: 'hidden' }}>
      <Image
        source={require('../../../assets/seeksure.png')}
        style={styles.imageContainer}
      />
      <TouchableOpacity
        onPress={goToHome}
        style={styles.button}
      >
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
      imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 24,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: 'center',
        alignItems: 'center',
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    borderColor: 'black',
      borderWidth: 2,
      borderRadius: 25,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginVertical: 10,
      marginTop: 20,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
  });

export default HomeScreen;
