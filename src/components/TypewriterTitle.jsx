import TypewriterComponent from "typewriter-effect";

const TypewriterTitle = () => {
  return (
    <>
      <TypewriterComponent
        options={{
          loop: true,
          delay: 18,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a Computer Engineering Student.")
            .pauseFor(1500)
            .deleteAll()
            .start();
        }}
      />
    </>
  );
};

export default TypewriterTitle;



















