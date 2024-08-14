import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.main}>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  main: {
    flex: 1,
    top: 10,
    width: '55%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10, // This margin will now be respected
  },
  footer: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
