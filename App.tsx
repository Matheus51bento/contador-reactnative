import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador</Text>
      <Text style={styles.text}>{count}</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.text}>+</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(count - 1)}>
        <Text style={styles.text}>-</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9803fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
  button: {
    backgroundColor: "#470175",
    borderRadius: 8,
    color: "#fff",
    width: "30%",
    paddingVertical: 10,
    alignItems: "center",
    marginVertical: 5
  }
});
