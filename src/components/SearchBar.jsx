import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/slices/usersSlice';
import { throttle } from 'react-throttle';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = useCallback(
        throttle((e) => {
            dispatch(setSearchQuery(e.target.value));
        }, 300),
        []
    );

    return <input type="text" placeholder="Search users..." onChange={handleSearch} />;
};

export default SearchBar;
