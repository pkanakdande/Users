import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const BookmarkedUsers = () => {
    const bookmarkedUsers = useSelector((state) => state.bookmarks.bookmarkedUsers);
    const allUsers = useSelector((state) => state.users.allUsers);

    const users = allUsers.filter((user) => bookmarkedUsers.includes(user.id));

    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};

export default BookmarkedUsers;
