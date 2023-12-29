// SlideEx.js
import React from 'react';
import { Slide, Flex, Image, Box, Button, Text, Heading, Tag, TagLabel, List, ListItem, ListIcon, OrderedList,  UnorderedList, HStack, VStack} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { MdOpenInNew } from 'react-icons/md';


function SlideEx({ isOpen, onClose }) {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10, }}>
      <div  style={{ maxHeight: '740px', overflowY: 'auto' }}>
        <Box
          p="40px"
          color="black"
          mt="4"
          bg="white"
          rounded="md"
          shadow="md"
          position="relative"
          outlineColor="black"
          border='2px solid gray'
          outline="1"
        >
          <Button
            position="absolute"
            top="5px"
            right="5px"
            onClick={onClose}
            variant="outline"
            bg="transparent"
            colorScheme="red"
          >
            <ImCross/>
            
          </Button>



          {/* Start of the Document */}
          <Box lassName="Header" >
            <Heading fontSize="50" mb="1">Title</Heading>
            <Text color="gray">DD/MM/YYYY</Text>
            <Flex justifyContent="flex-start" mt="2">
              <Button mr="2" rightIcon={<MdOpenInNew/>} colorScheme='blue' variant="outline">
                  Website
                </Button>
              <Button mr="2" leftIcon={<FaGithub />} bgColor='#333' textColor='white' variant='outline'
                sx={{
                  '&:hover': {
                    bgColor: "white",
                    textColor: 'black',
                  },
                }}
              >
                Github
              </Button>
              
            </Flex>
            
            <Flex justifyContent="flex-start" mt="2">
              
              <Tag mr="2" ><TagLabel>Python</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Python</TagLabel></Tag>
              <Tag mr="2" ><TagLabel>Python</TagLabel></Tag>
            </Flex>
            <Image mt="5" width="100%"  objectFit="cover" height="400px" borderRadius="10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Color_icon_green.png/640px-Color_icon_green.png"/>
          </Box>
          
          <Box className="Introduction" >
            <Heading fontSize={35} mt="5" mb="">Quick Summary</Heading>
            {/* 
            Our team was assigned/set out to solve the following problem []. 
            
            To solve this we developed the [name of project] that utilized the following [list of items]

            The project allows the following features/objects to be done 
            
            *Remember to add specific stats wherever possile*
            */}
            <HStack flexDirection={{ base: 'column', md: 'row' }} spacing={10} >
              <VStack align="left" maxW={{ base: '100%', md: '60%' }} >
              <Heading fontSize={20} mt="5" mb="2.5">Key Responsibilities</Heading>
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec est tortor. Nullam posuere hendrerit massa, sed dictum eros pharetra vitae. Sed ornare volutpat nibh quis pharetra. Cras facilisis mollis felis, at dapibus orci. Maecenas finibus ullamcorper eros eu tempor. Sed id tempor nulla. Sed vitae arcu in ligula placerat pretium non vel libero. Vivamus mauris dui, volutpat eget nisi sit amet, dapibus tincidunt tellus. Mauris quis cursus nibh. Nam sit amet enim vel dui iaculis sodales. Fusce non lacus at enim vehicula lacinia eu vitae nibh. Vivamus at fermentum purus. Phasellus sed lectus lectus. Vivamus pellentesque enim ac orci pretium consectetur.

              </Text> 
              </VStack>
              <VStack align="left" >
              <Heading fontSize={20} mt="5" mb="2.5">My Role</Heading>
              <UnorderedList >
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
              </UnorderedList>
              </VStack>
            </HStack>
            
          </Box>
          <Box className='Solution'>
            <Heading fontSize={20} mt="5" mb="2.5">Our Solution</Heading>
            {/* 

            During this project, our solution solved the following using the following
            
            */}
            
            <Text pt="2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec est tortor. Nullam posuere hendrerit massa, sed dictum eros pharetra vitae. Sed ornare volutpat nibh quis pharetra. Cras facilisis mollis felis, at dapibus orci. Maecenas finibus ullamcorper eros eu tempor. Sed id tempor nulla. Sed vitae arcu in ligula placerat pretium non vel libero. Vivamus mauris dui, volutpat eget nisi sit amet, dapibus tincidunt tellus. Mauris quis cursus nibh. Nam sit amet enim vel dui iaculis sodales. Fusce non lacus at enim vehicula lacinia eu vitae nibh. Vivamus at fermentum purus. Phasellus sed lectus lectus. Vivamus pellentesque enim ac orci pretium consectetur.

            Integer interdum arcu nec risus porta suscipit. Maecenas porta, leo in luctus aliquam, orci leo auctor velit, et facilisis ipsum elit sit amet ante. Phasellus non pulvinar lorem, eu feugiat purus. Mauris ipsum neque, maximus a dapibus sit amet, blandit id odio. In vel porta orci, in condimentum neque. Praesent a convallis sem, quis pulvinar tellus. Donec hendrerit enim non metus pulvinar feugiat. Nulla efficitur metus ut nisl ultricies auctor. Maecenas sodales posuere enim, a porttitor sem consectetur a. Suspendisse sit amet aliquam risus, sed aliquam quam. Curabitur aliquet erat at justo molestie blandit. Pellentesque rutrum aliquet metus quis mollis. Nam vel hendrerit purus. Donec hendrerit purus et tortor facilisis, at viverra mi cursus.
            </Text>
          </Box>
          <Box className='ShowcaseAndProcess'>

          </Box>
          <Heading fontSize={20} mt="5" mb="2.5">Showcase</Heading>
          {/* 
          Create 1 paragraph, every 3 images ish to explain process

          Showcase of images + captions
          */}
          <Image boxSize="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Color_icon_green.png/640px-Color_icon_green.png"/>

          <Heading fontSize={20} mt="5">Credits</Heading>

          <Text>Person 1: [Role]</Text>
          <Text>Person 2: [Role]</Text>
          <Text>Person 3: [Role]</Text>



        </Box>
      </div>
    </Slide>
  );
}

export default SlideEx;
