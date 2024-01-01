import { VStack, Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/skill-carousel";
import IslandNavbar from "./components/IslandNavbar";
function App() {
  return (
	<Box width={{ base: "auto"}}>
		  <VStack spacing={4} p={0} maxW="100%" align="center">
      {/* <Navbar /> */}
      <IslandNavbar  />

          <Hero />
          <Skills />

        
        
      
      <Experiences />
      <Projects />
      <Contact />
    </VStack>
	</Box>
  );
}

export default App;
