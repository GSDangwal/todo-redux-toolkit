import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./textSlice"
const store = configureStore({
    reducer: {
        item: textReducer,
    },
})

export default store;