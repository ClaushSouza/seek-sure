import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Seja bem-vindo(a) ao Seek Sure</Text>
      </View>
      <View style={{ flex: 9 }}>
      </View>
    </View>
  );
};

export default HomeScreen;
