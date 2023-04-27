import React from "react";
//import typewriter effect
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Full Stack Developer",
          "I'm a MERN Stack Developer",
          "I'm an Open Source Contributor",
          "I'm a Chinese medical translator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
