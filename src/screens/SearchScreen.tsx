import { StyleSheet, FlatList, Image,  TextInput,  SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
import { fetchSearch } from '../../slides';
import { debounce } from "lodash";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    language: string;
    overview: string;
    imageUrl: string;
    backUrl: string;
  }

export default function SearchScreen() {

    const navigation: any = useNavigation();
    // searchResults is set in the slides file, yet set here again
    const [searchResults, setSearchResults] = useState<Movie[]>([]);


    const handleItemPress = (item: Movie) => {
        navigation.navigate('DS', {movieData: item});
    };

    const handleSearch = async (search: string): Promise<void> => {
        if (search && search.length > 2) {
            const results: Movie[] = await fetchSearch(search);
            if (results){
                setSearchResults(results);
            } else {
                setSearchResults([]);
            }
        } else {
            setSearchResults([]);
        }
      };
    
      const handleTextDebounce = useCallback(
        debounce( (text: string) => {
            handleSearch(text);
        }, 300) as (text: string) => void, 
        [handleSearch]
        );

  return (
      <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.bg}
      >
        <SafeAreaView 
            // style={styles.page}
        >
          <TextInput 
            onChangeText={text => handleTextDebounce(text)}  
            style={styles.searchBox}
            placeholder='Search'
            placeholderTextColor={'gray'}
          />

        <FlatList 
            // style={styles.slideContainer}
            // keyExtractor={() => uuidv4()}
            data={searchResults}
            numColumns={2}
            renderItem={({item}) => (
                <TouchableOpacity
                    // key={uuidv4()}
                    onPress={() => handleItemPress(item)}
                    style={{width: 240, 
                        height: 350, 
                    }}
                >
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.image}
                    />
                </TouchableOpacity>
            )} 
            horizontal={false}
            bounces={false}
            snapToAlignment="center"
        />

        </SafeAreaView>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bg: {
      zIndex: -1,
      flex: 1,
      resizeMode: 'crop',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: { 
        flex: 1,
        borderRadius: 20, 
        margin: 10,
        resizeMode: 'contain',
    },
    searchBox: {
        width: 450,
        padding: 15, 
        borderColor: '#202020', 
        backgroundColor: '#353535',
        color: 'white',
        borderWidth: 2, 
        borderRadius: 20, 
        marginVertical: 50,
        marginHorizontal: 15,
        fontSize: 24,
    },
});