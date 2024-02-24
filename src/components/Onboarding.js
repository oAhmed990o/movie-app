import { 
    View, 
    StyleSheet, 
    FlatList, 
    Image, 
    useWindowDimensions, 
    TextInput, 
    ScrollView 
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {allSlides} from '../../slides';

export default Onboarding = () => {

    return (
    <View style={styles.container}>
    
        {allSlides.map((slide, index) => (
            <FlatList style={styles.slideContainer}
                key={index}
                data={slide}
                renderItem={({item}) => (
                    <Image
                        key={item.id}
                        source={{ uri: item.imageUrl }}
                        style={styles.image}
                    />
                )} 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                snapToAlignment="center"
            />
        ))}

    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // scrollViewContainer: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // slideContainer: {
    //     flexDirection: 'row',
    //     marginBottom: 20,
    // },
    image: { 
        width: 280, 
        borderRadius: 20, 
        margin: 7, 
        resizeMode: 'contain'
    },
});
