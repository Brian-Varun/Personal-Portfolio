import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Button,
  useBreakpointValue,
  Spacer,
} from '@chakra-ui/react';

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      width="100%"
      justify={isMobile ? 'flex-start' : 'center'} // Adjusted justify property
      direction={isMobile ? 'row' : 'row'}
      align="center"
    >
      <Box fontWeight="bold" fontSize="20px" flex="1" paddingY="3" paddingX="9"   textAlign={isMobile ? 'left' : 'left'} marginBottom={isMobile ? '2' : '0'}>
        Varun
      </Box>
      {!isMobile && (
        <HStack spacing="20" paddingX="10">
          <Spacer></Spacer>
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
