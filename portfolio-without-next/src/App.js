// Filename - App.js

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
	Flex,
	VStack,
	Heading,
	Spacer,
} from "@chakra-ui/layout";
import { FaSun, FaMoon } from "../node_modules/react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";
	return (

		<VStack>
			<Navbar />
			<Hero />
			<Experiences />
		</VStack>
	);
}

export default App;
