import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import UserList from './components/UserList';
import BookmarkedUsers from './components/BookmarkedUsers';
import SearchBar from './components/SearchBar';

const App = () => {
    const [activeTab, setActiveTab] = React.useState('users');

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div>
                    <SearchBar />
                    <div>
                        <button onClick={() => setActiveTab('users')}>Users</button>
                        <button onClick={() => setActiveTab('bookmarks')}>Bookmarked Users</button>
                    </div>
                    {activeTab === 'users' ? <UserList /> : <BookmarkedUsers />}
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;
