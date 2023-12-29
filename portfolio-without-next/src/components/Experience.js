import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, Heading, Text, Tag, TagLeftIcon, Box, Flex, TagLabel } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";



/* change the following to customize the page*/
/* To add cards you have to scroll down and manually change them*/
/* !!! In the future, we can add something to generate them with a for loop*/
/* Present Jobs (if you have only 1 current job, you will have to scroll down and delete on of the cards)*/
/* Card 1*/
const jobTitle1 = "Teaching Assistant"
const companyName1 = "McMaster University"
const companyDepartment1 = "Department of Biomedical Engineering"
const timeline1 = "Jan 2023 - Present"
/* Card 2*/
const jobTitle2 = "Dynamics"
const companyName2 = "McMaster Solar Car"
const companyDepartment2 = "Suspension Subteam"
const timeline2 = "Nov 2023 - Present"
/* Past Jobs */
/* Card 3*/
const jobTitle3 = "Administrative Intern"
const companyName3 = "Bell Distributel"
const companyDepartment3 = ""
const timeline3 = "June 2022 - Aug 2022 | June 2023 - August 2023"
/* Card 4*/
const jobTitle4 = "Teaching Assistant"
const companyName4 = "McMaster University"
const companyDepartment4 = "Department of Math & Stats"
const timeline4 = "May 2023 - June 2023"
/* Card 5*/
const jobTitle5 = "Circuitry Team Member"
const companyName5 = "McMaster ChemECar"
const companyDepartment5 = ""
const timeline5 = "Oct 2022 - May 2023"
/*-------------------------------------------*/


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
                        
                        <Heading paddingBottom={2}>{jobTitle1}</Heading>
                        <Text>{companyName1}</Text>
                        <Text color="gray">{companyDepartment1}</Text>
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> 
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        {timeline1}
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
                        <Heading paddingBottom={2}>{jobTitle2}</Heading>
                        <Text>{companyName2}</Text>
                        <Text color="gray">{companyDepartment2}</Text>
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> 
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        {timeline2}
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
                        <Heading paddingBottom={2}>{jobTitle3}</Heading>
                        <Text>{companyName3}</Text>
                        <Text color="gray">{companyDepartment3}</Text>
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> {/* Pushes the CardFooter to the bottom */}
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        {timeline3}
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
                        <Heading paddingBottom={2}>{jobTitle4}</Heading>
                        <Text>{companyName4}</Text>
                        <Text color="gray">{companyDepartment4}</Text>
                    </CardHeader>
                    </Box>
                    <Box marginTop="auto"> 
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        {timeline4}
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
                        <Heading paddingBottom={2}>{jobTitle5}</Heading>
                        <Text>{companyName5}</Text>
                        <Text color="gray">{companyDepartment5}</Text>
                    </CardHeader>
                    </Box>

                    <Box marginTop="auto"> {/* Pushes the CardFooter to the bottom */}
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        {timeline5}
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