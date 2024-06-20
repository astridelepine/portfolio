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
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import {ArrowBackIcon} from '@chakra-ui/icons';
import ProjetCard from './ProjetCard';
import { Link } from 'react-router-dom';
import "../style.css";

const Rubrique = ({color, srcImage, title}) =>{
    return(
        <Flex alignItems={"center"} width={"100%"} justifyContent={"flex-start"} pl={50}>
          <Link to={"/"} >
              <Box  display={"flex"} alignItems={"center"} justifyContent={"center"} width={28} height={"fit-content"} pos={"relative"}>
                <Image src={srcImage} />
                <Flex pos={"absolute"} alignItems={"center"} pb={2}>
                  <ArrowBackIcon color="black"/>
                </Flex>
              </Box> 
          </Link>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"} textColor={color} >{title}</Text>
        </Flex>
    )

}

export default Rubrique
        