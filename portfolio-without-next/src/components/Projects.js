import React, { useState, useEffect } from 'react';
import { Flex, Stack, Collapse, VStack, Box, Heading, Icon, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import { BsArrowUpRightSquare  } from 'react-icons/bs';
import './Projects.css';

const project1_image= "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project2_image= "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project3_image= "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Projects = () => {

  return ( 
    <Flex justify="flex-start" width="100%" padding="10" paddingBottom={0}>
      <VStack align="flex-start" spacing="5" width="100%" >
        <Heading paddingX={0} id="projects">
        Projects        
        </Heading >
        <Text paddingX={0} >Selected Projects</Text>
        <LinkBox paddingX={0} width="100%" as="article" >
            <Card height={{base: '100%', sm: '200px'}} width="100%" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxW={{ base: '100%', sm: '100%' }}>
                <Image objectFit='cover' width="100%" height="300px"  src={project1_image} alt='Project Card' />
                <Stack>
                    <CardBody>
                        <LinkOverlay href ="#">
                        <Heading>Heatsink Project</Heading>
                        <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                        </Text>
                        </LinkOverlay>
                        <Tag position="absolute" bottom = "20px" right = "175px" variant="subtle" colorScheme='red'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                        <Tag position="absolute" bottom = "20px" right = "100px" variant="subtle" colorScheme='blue'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                        <Tag position="absolute" bottom = "20px" right = "25px" variant="subtle" colorScheme='green'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                    </CardBody>
                </Stack>
            </Card>
        </LinkBox>
        <LinkBox paddingX={0} width="100%" as="article" >
            <Card height={{base: '100%', sm: '200px'}} width="100%" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxW={{ base: '100%', sm: '100%' }}>
                <Image objectFit='cover' width="100%" height="300px" src={project2_image} alt='Project Card' />
                <Stack>
                    <CardBody>
                        <LinkOverlay href ="#">
                        <Heading>Slacker Chores</Heading>
                        <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                        </Text>
                        </LinkOverlay>
                        <Tag position="absolute" bottom = "20px" right = "175px" variant="subtle" colorScheme='red'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                        <Tag position="absolute" bottom = "20px" right = "100px" variant="subtle" colorScheme='blue'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                        <Tag position="absolute" bottom = "20px" right = "25px" variant="subtle" colorScheme='green'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                    </CardBody>
                </Stack>
            </Card>
        </LinkBox>
        <LinkBox paddingX={0} width="100%" as="article" >
            <Card height={{base: '100%', sm: '200px'}} width="100%" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' maxW={{ base: '100%', sm: '100%' }}>
                <Image objectFit='cover' width="100%" height="300px"  src={project3_image} alt='Project Card' />
                <Stack>
                    <CardBody>
                        <LinkOverlay href ="#">
                        <Heading>Pace++</Heading>
                        <Text py='2'>
                        Caffè latte is a coffee beverage of Italian origin made with espresso
                        and steamed milk.
                        </Text>
                        </LinkOverlay>
                        <Tag position="absolute" bottom = "20px" right = "175px" variant="subtle" colorScheme='red'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                        <Tag position="absolute" bottom = "20px" right = "100px" variant="subtle" colorScheme='blue'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                        <Tag position="absolute" bottom = "20px" right = "25px" variant="subtle" colorScheme='green'>
                            <TagLabel> Python </TagLabel>
                        </Tag>
                    </CardBody>
                </Stack>
            </Card>
        </LinkBox>


         

        <Button variant="link" rightIcon={<BsArrowUpRightSquare  />}>
            Explore More Projects
        </Button>
        <Divider></Divider>
      </VStack>
    </Flex>
   
 
  );
};

export default Projects;
