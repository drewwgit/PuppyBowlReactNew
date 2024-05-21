import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const puppyBowlApi = createApi({
  reducerPath: 'puppyBowlApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/'
  }),   
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => 'players',
    }),
    getPlayerByName: builder.query({
      query: (name) => `players/${name}`, 
    }),
  }),
});

export const { useGetPlayerByNameQuery, useGetPlayersQuery } = puppyBowlApi;

export const deletePlayer = async (id) => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`, {
      method: 'DELETE',
    });
    return response.ok; 
  } catch (error) {
    console.error('Error deleting the specified player:', error);
  }
};