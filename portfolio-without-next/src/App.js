import { useColorMode } from "@chakra-ui/color-mode";
import {
	Flex,
	VStack,
	Heading,
	Spacer,
} from "@chakra-ui/layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

	return (
		<VStack>
			<Navbar />
			<Hero />
			<Experiences />
			<Projects />
			<Contact />
		</VStack>
	);
}

export default App;
