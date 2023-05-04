import React, { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';

const VisitorLocation = () => {
  const [visitorLocation, setVisitorLocation] = useState(localStorage.getItem('visitorLocation'));

  useEffect(() => {
    // Use an API to get the visitor's location
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setVisitorLocation(data);
        localStorage.setItem('visitorLocation', JSON.stringify(data));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <p>Your current location: {visitorLocation && `${visitorLocation.city}, ${visitorLocation.region}, ${visitorLocation.country_name}`} <ReactCountryFlag countryCode={visitorLocation && visitorLocation.country_code} svg /></p> 
    </div>
  );
};

export default VisitorLocation;


