import Image from 'next/image'
import styles from './page.module.css'
import { Wrap, WrapItem, HStack, Text, Center, Square, Circle, AbsoluteCenter, Divider, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, SimpleGrid, Grid, GridItem, Container, Flex, Spacer } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
    
      <Breadcrumb spacing='100px' separator= ' ' fontWeight='medium' fontSize='large'>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Brian Manomaisupat</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Experience</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <SimpleGrid minChildWidth='1400px' spacing='4px'>
      <Text fontSize='50px'>You need a [     ]</Text>
      <Text fontSize='50px'>I make it happen</Text>
      <Box bg='black' height='80px'></Box>
      <Text fontSize='20px'>Pinned Projects</Text>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>
        <Box bg='white' height='80px'></Box>
        <Box bg='black' height='50px'></Box>
        <Wrap>
          <WrapItem>
            <Text fontSize='20px'>Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc  </Text>
          </WrapItem>
        </Wrap>
      </SimpleGrid>

      <Wrap>
        <WrapItem>
          <Center w='1800px' h='80px' bg='red.200'>
          <Text fontSize='50px'>Stuff we know Stuff we know Stuff we know Stuff we know </Text>
          </Center>
        </WrapItem>
      </Wrap>
    </main>
  )
}
