import { Text, View, StyleSheet } from "react-native";

const VehicleScreen = () => (
    <View style={styles.container}>
      <Text>Vehicle Screen</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default VehicleScreen;