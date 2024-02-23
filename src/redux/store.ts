import { configureStore } from "@reduxjs/toolkit";
import compilerSlice from "./slices/compilerSlice";
import userSlice from "./slices/userSlice";
import { api } from "./slices/api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        compilerReducer: compilerSlice,
        userReducer: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
