import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userSliceState {
    currentUser: {
        userId?: string;
        username?: string;
        picture?: string;
        email?: string;
        savedCodes?: string[];
    };
    isLoggedIn: boolean;
}

const initialState: userSliceState = {
    currentUser: {},
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        updateCurrentUser: (
            state,
            action: PayloadAction<userSliceState["currentUser"]>
        ) => {
            state.currentUser = action.payload;
        },
        updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { updateCurrentUser, updateIsLoggedIn } = userSlice.actions;
