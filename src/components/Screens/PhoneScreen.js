import { Text, View, StyleSheet } from "react-native";

const PhoneScreen = () => (
    <View style={styles.container}>
      <Text>Phone Screen</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default PhoneScreen;