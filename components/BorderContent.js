import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


export default function BorderContent() {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>
          SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
        </Text>
      </View>
      <View style={styles.subtext}>
        <Text style={styles.sub}>£5,000,000 GBP</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  textcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 10,
  },
  subtext: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sub: {
    color: 'white',
  },
});
