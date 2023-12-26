import React, { useState, useEffect } from 'react';
import { Flex, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Tab } from '@chakra-ui/react';
import './Hero.css';
import { MdOutlineArrowOutward, MdOutlineArrowCircleUp } from "react-icons/md";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, Facode, FaHeart, FaReact } from 'react-icons/fa';


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Adds smooth scrolling effect
    });
  };

const Contact = () => {


  return ( 
    <Flex justify="flex-start" width="100%" padding="10" >
      <VStack align="flex-start" spacing="5" width='100%' >
        <div className='tag-container' width='100%' >
                <HStack spacing={38} padding="1" className='tag-scroll' >
                <Flex align="center">
                    <Heading color='black' fontSize={100}>
                        Get In Touch 
                    </Heading>
                    <MdOutlineArrowOutward style={{ marginLeft: "10px" }} size={90} color="black" />
                </Flex>
                <Flex align="center">
                    <Heading color='black' fontSize={100}>
                        Get In Touch 
                    </Heading>
                    <MdOutlineArrowOutward style={{ marginLeft: "10px" }} size={90} color="black" />
                </Flex>
                <Flex align="center">
                    <Heading color='black' fontSize={100}>
                        Get In Touch 
                    </Heading>
                    <MdOutlineArrowOutward style={{ marginLeft: "10px" }} size={90} color="black" />
                </Flex>
                <Flex align="center">
                    <Heading color='black' fontSize={100}>
                        Get In Touch 
                    </Heading>
                    <MdOutlineArrowOutward style={{ marginLeft: "10px" }} size={90} color="black" />
                </Flex>
                </HStack>
            </div>
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
