import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import AppNav from './src/navigation/index';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
       <QueryClientProvider client={queryClient}>
          <AppNav/>
        </QueryClientProvider>
    </>
  );
}
