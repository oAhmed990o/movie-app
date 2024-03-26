import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AppNav from './src/navigation/index';

const queryClient = new QueryClient();

// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');
// const mongoUrl = 'mongodb://localhost:27017';

// mongoose.connect(mongoUrl)
//   .then(() => {
//     console.log('database connection established');
//   }).catch((e: any)=>{
//     console.log('mein message: \n');
//     console.log(e);
//   });

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <AppNav/>
      </QueryClientProvider>
  );
}

// app.get('/', (req: any, res: any)=>{
//   return (
//     <QueryClientProvider client={queryClient}>
//       <AppNav/>
//     </QueryClientProvider>
//   );
// });

// app.listen(3000, () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <AppNav/>
//     </QueryClientProvider>
//   );
// });
