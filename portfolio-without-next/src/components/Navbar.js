import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Button,
  useBreakpointValue,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react';

import { experienceID } from './Experience';


const Navbar = () => {

  const mobileNav = useBreakpointValue({ base: true, md: false });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      width="100%"
      padding="2"
      position="fixed"
      bg="white"
      zIndex={9}
    >
      <Box 
        as="button"  
        fontWeight="bold" 
        fontSize="20px" 
        paddingY="3" 
        paddingX="9"
        variant="link"
        onClick={scrollToTop}
      >
        ṇ
      </Box>

      {mobileNav ? (
        <Menu>
          <MenuButton as={Button} variant="link" size="lg">
            ☰
          </MenuButton>
          <MenuList>
            <Link href = "https://www.facebook.com/marketplace/item/708959441330993/?ref=browse_tab&referral_code=marketplace_top_picks&referral_story_type=top_picks" isExternal>
              <MenuItem variant="link">Resume</MenuItem>
            </Link>
            <MenuItem 
                onClick={() => {
                    const experienceSection = document.getElementById('experience');

                    if (experienceSection) {
                      experienceSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}variant="link">
                Experience
            </MenuItem>
            <MenuItem 
                onClick={() => {
                  const experienceSection = document.getElementById('projects');

                  if (experienceSection) {
                    experienceSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}variant="link">
              Projects
            </MenuItem>
            <MenuItem 
                onClick={() => {
                  const experienceSection = document.getElementById('contact');

                  if (experienceSection) {
                    experienceSection.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                }}variant="link">
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <HStack spacing="20" flexWrap="wrap">
          <Spacer />
          <Link href = "https://www.facebook.com/marketplace/item/708959441330993/?ref=browse_tab&referral_code=marketplace_top_picks&referral_story_type=top_picks" isExternal>
          <Button variant="link" >Resume</Button>
          </Link>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('experience');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Experience
          </Button>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('projects');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Projects
          </Button>
          <Button
            variant="link"
            onClick={() => {
              const experienceSection = document.getElementById('contact');

              if (experienceSection) {
                experienceSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
          >
            Contact
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default Navbar;
