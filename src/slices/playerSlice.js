import {createSlice} from "@reduxjs/toolkit"
import { puppyBowlApi } from "../api"

const playerSlice = createSlice({
    name: "players",
    initialState: [],
    reducers: {

    },

    extraReducers: (builder)=>{
        builder.addMatcher(puppyBowlApi.endpoints.getPlayers.matchFulfilled, (state, {payload})=>{
            return payload.data.players
        })
        
        builder.addMatcher(puppyBowlApi.endpoints.addPlayer.matchFulfilled, (state, {payload})=>{
            state.push(payload.data.newPlayer)
        })

        builder.addMatcher(puppyBowlApi.endpoints.deletePlayer.matchFulfilled, (state, {payload})=>{
            console.log(payload)
            return state; 
        })

    }

}) 

export default playerSlice.reducer; 