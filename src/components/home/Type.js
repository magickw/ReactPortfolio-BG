import React from "react";
// import React, { useRef, useEffect } from 'react';
//import typewriter effect
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Chinese Medical Translator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

// function Type() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const staticText = 'I‘m ';
//     const typewriterTexts = ['a Full Stack Developer', 'a MERN Stack Developer', 'an Open Source Contributor'];

//     const typewriterContainer = containerRef.current;

//     typewriterTexts.forEach(text => {
//       const typewriterElement = document.createElement('div');
//       typewriterElement.classList.add('typewriter-element');
//       typewriterContainer.appendChild(typewriterElement);

//       const typewriter = new Typewriter(typewriterElement, {
//         loop: true,
//         autoStart: true,
//         deleteSpeed: 50,
//       });

//       typewriter.typeString(staticText).pauseFor(1000);
//       typewriter.typeString(text).start();
//     });
//   }, []);

//   return (
//     <div ref={containerRef} />
//   );
// }

export default Type;
