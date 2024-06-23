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
  Image
} from '@chakra-ui/react';
import Rubrique from './Rubrique';

import "../style.css";
const Passion = () => {
  return (
    
      <Box  textAlign="center" fontSize="xl" backgroundColor={"#1d1d1d"} width={"100%"} minHeight={"100vh"} pt={20}>
        <Rubrique srcImage={"/image/image-removebg-preview.png"} color={"#c5c9ff"} title={"MES PASSIONS"} />
        <Flex flexDir={"column"}>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"}>Mes activités</Text>
          <Flex flexDir={"column"} py={20} alignItems={"center"}>
            <Flex width={"60%"} pl={10}>
              <Image src='/image/escalade.png'></Image>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text fontSize={"2xl"}> L'escalade :</Text>
                <Text textAlign={"left"}> Je fais de l'escalade depuis 5 ans environ, c'est une de mes activités favorite et dont j'ai du mal à me passer. Je fais beaucoup de blocs, mais j'aime aussi faire des voies. Quand le temps s'y prête j'apprecie aller grimper en falaise.</Text>
              </Flex>
            </Flex>
            <Flex width={"60%"} pl={10}>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text fontSize={"2xl"}> Le volley :</Text>
                <Text textAlign={"left"}> Je fais du volley depuis deux ans </Text>
              </Flex>
              <Image width={52} src='/image/volley.png'></Image>
            </Flex>
            <Flex width={"60%"} pl={10}>
              <Image width={52} src='/image/abeille.png'></Image>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text fontSize={"2xl"}> L'escalade :</Text>
                <Text textAlign={"left"}> Je fais de l'escalade depuis 5 ans environ, c'est une de mes activités favorite et dont j'ai du mal à me passer. Je fais beaucoup de blocs, mais j'aime aussi faire des voies. Quand le temps s'y prête j'apprecie aller grimper en falaise.</Text>
              </Flex>
            </Flex>
            <Flex width={"60%"} pl={10}>
              <Flex flexDir={"column"} justifyContent={"center"} alignItems={"flex-start"} pl={10}>
                <Text fontSize={"2xl"}> L'escalade :</Text>
                <Text textAlign={"left"}> Je fais de l'escalade depuis 5 ans environ, c'est une de mes activités favorite et dont j'ai du mal à me passer. Je fais beaucoup de blocs, mais j'aime aussi faire des voies. Quand le temps s'y prête j'apprecie aller grimper en falaise.</Text>
              </Flex>
              <Image width={52} src='/image/musique.png'></Image>
            </Flex>
          </Flex>
        </Flex>
      </Box>
  );
}

export default Passion;