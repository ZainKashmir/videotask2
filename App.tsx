import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainVideo from './components/MainVideo';


export default function App() {
  return (
    <View style={styles.container}>
      <MainVideo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
