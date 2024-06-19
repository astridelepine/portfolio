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

const Projet= () => {
  return (
    
      <Box textAlign="center" fontSize="xl" backgroundColor={"black"} width={"100%"} minHeight={"100vh"} pt={20}>
        <Flex alignItems={"center"} width={"100%"} justifyContent={"flex-start"}>
          <Box  display={"flex"} alignItems={"center"} justifyContent={"center"} width={32} height={"fit-content"}>
            <Image src='/image/image-removebg-preview(4).png' />
          </Box>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"} textColor={"#f5ffc5"} >MES PROJETS</Text>
        </Flex>
          <Flex width={"100%"} justifyContent={"center"}>
            <SimpleGrid  columns={[3]} spacing={20} width={"80%"} px={20} pt={24}>
              <ProjetCard nom={"Foirauxhistoires"} desc={"Création d'histoires de manière collaborative."} techno={"JS, HTML, CSS, FastAPI, SQLite"} image={"/image/foireauxhistoires.png"}/>
              <ProjetCard nom={"Noël surprise"} desc={"Application de Secret Santa."} techno={"Svelte, FastAPI, SQLite"} image={"/image/secretSanta.png"}/>
              <ProjetCard nom={"Mr.Météo"} desc={"Bot discord qui donne la météo"} techno={"Python"} image={"/image/MrMeteo.png"}/>
              <ProjetCard nom={"SAE Graphe"} desc={"Application d'analyse de graphes."} techno={"Java"} image={"/image/graphe.png"}/>
              <ProjetCard nom={"SAE de C"} desc={"Gestionnaire d'annuaire"} techno={"C"} image={"/image/annuaire.png"}/>
            </SimpleGrid>
          </Flex>
      </Box>
  );
}

export default Projet;