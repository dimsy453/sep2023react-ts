import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slyces";

const store = configureStore({
    reducer:{
        cars: carReducer
    }
})

export {
    store
}