import { Text, View, StyleSheet } from "react-native";

const BookingsScreen = () => (
    <View style={styles.container}>
      <Text>Booking Screen</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default BookingsScreen;