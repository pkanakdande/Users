import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        bookmarkedUsers: [],
    },
    reducers: {
        toggleBookmark: (state, action) => {
            const userId = action.payload;
            if (state.bookmarkedUsers.includes(userId)) {
                state.bookmarkedUsers = state.bookmarkedUsers.filter(id => id !== userId);
            } else {
                state.bookmarkedUsers.push(userId);
            }
        },
    },
});

export const { toggleBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
