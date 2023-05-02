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


// import React, { useState, useEffect } from "react";

// const VisitorLocation = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       const response = await fetch("https://ipapi.co/json/");
//       const data = await response.json();
//       setLocation(data);
//       localStorage.setItem("visitorLocation", JSON.stringify(data));
//     };
//     const visitorLocation = localStorage.getItem("visitorLocation");
//     if (visitorLocation) {
//       setLocation(JSON.parse(visitorLocation));
//     } else {
//       fetchLocation();
//     }
//   }, []);

//   return (
//     <div>
//       {location && (
//         <div>
//           <span>You're visiting from {`${location.city}, ${location.region}, ${location.country_name}`}</span>
//           <img src={`https://flagcdn.com/16x12/${location.country_code.toLowerCase()}.png`} alt={location.country_name} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default VisitorLocation;
