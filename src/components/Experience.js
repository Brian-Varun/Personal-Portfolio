import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardHeader, Heading, Link, Text, Button, Tag, TagLeftIcon, Box, Flex, TagLabel } from "@chakra-ui/react";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos, MdCircle } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5"


/* change the following to customize the page*/
/* To add cards you have to scroll down and manually change them*/
/* !!! In the future, we can add something to generate them with a for loop*/
/* Present Jobs (if you have only 1 current job, you will have to scroll down and delete on of the cards)*/
/* Card 1*/
const experienceList = [
  {
     present : true,
     jobTitle: "Teaching Assistant",
     companyName: "McMaster University",
     companyDepartment: "Department of Biomedical Engineering",
     timeline: "Jan 2023 - Present",
  },
  {
    present : true,
    jobTitle: "Dynamics",
    companyName: "McMaster Solar Car",
    companyDepartment: "Suspension Subteam",
    timeline: "Nov 2023 - Present",
  },
  {
    present : false,
    jobTitle: "Administrative Intern",
    companyName: "Bell Distributel",
    companyDepartment: "",
    timeline: "June 2022 - Aug 2022 | June 2023 - August 2023",
  },
  {
    present : false,
    jobTitle: "Teaching Assistant",
    companyName: "McMaster University",
    companyDepartment: "Department of Math & Stats",
    timeline: "May 2023 - June 2023",
  },
  {
    present : false,
    jobTitle: "Circuitry Team Member",
    companyName: "McMaster ChemECar",
    companyDepartment: "",
    timeline: "Oct 2022 - May 2023",
  },
];
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
      <>
      <Heading width="100%" paddingX={10} paddingTop={10} id="experience">
        Experience        
      </Heading>
      <Box paddingX={10} width="100%" align="left">
      <Text pb="3"width={{base:"100%", lg: "50%"}}>
        My journey in engineering has been shaped by a diverse range of experiences, each contributing to my growth. Below you can find a link with my resume attached:
      </Text>
      <Link href = "https://www.facebook.com/marketplace/item/708959441330993/?ref=browse_tab&referral_code=marketplace_top_picks&referral_story_type=top_picks" isExternal>
      <Button paddingY="3" colorScheme="red" variant="outline" leftIcon={<IoDocumentAttach/>}>
        Resume
      </Button>
      </Link>
      
      </Box>
      
      <Box width="90%" padding="0 20px" pt="3"> 

        <Slider {...sliderSettings}>
          
        {experienceList.map((experienceList, index) => (
            <Box px={2}>
              <Card height="320px" variant="outline" borderColor={experienceList.present ? 'green' : 'gray'}>
                  <Flex direction="column" height="100%">
                    <Box>
                      <Tag variant='subtle' colorScheme='green' display={experienceList.present ? 'inline-flex' : 'none'}>
                          <TagLeftIcon boxSize='12px' as={MdCircle} />
                          <TagLabel>Now</TagLabel>
                      </Tag>
                      <CardHeader> 
                        <Heading paddingBottom={2}>{experienceList.jobTitle}</Heading>
                        <Text>{experienceList.companyName}</Text>
                        <Text color="gray">{experienceList.companyDepartment}</Text>
                      </CardHeader>
                    </Box>
                    <Box marginTop="auto"> 
                    <Text textAlign="left" paddingTop={2} paddingX="4" paddingBottom={2} color="gray">
                        {experienceList.timeline}
                    </Text>
                    </Box>
                  </Flex>
              </Card>
            </Box>
        ))}
        </Slider>
      </Box>
      </>
    );
  }
}