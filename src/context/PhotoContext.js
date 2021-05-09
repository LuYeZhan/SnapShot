import React, { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../api/config';
export const PhotoContext = createContext({});

const PhotoContextProvider = (props) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const runSearch = (query) => {
        const cachedData = sessionStorage.getItem(query);
        if (cachedData) {
            setImages(JSON.parse(cachedData).photos.photo);
            setLoading(false);
            return;
        }
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
            )
            .then((response) => {
                setImages(response.data.photos.photo);
                setLoading(false);
                sessionStorage.setItem(query, JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(
                    'Encountered an error with fetching and parsing data',
                    error
                );
            });
    };
    return (
        <PhotoContext.Provider
            value={{ images, loading, runSearch, searchInput, setSearchInput }}
        >
            {props.children}
        </PhotoContext.Provider>
    );
};

export default PhotoContextProvider;
