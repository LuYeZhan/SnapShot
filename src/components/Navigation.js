import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ setInput }) => {
    const handleResetInput = () => {
        setInput('');
    };
    return (
        <nav className='main-nav'>
            <ul>
                <li>
                    <NavLink to='/mountain' onClick={handleResetInput}>
                        Mountain
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/beach' onClick={handleResetInput}>
                        Beaches
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/bird' onClick={handleResetInput}>
                        Birds
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/food' onClick={handleResetInput}>
                        Food
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
