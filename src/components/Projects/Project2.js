// SlideEx.js
import React from 'react';
import { Slide, Box, Button, Text } from '@chakra-ui/react';

function SlideEx({ isOpen, onClose }) {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <div style={{ maxHeight: '700px', overflowY: 'auto' }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
          position="relative"
        >
          <Button
            position="absolute"
            top="5px"
            right="5px"
            onClick={onClose}
            bg="transparent"
            color="white"
          >
            <Text>Close</Text>
          </Button>
          <Text>Hello2</Text>
        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
