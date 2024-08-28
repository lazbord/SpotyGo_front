import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Header />
      </View>
      
      <View style={styles.container}>
        <View style={styles.left}></View>

        <View style={styles.center}>
          <LinearGradient
            colors={['#126930', '#0a3b1b', '#072b14', '#121212']}
            locations={[0, 0.2,0.3,0.55, 1]}
            style={styles.centerGradient}
          >
          </LinearGradient>
        </View>

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
    height: 65,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    flex: 1,
    backgroundColor: '#121212',
    marginLeft: 12,
    borderRadius: 10,
  },
  center: {
    width: '70%',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  centerGradient: {
    flex: 1,
  },
  right: {
    flex: 1,
    backgroundColor: '#121212',
    marginRight: 12,
    borderRadius: 10,
  },
  footer: {
    height: 90,
    width: '100%',
  },
});
