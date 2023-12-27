import React, { useState, useEffect } from 'react';
import { Flex, VStack, Box, Heading, Icon, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import { BsArrowUpRightSquare  } from 'react-icons/bs';
import './Projects.css';

const Projects = () => {

  return ( 
    <Flex justify="flex-start" width="100%" padding="10" >
      <VStack align="flex-start" spacing="5" width="100%">
        <Heading >
        Projects        
        </Heading>
        <Text>Selected Projects</Text>

        <LinkBox width="100%" as="article" >
            <Card width="100%" overflow="hidden">
                <Box position="relative" width="100%" height="250px" className="card-container">
                        <Image
                        src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Banner Image"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        position="absolute"
                        top="0"
                        left="0"
                        objectPosition="0px -100px"
                        padding="3"
                        borderRadius='25px'
                        minW="lg"
                        className='image'
                        />
                        <LinkOverlay href ="#" >
                            <Box
                            position="absolute"
                            bottom="0"
                            left="3"
                            width="98.35%"
                            height="50px"
                            _before={{
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '75%',
                                backdropFilter: 'blur(6px)', 
                                zIndex: 0,
                            }}
                            />
                            <Flex>
                                <Text
                                position="absolute"
                                bottom = "15px"
                                left = "25px"
                                color="white"
                                fontFamily="Clashgrotesk, sans-serif;"
                                fontSize={20}
                                fontStyle="bold"
                                textShadow='0 3px 5px gray'
                                >
                                    Text on the Bottom Left 
                                </Text>
                                <Icon className='link-icon' position="absolute" bottom="20px" left="240px" as={BsArrowUpRightSquare} fontSize={24} mr={2} color='white'/>
                            </Flex>
                            
                            
                            <Tag position="absolute" bottom = "20px" right = "175px" variant="subtle" colorScheme='red'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                            <Tag position="absolute" bottom = "20px" right = "100px" variant="subtle" colorScheme='blue'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                            <Tag position="absolute" bottom = "20px" right = "25px" variant="subtle" colorScheme='green'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                        </LinkOverlay>
                </Box>
            </Card>
        </LinkBox>
        <LinkBox width="100%" as="article" >
            <Card width="100%" overflow="hidden">
                <Box position="relative" width="100%" height="250px" className="card-container">
                        <Image
                        src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Banner Image"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        position="absolute"
                        top="0"
                        left="0"
                        objectPosition="0px -70px"
                        padding="3"
                        borderRadius='25px'
                        minW="lg"
                        className='image'
                        />
                        <LinkOverlay href ="#" >
                            <Box
                            position="absolute"
                            bottom="0"
                            left="3"
                            width="98.35%"
                            height="50px"
                            _before={{
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '75%',
                                backdropFilter: 'blur(6px)', 
                                zIndex: 0,
                            }}
                            />
                            <Flex>
                                <Text
                                position="absolute"
                                bottom = "15px"
                                left = "25px"
                                color="white"
                                fontFamily="Clashgrotesk, sans-serif;"
                                fontSize={20}
                                fontStyle="bold"
                                textShadow='0 3px 5px gray'
                                >
                                    Text on the Bottom Left 
                                </Text>
                                <Icon className='link-icon' position="absolute" bottom="20px" left="240px" as={BsArrowUpRightSquare} fontSize={24} mr={2} color='white'/>
                            </Flex>
                            
                            
                            <Tag position="absolute" bottom = "20px" right = "175px" variant="subtle" colorScheme='red'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                            <Tag position="absolute" bottom = "20px" right = "100px" variant="subtle" colorScheme='blue'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                            <Tag position="absolute" bottom = "20px" right = "25px" variant="subtle" colorScheme='green'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                        </LinkOverlay>
                </Box>
            </Card>
        </LinkBox>
        <LinkBox width="100%" as="article" >
            <Card width="100%" overflow="hidden">
                <Box position="relative" width="100%" height="250px" className="card-container">
                        <Image
                        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Banner Image"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        position="absolute"
                        top="0"
                        left="0"
                        objectPosition="0px -100px"
                        padding="3"
                        borderRadius='25px'
                        minW="lg"
                        className='image'
                        />
                        <LinkOverlay href ="#" >
                            <Box
                            position="absolute"
                            bottom="0"
                            left="3"
                            width="98.35%"
                            height="50px"
                            _before={{
                                content: '""',
                                position: 'absolute',
                                width: '100%',
                                height: '75%',
                                backdropFilter: 'blur(8px)', 
                                zIndex: 0,
                            }}
                            />
                            <Flex>
                                <Text
                                position="absolute"
                                bottom = "15px"
                                left = "25px"
                                color="white"
                                fontFamily="Clashgrotesk, sans-serif;"
                                fontSize={20}
                                fontStyle="bold"
                                textShadow='0 3px 5px gray'
                                >
                                    Text on the Bottom Left 
                                </Text>
                                <Icon className='link-icon' position="absolute" bottom="20px" left="240px" as={BsArrowUpRightSquare} fontSize={24} mr={2} color='white'/>
                            </Flex>
                            
                            
                            <Tag position="absolute" bottom = "20px" right = "175px" variant="subtle" colorScheme='red'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                            <Tag position="absolute" bottom = "20px" right = "100px" variant="subtle" colorScheme='blue'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                            <Tag position="absolute" bottom = "20px" right = "25px" variant="subtle" colorScheme='green'>
                                <TagLabel> Python </TagLabel>
                            </Tag>
                        </LinkOverlay>
                </Box>
            </Card>
        </LinkBox>                       

        <Button variant="link" rightIcon={<BsArrowUpRightSquare  />}>
            Explore More Projects
        </Button>
      </VStack>
    </Flex>
 
  );
};

export default Projects;
