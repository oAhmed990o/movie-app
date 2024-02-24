import { 
    View, 
    StyleSheet, 
    FlatList, 
    Image, 
    useWindowDimensions, 
    TextInput, 
    ScrollView,
    Text
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import {movieData} from '../components/Onboarding';

export default function detailScreen({route}) {
  const {movieData} = route.params;
return (
    <View>
      <ScrollView>
      <Image
            // key={item.id}
            source={{ uri: movieData.backUrl }}
            style={styles.image}
        />
        <View>
            <Text>Title: {movieData.title}</Text>
            <Text>
                Release Date: {movieData.releaseDate} . Language: {movieData.language}
            </Text>
            <Text>Overview: {movieData.overview}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    image: { 
        width: '95%', 
        borderRadius: 5, 
        margin: 7, 
        resizeMode: 'cover',
    },
});