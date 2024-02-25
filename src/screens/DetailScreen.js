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
// import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen() {

  // const navigation = useNavigation();
  const route = useRoute();
  const {movieData} = route.params;

  return (
    <View>
      <ScrollView>
      <Image
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
        // width: '95%',
        // flex: 1,
        height: 400,
        borderRadius: 20, 
        margin: 7, 
        resizeMode: 'cover',
    },
});