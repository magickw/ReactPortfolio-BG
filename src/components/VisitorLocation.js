import React, { useState, useEffect } from 'react';

const VisitorLocation = () => {
  const [visitorLocation, setVisitorLocation] = useState(localStorage.getItem('visitorLocation'));

  useEffect(() => {
    // Use an API to get the visitor's location
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const location = `${data.city}, ${data.region}, ${data.country}`;
        setVisitorLocation(location);
        localStorage.setItem('visitorLocation', location);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <p>Your current location: {visitorLocation}</p>
    </div>
  );
};

export default VisitorLocation;
