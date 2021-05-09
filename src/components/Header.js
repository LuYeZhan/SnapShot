import React, { useContext } from 'react';
import Form from './Form';
import Navigation from './Navigation';
import { PhotoContext } from '../context/PhotoContext';

const Header = () => {
    const { setSearchInput, searchInput } = useContext(PhotoContext);
    return (
        <div>
            <h1>SnapShot</h1>
            <Form input={searchInput} setInput={setSearchInput} />
            <Navigation setInput={setSearchInput} />
        </div>
    );
};

export default Header;
