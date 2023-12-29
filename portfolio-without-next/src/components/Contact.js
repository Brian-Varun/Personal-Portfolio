import React, { useState, useEffect } from 'react';
import { Flex, Link, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Tab, useBreakpointValue } from '@chakra-ui/react';
import { MdOutlineArrowOutward, MdOutlineArrowCircleUp } from "react-icons/md";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, Facode, FaHeart, FaReact } from 'react-icons/fa';

/* change the following to customize the page*/
const emaiLink = "mailto:kothandv@mcmaster.ca"
const email = "kothandv@mcmaster.ca"
const linkedin = "https://www.linkedin.com/in/varun-ram/"
const github = "https://github.com/Nuravar"
/*-------------------------------------------*/


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
      <Flex width="100%" justify='left'>
  {shouldRenderSecondHeading ? (
    <div>
        <Flex width="100%" justify='center' align='left'>
            <Heading color='black' fontSize={100} id="contact">
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
            <Heading color='black' fontSize={70} id="contact">
                Get In Touch
                <Box display="inline-block" ml="2" verticalAlign="middle">
                <MdOutlineArrowOutward size={50} color='black' />
                </Box>
            </Heading>
        </Flex>
     </div>
  )}
 
</Flex>
      


            <HStack width="100%" spacing={4} justify='left' flexWrap="wrap">
                <Link href={emaiLink} isExternal>
                  <Button leftIcon={<FaEnvelope />} colorScheme='red' variant='outline'>
                    {email}
                  </Button>
                </Link>
                <Button leftIcon={<FaPhone />} colorScheme='orange' variant='outline'>
                    647-761-7753
                </Button>
                <Link href={linkedin} isExternal>
                  <Button leftIcon={<FaLinkedin />} colorScheme='linkedin' variant='outline' >
                    LinkedIn  
                  </Button>
                </Link>
                <Link href={github} isExternal>
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
              </Link>
                  </HStack>
            <HStack width="100%" spacing={4} justify='left' as="article">
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
