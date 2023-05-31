import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Logos() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/path.png')} />
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/images/logo.png')} />
      </View>
      <View style={styles.image}>
        <Image source={require('../assets/images/heart.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
