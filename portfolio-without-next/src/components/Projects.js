import React, { useState, useEffect } from 'react';
import { Flex, Stack, VStack, Grid, GridItem, Box, Heading, Text, HStack, useBreakpointValue, Button, Divider, Tag, TagLeftIcon, TagLabel, Card, CardHeader, CardBody, CardFooter, Image, LinkBox, LinkOverlay, SlideFade  } from '@chakra-ui/react';
import { BsArrowUpRightSquare  } from 'react-icons/bs';
import './Projects.css';
import SlideEx1 from './Projects/Project1';
import SlideEx2 from './Projects/Project2';
import SlideEx3 from './Projects/Project3';
import GithubCard from './Github-Card'


/* change the following to customize the page*/

const project1_image= "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project2_image= "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const project3_image= "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const projects = [
  {
    name: 'Heatsink Project',
    image: project1_image,
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    tags: ['Python', 'Python', 'Python'],
  },
  {
    name: 'Slacker Chores',
    image: project2_image,
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    tags: ['Python', 'Python', 'Python'],
  },
  {
    name: 'Pace++',
    image: project3_image,
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    tags: ['Python', 'Python', 'Python'],
  },
];

const repoNames = [
  {
    name: 'albertlai431/slacker-chore'
  },
  {
    name: 'PacePlusPlus/PacePlusPlus'
  },
  {
    name: 'PacePlusPlus/PacePlusPlus'
  },
  {
    name: 'PacePlusPlus/PacePlusPlus'
  },
];



/*-------------------------------------------*/



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSlideExVisible, setSlideExVisible] = useState(false);
    const columns = useBreakpointValue({ base: 1, md: 2 }); // 1 column for mobile, 2 columns for desktop

    const handleButtonClick = (event, project) => {
        event.preventDefault(); // Prevent the default behavior (scrolling to the top)
      
        setSelectedProject(project);
        setSlideExVisible(true);
    };
  
    const handleCloseSlideEx = () => {
      setSelectedProject(null);
      setSlideExVisible(false);
    };
  
    
    
    return (
      <Flex justify="flex-start" width="100%" padding="10" paddingBottom={0}>
        <VStack align="flex-start" spacing="5" width="100%">
          
          <Heading paddingX={0} id="projects">
            Projects
          </Heading>

          

          <Text fontWeight="bold" paddingX={0}>Selected Projects</Text>
          {projects.map((project, index) => (
            <Box 
            width="100%" 
            height="auto" 
            as = 'button'
            onClick={(event) => handleButtonClick(event, project)}
            variant="unstyled" 
            >
              <Card
                height={{ base: '100%', sm: '200px' }}
                width="100%"
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                maxW={{ base: '100%', sm: '100%' }}
                _hover={{ 
                    transform: 'scale(1.01)'
                    }}
              >
                <Image
                  objectFit="cover"
                  width={{ base: '100%', md: '80%' }}
                  minWidth="40%"
                  height="250px"
                  src={project.image}
                  alt="Project Card"
                />
                <Stack width="auto">
                  <CardBody  width="auto">
                      <Heading>{project.name}</Heading>
                        <Box  whiteSpace="normal">
                        <Text   maxWidth="100%" py="2">{project.description}</Text>
                        </Box>           
                    <Flex justifyContent="flex-end">
                    {project.tags.map((tag, tagIndex) => (
                      <Tag
                        key={tagIndex}
                        bottom="20px"
                        right={`${175 - tagIndex * 75}px`}
                        variant="subtle"
                        colorScheme="gray"
                        mr="2" 
                        mt={{ base: "2", sm: '8' }}
                      >
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                    </Flex>
                  </CardBody>
                </Stack>
              </Card>
            </Box>
          ))}
  
        {isSlideExVisible && selectedProject && (
                <>
                    {selectedProject.name === 'Heatsink Project' && (
                    <SlideEx1
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Slacker Chores' && (
                    <SlideEx2
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                    {selectedProject.name === 'Pace++' && (
                    <SlideEx3
                        isOpen={isSlideExVisible}
                        project={selectedProject}
                        onClose={handleCloseSlideEx}
                    />
                    )}
                </>
                )}
                <Button fontWeight="bold" variant="link" rightIcon={<BsArrowUpRightSquare />}>
            Explore More Projects
          </Button>
          <Text fontWeight="bold" paddingX={0}>Github Projects</Text>
          <VStack spacing={4} align="center" p={4}>
            <Grid
              templateColumns={`repeat(${columns}, 1fr)`}
              gap={4}
              w="100%"
            >
              {repoNames.map((repo) => (
                <GridItem key={repo.name}>
                  <GithubCard repoName={repo.name} />
                </GridItem>
              ))}
            </Grid>
          </VStack>
         
          
          <Divider />
        </VStack>
      </Flex>
    );
  };
  
  export default Projects;
  
