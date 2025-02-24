import { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ScrollProgress } from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import GradientBackground from "./components/GradientBackground";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <GradientBackground />
      <ScrollProgress />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ScrollToTop />
    </>
  );
}

export default App;
