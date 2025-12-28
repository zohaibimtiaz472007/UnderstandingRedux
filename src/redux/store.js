import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./features/counterSlice";

export const store = configureStore({
    reducer: {
        // Now we will create the slices. Slices are actually the features.
        counter: counterReducer
    }
})