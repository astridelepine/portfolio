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
import Rubrique from './Rubrique';

const Projet= () => {
  return (
    
      <Box textAlign="center" fontSize="xl" backgroundColor={"black"} width={"100%"} minHeight={"100vh"} pt={20}>
        <Rubrique srcImage={'/image/image-removebg-preview(4).png'} title={"MES PROJETS"} color={"#f5ffc5"}/>
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