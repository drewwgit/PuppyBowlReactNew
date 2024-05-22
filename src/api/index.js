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

    getPlayer: builder.query({
      query: (id)=> 'players/$(id)'
    }),

    addPlayer: builder.mutation({
      query: (body)=>({
        url: "players",
        method: "POST",
        body: body
      })
    }),

    deletePlayer: builder.mutation({
      query: (id)=>({
        url: "players/"+id, 
        method: "DELETE",
         })
       })
    }),
});

export const { useGetPlayersQuery, useGetPlayerQuery, useAddPlayerMutation, useDeletePlayerMutation } = puppyBowlApi;