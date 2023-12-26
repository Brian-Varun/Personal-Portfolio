import React, { useState, useEffect } from 'react';
import { Flex, VStack, Box, Heading, Spacer, Text, HStack, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import './Hero.css';
import { FaCircle } from 'react-icons/fa';




const Experiences = () => {


  return ( 
    <Flex justify="flex-start" width="100%" padding="10">
      <VStack align="flex-start" spacing="5">
        <Heading width="60%">
        Experience        
        </Heading>
        <Heading width="60%" fontWeight={30}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a rutrum velit. Donec semper volutpat mi, et tempor mi tibulum a rutrum velit. Donec semper volutpat mi, et tempor.
        </Heading>
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <HStack spacing={5} padding="3"  flexWrap="wrap">
            <Card maxW='sm' height="320px" variant='outline' borderColor="green">
                <CardHeader >
                    <Tag variant="outline" color="green">
                        <TagLeftIcon as={FaCircle} />
                        <TagLabel> Now </TagLabel>
                    </Tag>
                    <Heading size='md' paddingTop="3">Teaching Assistant</Heading>
                    <Text>McMaster University | Department of Engineering</Text>
                </CardHeader>
                <CardBody>
                    <Text width="60%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibul
                    </Text>
                </CardBody>
                <CardFooter>
                    <Text> 
                        From Winter 2023 to Present
                    </Text>
                </CardFooter>
            </Card>
            <Card maxW='sm' height="320px" variant='outline'>
                <CardHeader>
                    <Heading size='md'>Intern</Heading>
                    <Text>Distributel</Text>
                </CardHeader>
                <CardBody>
                    <Text width="60%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibul
                    </Text>
                </CardBody>
                <CardFooter>
                    <Text> 
                        From Summer 2022 and Summer 2023
                    </Text>
                </CardFooter>
            </Card>
            <Card maxW='sm' height="320px" variant='outline'>
                <CardHeader>
                    <Heading size='md'>Teaching Assistant</Heading>
                    <Text>McMaster University | Department of Math & Stats</Text>
                </CardHeader>
                <CardBody>
                    <Text width="60%">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibul
                    </Text>
                </CardBody>
                <CardFooter>
                    <Text> 
                        From Summer 2023
                    </Text>
                </CardFooter>
            </Card>
        </HStack>
        </Flex>
        <Divider></Divider>
      </VStack>
    </Flex>
 
  );
};

export default Experiences;
