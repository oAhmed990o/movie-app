import { 
    View, 
    StyleSheet, 
    FlatList, 
    Image, 
    TextInput, 
    ScrollView,
    TouchableOpacity,
    Text,
    ImageBackground,
    SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {allSlides} from '../../slides';
import { useNavigation } from '@react-navigation/native';

export default function Onboarding() {

    const navigation = useNavigation();

    const handleItemPress = (item) => {
        // console.log(item);
        navigation.navigate('DS', {movieData: item});
    };

    return (
    <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.bg}
          >
        <SafeAreaView style={styles.page}>

        {allSlides.map((slide, index) => (
            <FlatList style={styles.slideContainer}
                key={index}
                data={slide}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => 
                            // navigation.navigate("DetailScreen")
                            handleItemPress(item)
                            // console.log(item)
                        }
                        
                        style={{width: 300}}
                    >
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                )} 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                snapToAlignment="center"
                />
                ))}
            </SafeAreaView>
            </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: { 
        flex: 1,
        borderRadius: 20, 
        margin: 7, 
        resizeMode: 'contain',
        zIndex: 10,
    },
    bg: {
        zIndex: -1,
        flex: 1,
        resizeMode: 'crop',
        alignItems: 'center',
        justifyContent: 'center',
      },
      page: {
        flex: 1,
        paddingTop: 35,
        paddingBottom: 35,
      },
      searchBox: {
        width: '95%',
        padding: 20, 
        borderColor: '#fff', 
        backgroundColor: '#e0dede',
        borderWidth: 1, 
        borderRadius: 8, 
        margin: 20,
        fontSize: 20,
    }
});