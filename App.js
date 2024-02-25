import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import AppNav from './src/navigation/index';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
       <QueryClientProvider client={queryClient}>
              <AppNav/>
              {/* <TextInput 
                    placeholder='Search'
                    style={styles.searchBox}
                    value={searchQuery}
                    onChangeText={(query) => handleSearch(query)}
                /> */}
        </QueryClientProvider>
    </>
  );
}
