import {API_KEY} from "./apikey";
import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const BASE_URL = "https://api.themoviedb.org/3";

const popular = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const nowPlaying = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`; 
const upcoming = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const topRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;


const movieSearch = (query) => `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`;
const movieDetails = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

export const fetchPopular = async () => {
  const response = await axios.get(popular);
  return response.data;
};

export const fetchNowPlaying = async () => {
  const response = await axios.get(nowPlaying);
  return response.data;
};

export const fetchUpcoming = async () => {
  const response = await axios.get(upcoming);
  return response.data;
};

export const fetchTopRated = async () => {
  const response = await axios.get(topRated);
  return response.data;
};

export const fetchMovieSearch = async (query) => {
  const response = await axios.get(movieSearch(query));
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(movieDetails(id));
  return response.data;
};
