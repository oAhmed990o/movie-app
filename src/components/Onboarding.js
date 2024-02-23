import { View, StyleSheet, FlatList, Image, useWindowDimensions, TextInput } from 'react-native';
import React from 'react';
import slides from '../../slides';
import OnboardingItem from './OnboardingItem';

export default Onboarding = () => {
    const { width } = useWindowDimensions();
    const itemWidth = width*1.5;

    return (
    <View style={styles.container}>
      <FlatList 
            data={slides} 
            renderItem={({item, index}) => <OnboardingItem item={item} index={index} width={itemWidth} slides={slides}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            snapToAlignment="center"
            // snapToInterval={itemWidth}
        />

        <FlatList 
            data={slides} 
            renderItem={({item, index}) => <OnboardingItem item={item} index={index} width={itemWidth} slides={slides}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            snapToAlignment="center"
            // snapToInterval={itemWidth}
        />
        
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