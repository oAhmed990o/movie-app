import { View, StyleSheet, FlatList, Image, useWindowDimensions, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import {popularSlides} from '../../slides';
import OnboardingItem from './OnboardingItem';
import {useQuery} from '@tanstack/react-query';
import { fetchPopular } from '../../utils/movieapi';
import axios from 'axios';
import { API_KEY } from '../../utils/apikey';
import { BASE_URL } from '../../utils/movieapi';

export default Onboarding = () => {

    const { width } = useWindowDimensions();
    const itemWidth = width*1.5;

    
    const [pop, SetPop] = useState([]);
    
    // useEffect(() => {
    //     fetchPopular()
    //     .then(res => {
    //         console.log(res["results"][0]["backdrop_path"]);
    //     })
    //     .catch(error => {
    //         console.log('Error fetching popular movies:', error);
    //     });
    // }, []);
    
    return (
    <View style={styles.container}>
      {/* <FlatList 
            data={pop? pop.results : []} 
            renderItem={({item, index}) => <OnboardingItem item={item} index={index} width={itemWidth} slides={pop}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            snapToAlignment="center"
            // snapToInterval={itemWidth}
        /> */}

        <FlatList 
            data={popularSlides}
            renderItem={({item}) => (
                <Image
                    key={item.id}
                    source={{ uri: item.imageUrl }}
                    style={{ width: 200, height: 300 }}  // Adjust the size as needed
                />
            )} 
            // renderItem={({item, index}) => <OnboardingItem item={item} index={index} width={itemWidth} slides={slides}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            snapToAlignment="center"
            // snapToInterval={itemWidth}
        />
{/* 
        <FlatList 
            data={slides} 
            renderItem={({item, index}) => <OnboardingItem item={item} index={index} width={itemWidth} slides={slides}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            snapToAlignment="center"
            // snapToInterval={itemWidth}
        /> */}
        
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
