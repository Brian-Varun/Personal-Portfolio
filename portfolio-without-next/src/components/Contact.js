import React, { useState, useEffect } from 'react';
import { Flex, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Tab, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlineArrowOutward, MdOutlineArrowCircleUp } from "react-icons/md";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, Facode, FaHeart, FaReact } from 'react-icons/fa';


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Adds smooth scrolling effect
    });
  };

  const scrollStyle = {
    width: '100%',
    '--time': '20s', // Custom property
    // Add other styles as needed
  };

const Contact = () => {

    const shouldRenderSecondHeading = useBreakpointValue({ base: false, md: true });

  return ( 
    <Flex justify="flex-start" width="100%" padding="10" >
      <VStack align="flex-start" spacing="5" width='100%' overflow="hidden">
      <Flex width="100%" justify='center'>
  {shouldRenderSecondHeading ? (
    <div>
        <Flex width="100%" justify='center' align='center'>
            <Heading color='black' fontSize={100}>
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={90} color='black' />
                </Box>
            </Heading>
        </Flex>
    </div>
  ) : (
    <div>
        <Flex width="100%" justify='center' align='center'>
            <Heading color='black' fontSize={70}>
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={50} color='black' />
                </Box>
            </Heading>
        </Flex>
     </div>
  )}
 
</Flex>
      

            <Divider />
            <HStack width="100%" spacing={4} justify='center' flexWrap="wrap">
                <Button leftIcon={<FaEnvelope />} colorScheme='red' variant='outline'>
                    kothandv@mcmaster.ca
                </Button>
                <Button leftIcon={<FaPhone />} colorScheme='orange' variant='outline'>
                    647-761-7753
                </Button>
                <Button leftIcon={<FaLinkedin />} colorScheme='linkedin' variant='outline'>
                    LinkedIn
                </Button>
                <Button leftIcon={<FaGithub />} bgColor='#333' textColor='white' variant='outline'
                    sx={{
                    '&:hover': {
                        bgColor: "white",
                        textColor: 'black',
                    },
                    }}
                >
                    Github
                </Button>
            </HStack>
            <HStack width="100%" spacing={4} justify='center' as="article">
                <Button variant='link'onClick={scrollToTop} leftIcon={<MdOutlineArrowCircleUp/>}>
                    Back To Top
                </Button>
            </HStack>
            <Divider />
      </VStack>
    </Flex>
 
  );
};

export default Contact;
