import React from "react";
import TypewriterComponent from "typewriter-effect";

const TypewriterTitle = () => {
  return (
    <>
      <TypewriterComponent
        options={{
          loop: true,
          delay: 55,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a Computer Engineering Student.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("I'm a Software Engineer.")
            .pauseFor(1500)
            .deleteAll()
            .start();
        }}
      />
    </>
  );
};

export default TypewriterTitle;
