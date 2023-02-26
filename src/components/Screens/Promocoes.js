import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Promocoes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promoções</Text>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: 'https://picsum.photos/id/1/200/300' }} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Nome do hotel</Text>
          <Text style={styles.discount}>-30% de desconto</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discount: {
    fontSize: 16,
    color: '#ff5555',
  },
});

export default Promocoes;
