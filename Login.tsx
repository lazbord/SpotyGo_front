import * as React from 'react';
import { StyleSheet, View, Dimensions,TextInput, Text, Image, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

export default function Login() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,1)']}
        style={styles.gradient}
      />
      <View style={styles.roundedRect}>
        
        <View>
          <Image
            style={styles.image}
            source={require('/home/lazare/SpotyGo_front/assets/SpotyGo.png')}/>
        </View>
        
        <View>
          <Text style={styles.title}>SpotyGO</Text>
        </View>

        <View>

          <View style={styles.inputs}>
            <Text style={styles.hint}>Adresse e-mail ou nom d'utilisateur</Text>
            <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="Adresse e-mail ou nom d'utilisateur"
          style={styles.TextInput}/>
          </View>

          <View style={styles.inputs}>
            <Text style={styles.hint}>Mot de passe</Text>
            <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Mot de passe"
          style={styles.TextInput}/>
          </View>

          <Pressable style={styles.loggin_btn} onPress={() => Alert.alert("login btn pressed")}>
            <Text style={styles.loggin_btn_txt}>Se connecter</Text>
          </Pressable>

        </View>

      </View>
    </View>
  );
}

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
  inputs: {
    margin: 10,
  },
  hint: {
    color: 'white',
    fontSize: 13,
    fontFamily : 'Montserrat_600SemiBold',
    marginBottom : 10,
  },
  TextInput: {
    color: 'gray',
    borderColor: 'gray',
    borderWidth : 1,
    borderRadius : 5,
    width : 320,
    height : 48,
    padding: 15,
    fontFamily : 'Montserrat_500Medium',
  },
  loggin_btn :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ed760',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderRadius: 25,
    margin: 10,
  },
  loggin_btn_txt :{
    fontFamily : 'Montserrat_600SemiBold',
  },
  trait :{
    margin : 50,
    borderBottomColor: '#2e2e2e',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title :{
    color: 'white',
    fontSize: 30,
    fontFamily : 'Montserrat_600SemiBold',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
