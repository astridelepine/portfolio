import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
 Grid,
  theme,
  Flex,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import ProjetCard from './ProjetCard';
import "../style.css";

const Fleurs= () => {
  return (
      <Flex textAlign="center" fontSize="xl" pos={"absolute"} bottom={0} px={20} height={"100vh"} width={"100%"} zIndex={0} >
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} className='fleurs' mb={"60%"} sx={{animationDelay: "500ms"}} width={60} top={"10%"} height={"fit-content"} >
          <Image  src='/image/image-removebg-preview.png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={60} height={"fit-content"} className='fleurs' bottom={"10%"} left={"12%"} sx={{animationDelay: "1600ms"}}>
          <Image src='/image/image-removebg-preview(9).png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={60} height={"fit-content"} className='fleurs' bottom={"25%"} left={"30%"} sx={{animationDelay: "1100ms"}}>
          <Image src='/image/image-removebg-preview(2).png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={40} height={"fit-content"} className='fleurs' top={"30%"} right={"10%"} sx={{animationDelay: "2300ms"}}>
          <Image src='/image/image-removebg-preview(3).png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={40} height={"fit-content"}  className='fleurs' sx={{animationDelay: "2600ms"}} top={"10%"} right={"25%"} >
          <Image  src='/image/image-removebg-preview(4).png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={40} height={"fit-content"}  className='fleurs' bottom={"45%"} sx={{animationDelay: "1400ms"}} >
          <Image src='/image/image-removebg-preview(10).png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={40} height={"fit-content"} className='fleurs' top={"35%"}  right={"40%"} sx={{animationDelay: "1700ms"}}>
          <Image src='/image/image-removebg-preview(6).png'/>
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={32} height={"fit-content"} className='fleurs' top={"20%"} left={"30%"} sx={{animationDelay: "800ms"}}>
          <Image src='/image/image-removebg-preview(7).png'/>
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} className='fleurs' width={40} aspectRatio={"1/1"} objectFit={"cover"} right={"3%"} bottom={"3%"} sx={{animationDelay: "2s"}}>
          <Image src='/image/image-removebg-preview(8).png' />
        </Box>
        <Box pos={"absolute"} display={"flex"} alignItems={"center"} justifyContent={"center"} className='fleurs' width={32} aspectRatio={"1/1"} objectFit={"cover"} left={"50%"} bottom={"3%"} sx={{animationDelay: "2800ms"}}>
          <Image src='/image/fleur11.png' />
        </Box>
        
        
        
        
        
        
        
        
        
      </Flex>
  );
}

export default Fleurs;