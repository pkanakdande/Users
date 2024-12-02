import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/slices/usersSlice';
import UserCard from './UserCard';

const UserList = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.allUsers);
    const searchQuery = useSelector((state) => state.users.searchQuery);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://api.github.com/users?per_page=10&page=${page}`);
            const data = await response.json();
            dispatch(setUsers(data));
        };
        fetchUsers();
    }, [page, dispatch]);

    const filteredUsers = users.filter((user) =>
        user.login.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
        </div>
    );
};

export default UserList;
