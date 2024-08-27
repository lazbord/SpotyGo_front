import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login';

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.header}></View>
      
      <View style={styles.container}>
        <View style={styles.left}></View>
        <View style={styles.center}></View>
        <View style={styles.right}></View>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    flex: 1,
    backgroundColor: '#121212',
    margin: 5,
    borderRadius: 10,
  },
  center: {
    width: '55%',
    backgroundColor: '#121212',
    margin: 5,
    borderRadius: 10,
  },
  right: {
    flex: 1,
    backgroundColor: '#121212',
    margin: 5,
    borderRadius: 10,
  },
  footer: {
    height: 90,
    width: '100%',
    backgroundColor: 'green',
  },
});
