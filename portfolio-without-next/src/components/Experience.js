import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, Heading, Text, Tag, TagLeftIcon, Box, Flex, TagLabel } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";

export default class Experiences extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: true,
      nextArrow: <MdArrowForwardIos color="black"/>,
      prevArrow: <MdOutlineArrowBackIosNew color = "black"/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
        
      <Box width="90%" padding="0 20px"> {/* Adjust padding as needed */}
        
        {/* <Heading width="100%" fontWeight={30}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a rutrum velit. Donec semper volutpat mi, et tempor mi tibulum a rutrum velit. Donec semper volutpat mi, et tempor.
        </Heading> */}
        <Slider {...sliderSettings}>
          <Box px={2}>
            <Card height="320px" variant="outline" borderColor="green">
                <Flex direction="column" height="100%">
                    <Box>
                    <Tag variant='subtle' colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={MdCircle} />
                        <TagLabel>Now</TagLabel>
                    </Tag>
                    <CardHeader>
                        
                        <Heading paddingBottom={2}>Teaching Assistant</Heading>
                        <Text>McMaster University</Text>
                        <Text color="gray">Department of Biomedical Engineering</Text>
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> {/* Pushes the CardFooter to the bottom */}
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        Jan 2023 - Present
                    </Text>
                    </Box>
                </Flex>
            </Card>
          </Box>

          <Box px={2}>
          <Card height="320px" variant="outline" borderColor="green">
                <Flex direction="column" height="100%">
                    <Box>
                    <Tag variant='subtle' colorScheme='green'>
                        <TagLeftIcon boxSize='12px' as={MdCircle} />
                        <TagLabel>Now</TagLabel>
                    </Tag>
                    <CardHeader>
                        <Heading paddingBottom={2}>Dynamics Team Member</Heading>
                        <Text>McMaster Solar Car</Text>
                        <Text color="gray">Suspension Subteam</Text>
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> {/* Pushes the CardFooter to the bottom */}
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        Nov 2023 - Present
                    </Text>
                    </Box>
                </Flex>
            </Card>
          </Box>

          <Box px={2}>
          <Card height="320px" variant="outline" borderColor="gray">
                <Flex direction="column" height="100%">
                    <Box>
                    <CardHeader>
                        <Heading paddingBottom={2}>Administrative Intern</Heading>
                        <Text>Bell Distributel</Text>
                        {/* <Text color="gray">Suspension Subteam</Text> */}
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> {/* Pushes the CardFooter to the bottom */}
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        June 2022 - Aug 2022 | June 2023 - August 2023
                    </Text>
                    </Box>
                </Flex>
            </Card>
          </Box>

          <Box px={2}>
          <Card height="320px" variant="outline" borderColor="gray">
                <Flex direction="column" height="100%">
                    <Box>
                    <CardHeader>
                        <Heading paddingBottom={2}>Circuitry Team Member</Heading>
                        <Text>McMaster ChemECar</Text>
                        {/* <Text color="gray">Suspension Subteam</Text> */}
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> {/* Pushes the CardFooter to the bottom */}
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        Oct 2022 - May 2023 
                    </Text>
                    </Box>
                </Flex>
            </Card>
          </Box>
        </Slider>
      </Box>

    );
  }
}