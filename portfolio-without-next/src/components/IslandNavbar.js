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
import "./IslandNavbar.css"
const IslandNavbar = () => {

    const mobileNav = useBreakpointValue({ base: true, md: false });
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className='menu'>
        <Box
        as="button"  
        fontWeight="bold" 
        fontSize="15px" 
        variant="link"
        onClick={scrollToTop}
        >
            ṇ
        </Box>
        <div>
            <Link href = "https://www.facebook.com/marketplace/item/708959441330993/?ref=browse_tab&referral_code=marketplace_top_picks&referral_story_type=top_picks" isExternal>
                <Button variant="link" >Resume</Button>
            </Link>
            <Button
                variant="link"
                pl="4"
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
                pl="4"
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
            pl="4"
            display={{ base: "none", sm: "block" }}
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
        </div>
      </div>
    );
  };
  
  export default IslandNavbar;
  