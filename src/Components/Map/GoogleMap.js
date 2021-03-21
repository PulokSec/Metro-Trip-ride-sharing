import React from 'react';
import GoogleMapReact from 'google-map-react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './GoogleMap.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoogleMap = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBaYg1-pbH-6N_nS3hvTQ6aXVW8isrql0Q',
          }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
        >
          <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
const LocationPin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon icon={faMapMarkerAlt}/>
    <p className="pin-text">{text}</p>
  </div>
);

export default GoogleMap;
