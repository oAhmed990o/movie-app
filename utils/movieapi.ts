import {API_KEY} from "./apikey";
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const BASE_URL = "https://api.themoviedb.org/3";

const popular = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const nowPlaying = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`; 
const upcoming = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const topRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;

const movieDetails = (id: string) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

const movieApiCall = async (endpoints: string, params?: {}) => {
  const options = {
    method: "GET",
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchPopular = () => {
  return movieApiCall(popular);
};

export const fetchNowPlaying = () => {
  return movieApiCall(nowPlaying);
};

export const fetchUpcoming = () => {
  return movieApiCall(upcoming);
};

export const fetchTopRated = () => {
  return movieApiCall(topRated);
};

export const fetchMovieDetails = (id: string) => {
  return movieApiCall(movieDetails(id));
};