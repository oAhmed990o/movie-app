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
import {allSlides, slideCategories} from '../../slides';
import { useNavigation } from '@react-navigation/native';

export default function Onboarding() {

    const navigation = useNavigation();

    const handleItemPress = (item) => {
        navigation.navigate('DS', {movieData: item});
        console.log(item)
    };

    const handleSearchPress = () => {
        navigation.navigate('SS');
    };

    return (
        <>
        <TouchableOpacity
            onPress={() => handleSearchPress()}
            style={styles.searchTouchable}
        >
            <Image
                source={require('../../assets/images/search.png')}
                style={styles.searchIcon}
                />
        </TouchableOpacity>
    <ScrollView 
        contentContainerStyle={styles.container}
        horizontal={false}
    >
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.bg}
          >
        <SafeAreaView style={styles.page}>

        {allSlides.map((slide, index) => (
            <>
            <Text style={styles.category}>
                {slideCategories[index]}
            </Text>
            
            <FlatList style={styles.slideContainer}
                // key={index}
                data={slide}
                renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => handleItemPress(item)}
                        
                        style={{width: 280, 
                            height: 400, 
                        }}
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
            </>
        ))}
            </SafeAreaView>
            </ImageBackground>
            </ScrollView>
        </>
            );
        }
        
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: { 
        flex: 1,
        borderRadius: 20, 
        margin: 10,
        resizeMode: 'contain',
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
    searchTouchable: {
    width: 70,
    height: 70,
    right: 20,
    marginTop: 20,
    position: 'absolute',
    zIndex: 11,
    },
    searchIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 10,
    position: 'absolute',
    zIndex: 11,
    },
    category: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15,
        marginBottom: 5,
    }
});