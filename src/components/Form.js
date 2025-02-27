import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import { useHistory } from 'react-router-dom';

const Form = ({ input, setInput }) => {
    // update search text state
    const { runSearch } = useContext(PhotoContext);
    const history = useHistory();
    const updateSearchInput = ({ target: { value } }) => {
        setInput(value);
    };
    return (
        <form
            className='search-form'
            onSubmit={(event) => {
                event.preventDefault();
                runSearch(input);
                history.push(input);
            }}
        >
            <input
                type='text'
                name='search'
                placeholder='Search...'
                onChange={updateSearchInput}
                value={input}
            />
            <button
                type='submit'
                className={`search-button ${input.trim() ? 'active' : null}`}
                disabled={!input.trim()}
            >
                <svg height='32' width='32'>
                    <path
                        d='M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z'
                        fill='#ffffff'
                        fillRule='evenodd'
                    />
                </svg>
            </button>
        </form>
    );
};

export default Form;
