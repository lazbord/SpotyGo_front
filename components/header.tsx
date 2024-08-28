import * as React from 'react';
import { StyleSheet, View, Image, TextInput, Text, Pressable, Linking} from 'react-native';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';


export default function Header() {

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('/home/lazare/SpotyGo_front/assets/SpotyGo.png')}
        />
      </View>


      <View style={styles.searchBarPlaceholder}>

        <View style={styles.homeContainer}>
          <Image
            style={styles.home}
            source={require('/home/lazare/SpotyGo_front/assets/home.png')}
          />
        </View>

        <View style={styles.searchBarContainer}>
          <Image
            style={styles.loupe}
            source={require('/home/lazare/SpotyGo_front/assets/loupe.png')}
          />
          
          <TextInput
            style={styles.searchBar}
            placeholder="Que souhaitez-vous écouter ?"
            placeholderTextColor="#888"
          />
        </View>

      </View>


      <Pressable style={({ hovered }) => [
            styles.github,
            hovered && { transform: [{ scale: 1.05 }] },
          ]}
          onPress={() => Linking.openURL('https://github.com/lazbord')}>
      <Text style={styles.githubtext}>Mon profil Github</Text>
      
      </Pressable>

      <View style={styles.profileContainer}>
        <Image
          style={styles.profile}
          source={require('/home/lazare/SpotyGo_front/assets/profile.png')}
        />
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    marginLeft: 30,
  },
  homeContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1F1F1F',
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  home: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  logo: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  profile: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1F1F1F',
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  searchBarPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minWidth: 650,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 35,
    paddingHorizontal: 15,
    height: 48,
    width: 500,
  },
  loupe: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#A9A9A9',
    marginRight: 1,
  },
  searchBar: {
    flex: 1,
    color: 'white',
    height: '100%',
    paddingHorizontal: 10,
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    outlineStyle: 'none',
  },
  github: {
    width:160,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 25,
  },
  githubtext:{
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14,
  }
});
