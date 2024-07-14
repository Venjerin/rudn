import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/api";

const rootReducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer
})

export const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare().concat(userApi.middleware)
})

