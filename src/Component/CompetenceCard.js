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
  Image,
  Flex,
  Divider
} from '@chakra-ui/react';
import "../style.css";
import Rubrique from './Rubrique';

const CompetenceCard= ({title, descComp, op1, op2, op3, descNiv, projets}) => {
  return (
    
      <Flex textAlign="center" backgroundColor={"#3a3a3a"} p={5} flexDir={"column"} justifyContent={"center"} borderRadius={10} borderColor={'#838383'} opacity={1} borderWidth={2} cursor={"pointer"} mx={10} >
        <Text fontSize={"3xl"}  pb={5} fontFamily={"Playwrite"}>{title}</Text>
        <Text fontSize={"md"}>{descComp}</Text>
        <Box py={5}>
          <Divider orientation='horizontal' colorScheme='#1C3A48' opacity={"1"} />
        </Box>
        <Text > Mon niveau :</Text>
        <Flex justifyContent={"space-between"} px={56} py={5}>
            <Image src={"/image/fleur11.png"} width={"30%"} opacity={op1} />
            <Image src={"/image/fleur11.png"} width={"30%"} opacity={op2}/>
            <Image src={"/image/fleur11.png"} width={"30%"} opacity={op3}/>
        </Flex>
        <Text fontSize={"md"}>{descNiv}</Text>
        <Box py={5}>
          <Divider orientation='horizontal' colorScheme='#1C3A48' opacity={"1"} />
        </Box>
        <Text> Les projets associés : </Text>
        <Text fontSize={"md"}>{projets}</Text>
      </Flex>
  );
}

export default CompetenceCard;