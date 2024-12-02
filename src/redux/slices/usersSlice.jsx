import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        allUsers: [],
        searchQuery: '',
    },
    reducers: {
        setUsers: (state, action) => {
            state.allUsers = [...state.allUsers, ...action.payload];
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setUsers, setSearchQuery } = usersSlice.actions;
export default usersSlice.reducer;
