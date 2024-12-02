import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../redux/slices/bookmarksSlice';

const UserCard = ({ user }) => {
    const dispatch = useDispatch();
    const isBookmarked = useSelector((state) =>
        state.bookmarks.bookmarkedUsers.includes(user.id)
    );

    const handleBookmark = () => dispatch(toggleBookmark(user.id));

    return (
        <div className="user-card">
            <img src={user.avatar_url} alt="avatar" className="avatar" />
            <h3>{user.login}</h3>
            <button onClick={handleBookmark}>
                {isBookmarked ? 'Unbookmark' : 'Bookmark'}
            </button>
        </div>
    );
};

export default UserCard;
