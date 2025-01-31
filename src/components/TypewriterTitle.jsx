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
            .typeString("I'm a Computer Science Student.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Previous Capital One Intern.")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Incoming Intern at Atlassian and Amazon.")
            .pauseFor(1500)
            .start();
        }}
      />
    </>
  );
};

export default TypewriterTitle;



















