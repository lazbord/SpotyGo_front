import * as React from 'react';
import { StyleSheet, View, Image, TextInput, Text, Pressable, Linking } from 'react-native';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { YOUTUBE_API_KEY } from '@env';
import axios from 'axios';

export default function Header() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  const [searchQuery, setSearchQuery] = React.useState('');

  const HandleOnKeyPress = (event) => {
    const key = event.nativeEvent.key;
    if (key === "Enter") {
      SearchMusic(searchQuery);
    }
  };

  const SearchMusic = async (query) => {
    if (!query) return;

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_API_KEY,
          part: 'snippet',
          q: query,
          type: 'video',
          maxResults: 10
        },
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

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
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onKeyPress={HandleOnKeyPress}
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
