import React, { useContext, useState, useRef } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { PhotoContext } from '../context/PhotoContext';

export const MapContainer = (props) => {
    const { images } = useContext(PhotoContext);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState({});
    const markerRef = useRef(null);

    const onSelect = (image) => {
        setSelected(image);
        setVisible(true);
    };

    const onMapClicked = () => {
        setVisible(false);
    };
    const containerStyle = {
        width: '70%',
        height: '70%',
    };
    let url;
    if (images.length > 0) {
        url = `https://farm${selected.farm}.staticflickr.com/${selected.server}/${selected.id}_${selected.secret}_m.jpg`;
    }

    return (
        <Map
            google={props.google}
            zoom={10}
            initialCenter={{
                lat: 41.390205,
                lng: 2.154007,
            }}
            className='map'
            containerStyle={containerStyle}
            onClick={onMapClicked}
        >
            {images.map((image, index) => {
                return (
                    <Marker
                        onClick={() => onSelect(image)}
                        ref={() => markerRef}
                        key={index}
                        title={image.title}
                        name={image.title}
                        position={{
                            lat: image.latitude,
                            lng: image.longitude,
                        }}
                    />
                );
            })}
            {selected && url ? (
                <InfoWindow
                    position={{
                        lat: selected.latitude,
                        lng: selected.longitude,
                    }}
                    visible={visible}
                >
                    <div>
                        <h4>{selected.title}</h4>
                        <img src={url} alt={selected.title} />
                    </div>
                </InfoWindow>
            ) : null}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
