import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api";
import playerSlice from "../slices/playerSlice";

const store = configureStore({
    reducer:{
        players:playerSlice,
        [puppyBowlApi.reducerPath]: puppyBowlApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(puppyBowlApi.middleware)
})

export default store;