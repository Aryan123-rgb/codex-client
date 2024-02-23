import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        compilerReducer: compilerSlice,
        userReducer: userSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
