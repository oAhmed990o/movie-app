import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native';
import AppNavigation from './src/navigation';
import Onboarding from './src/components/Onboarding';
import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import {API_KEY} from "./utils/apikey";
// import BASE_URL, { fetchMovieSearch, fetchPopular } from "./utils/movieapi";
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
// import { fetchPopular } from './utils/movieapi';

const queryClient = new QueryClient();

export default function App() {
  // const [data, setData] =  useState([]);
  // const [error, setError] = useState(null);
  // const [fullData, setFullData] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   const popularResp = fetchPopular();
  //   // console.log(popularResp);
  //   // const json = popularResp.json();
  //   // console.log(json.results);

  //     // fetchMovieSearch();
  //   }
  // ,[]);

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // }

  return (
    // <AppNavigation/>
      <QueryClientProvider client={queryClient}>
        <ImageBackground
        source={require('./assets/images/bg.jpg')}
        style={styles.bg}
        >
          <SafeAreaView style={styles.container}>
            {/* <TextInput 
                  placeholder='Search'
                  style={styles.searchBox}
                  value={searchQuery}
                  onChangeText={(query) => handleSearch(query)}
              /> */}
            <Onboarding/>
          </SafeAreaView>
        </ImageBackground>
      </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  bg: {
    // flex: 1,
    zIndex: -1,
    resizeMode: 'crop',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 35,
    paddingBottom: 35,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
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
