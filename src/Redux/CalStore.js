import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Slice'

const glStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default glStore