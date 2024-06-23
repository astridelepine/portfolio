import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "../style.css";
import Fleurs from './fleurs';

const HomePage = () => {
  return (
    
      <Box textAlign="center" fontSize="xl" backgroundColor={"#1d1d1d"} width={"100vw"}>
        <Grid minH="100vh" p={3} >
            <Flex fontFamily={"Playwrite"} justifyContent={"flex-end"} zIndex={20}>
              <Link to={"/projets"}>
                <Text pr={4} color={"white"} _hover={{color:"#f5ffc5", fontWeight:'bold'}}>projets</Text>
              </Link>
              <Link to={"/competences"}>
                <Text pr={4} color={"white"} _hover={{color:"#c7ffc5", fontWeight:'bold'}} >competences</Text>
              </Link>
              <Link to={"/passions"}>
                <Text pr={4} color={"white"} _hover={{color:"#c5c9ff", fontWeight:'bold'}} >passions</Text>
              </Link>
              <Link to={"/passions"}>
                <Text pr={4} color={"white"} _hover={{color:"#ffc5ec", fontWeight:'bold'}} >conatact</Text>
              </Link>
            </Flex>
            <Text fontSize={"6xl"} color={"white"} fontWeight={"bold"} fontFamily={"Playwrite"} width={500} ml={80} mt={200} className='slide'>Bienvenue sur mon Portfolio </Text>
            <Flex width={"100%"} justifyContent={"flex-end"} pr={200}>
              <Text color={"white"} width={400} textAlign={"left"} border={"dashed 2px"} height={"fit-content"} padding={"20px"} borderRadius={"10px"}>Saluuut, Je m'appelle Astrid et je suis étudiante en BUT informatique. Dans ce portfolio je vous fais part de mes projets et compétence informatique mais aussi de mes autres centres d'interêt !</Text>
            </Flex>
            <Box width={"100%"}>
              <Fleurs/>
            </Box>
        </Grid>
      </Box>
  );
}

export default HomePage;