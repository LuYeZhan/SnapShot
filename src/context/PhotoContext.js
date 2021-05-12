import React, { createContext, useState } from 'react';
import axios from 'axios';
export const PhotoContext = createContext({});

const PhotoContextProvider = (props) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const runSearch = (query) => {
        const cachedData = sessionStorage.getItem(query);
        if (cachedData) {
            setImages(JSON.parse(cachedData).photos.photo);
            setLatitude(JSON.parse(cachedData).photos.latitude);
            setLongitude(JSON.parse(cachedData).photos.longitude);
            setLoading(false);
            return;
        }
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${query}&per_page=24&extras=geo&format=json&nojsoncallback=1`
            )
            .then((response) => {
                setImages(response.data.photos.photo);
                setLatitude(response.data.photos.latitude);
                setLongitude(response.data.photos.longitude);
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
            value={{
                images,
                loading,
                runSearch,
                searchInput,
                setSearchInput,
                latitude,
                longitude,
            }}
        >
            {props.children}
        </PhotoContext.Provider>
    );
};

export default PhotoContextProvider;
