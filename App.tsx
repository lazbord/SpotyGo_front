import * as React from 'react';
import { StyleSheet, View, Dimensions,TextInput, Text, Image } from 'react-native'; // Import Text and Image from react-native
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,1)']}
        style={styles.gradient}
      />
      <View style={styles.roundedRect}>
        {/* <Image
          style={styles.image}
          source={require('/home/lazare/SpotyGo_front/assets/Spotygo.png')}
        /> */}
        <Text style={styles.text}>Adresse e-mail ou nom d'utilisateur</Text>
        <TextInput
      value={username}
      onChangeText={text => setUsername(text)}
    />
        <Text style={styles.text}>Mot de passe</Text>
        <TextInput
      value={password}
      onChangeText={text => setPassword(text)}
    />
      </View>
    </View>
  );
}

//for git lol

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e2e2e',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  roundedRect: {
    width: '37%',
    height: '90%',
    backgroundColor: '#121212',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  // image: {
  //   width: '5%', // Adjust the width to make the image smaller (50% of the parent width)
  //   aspectRatio: 1, // Maintain aspect ratio (adjust as per your image's aspect ratio)
  //   resizeMode: 'contain', // Adjust the resizeMode based on your image aspect ratio requirement
  // },
});
