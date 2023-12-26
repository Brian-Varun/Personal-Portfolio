import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Button,
  useBreakpointValue,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const Navbar = () => {
  const mobileNav = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      justify="space-between"
      align="center"
      width="100%"
      padding="5"
    >
      <Box fontWeight="bold" fontSize="20px" paddingY="3" paddingX="9">
        Varun
      </Box>

      {mobileNav ? (
        <Menu>
          <MenuButton as={Button} variant="link" size="lg">
            ☰
          </MenuButton>
          <MenuList>
            <MenuItem variant="link">Resume</MenuItem>
            <MenuItem variant="link">Experience</MenuItem>
            <MenuItem variant="link">Projects</MenuItem>
            <MenuItem variant="link">Contact</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing="20" flexWrap="wrap">
          <Spacer />
          <Button variant="link">Resume</Button>
          <Button variant="link">Experience</Button>
          <Button variant="link">Projects</Button>
          <Button variant="link">Contact</Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
