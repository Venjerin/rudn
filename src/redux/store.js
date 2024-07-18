import { authReducer } from "./slices/auth";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;