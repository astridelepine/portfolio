import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
  InputLeftAddon,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import "../style.css";
import Rubrique from './Rubrique';
import CompetenceCard from './CompetenceCard';


const Competence = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    
      <Box textAlign="center" fontSize="xl" backgroundColor={"#1d1d1d"} textColor={"white"} width={"100%"} minHeight={"100vh"} pt={20}>
        <Rubrique title={"LES COMPÉTENCES"} color={"#c7ffc5"} srcImage={"/image/image-removebg-preview(2).png"}/>
        <Flex justifyContent={"center"} alignItems={"center"} py={10} flexDir={"column"} width={"100%"}>
          <Box  width={"60%"} px={20} >
            <Slider {...settings}>
              <CompetenceCard title={"C1 - Réaliser"} descComp={"Pour maitriser cette compétence, il faut être capable de développer un outil informatique qui répond à un besoin client et en choisissant les bonnes technologies. Cela passe par la conception du produit, le code, les tests, et le déploiement, mais auusi la maintenance de ce dernier. Cette compétence intègre aussi la qualité et la structure du code et des algorithmes, ainsi que la documentation."} op1={1} op2={1} op3={0.5} descNiv={"Je sais développer des applications accessibles, ergonomiques et robustes (à l'aide de tests) au vu des spécifications définies à partir du besoin du client. Je n'ai pas encore eu l'occasion de maintenir une application"} projets={"Foirauxhistoires, Pathfinder, Portfolio L'Annuaire"}/>
              <CompetenceCard title={"C2 - Optimiser"} descComp={"Cette compétence demande d'être capable de proposer la meilleure solution à un problème informatique en fonction de critères spécifiques (la taille, le choix du langage, le temps d'exécution). Ainsi, il est nécessaire d'analyser le problème et de proposer des méthodes de résolution, de savoir les comparer, et de sélectionner les structures de données et/ou algorithmes adéquats. Cependant, les solutions employées ne doivent pas faire gage de facilité : la sécurité des données et l'impact sociétal et environnemental associé restent primordiaux. La solution retenue doit être justifiée."} op1={1} op2={1} op3={0.5} descNiv={"Je sais sélectionner un algorithme adéquats pour répondre à un problème donné"} projets={"Pathfinder, Annuaire"}/>
              <CompetenceCard title={"C3 - Administrer"} descComp={"Être en capacité d'installer, de configurer et de déployer des services réseaux afin d'optimiser le système informatique de structures ou d'organisation. Ceci passe par la connaissance du fonctionnement des protocoles de base, mais aussi par une prise de recul sur les besoins du client pour estimer la taille du réseau à déployer, le choix des structures, ainsi que leur maintenabilité."} op1={1} op2={1} op3={0.5} descNiv={"Je suis en capacité de déployer des serveurs web Apache sous Linux, et de créer des liaisons TCP et UDP"} projets={"Foirauxhistoires, TP réseau"}/>
              <CompetenceCard title={"C4 - Gérer"} descComp={"Savoir analyser et exploiter les données d'une structure. Il est possible de les entretenir et de concevoir une base ou un agencement optimal comme il est possible de les analyser pour en tirer une conclusion, souvent stratégique. Assurer la sécurité, la cohérence et l'intégrité des données est indispensable."} op1={1} op2={0.5} op3={0.5} descNiv={"Je suis capable concevoir des bases de données relationnelles et non-relationnelles, mais également les interroger, et en tirer des données"} projets={"Foirauxhistoire, secretSanta,"}/>
              <CompetenceCard title={"C5 - Construire"} descComp={"Savoir utiliser les outils de gestion de projet informatique (méthodes classiques, agiles, tableaux de bord...) pour satisfaire au mieux les besoins des utilisateurs. Savoir adopter les bonnes démarches, une bonne politique de communication, et respecter les règles juridiques et éthique est crucial."} op1={1} op2={0.5} op3={0.5} descNiv={"Je sais appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs"} projets={"Foirauxhistoires, Pathfinder, Annuaire, StudioKebab"}/>
              <CompetenceCard title={"C6 - Collaborer"} descComp={"Apprendre à travailler de manière efficace dans une équipe informatique. À ces fins, la communication est un facteur clé. Les informations doivent être partagées et accessibles. Les projets lancés suivent les évolutions numériques et juridiques."} op1={1} op2={1} op3={0.5} descNiv={"Je sais situé mon role et mes mission au sein d'une équipe informatique. Je suis également capable de gérer une petite équipe sur un projet"} projets={"Foireauxhistoires"}/> 
            </Slider>
          </Box>
          <Flex py={20} flexDir={"column"}>
              <Text fontSize={"3xl"} fontFamily={"Playwrite"}>Les langages et frameworks que je maîtrise</Text>
              <Flex flexWrap={"wrap"} gap={10} width={"60%"} justifyContent={"center"} py={10} alignSelf={"center"}>
                <Image w={20} height={20} aspectRatio={"1/1"} src='/image/python.png'/>
                <Image w={20} height={20} src='/image/c.png'/>
                <Image w={20} height={20} src='/image/html.png'/>
                <Image w={20} height={20} src='/image/css.png'/> 
                <Image w={20} height={20} src='/image/js.png'/>
                <Image w={20} height={20} src='/image/php.png'/>
                <Image w={20} height={20} src='/image/java.webp'/>
                <Image w={32} height={20} src='/image/sql.png' />
                <Image w={20} height={20} src='/image/nextjs.png'/>
                <Image w={32} height={20} src='/image/svelte.png'/>
                <Image w={20} height={24} src='/image/symfony.png' />
                <Image  w={32} height={20} src='/image/fastapi.webp' />
              </Flex>
              <Text fontSize={"3xl"} fontFamily={"Playwrite"}>Les outils et logiciels que j'utilise</Text>
              <Flex flexWrap={"wrap"} gap={10} width={"60%"} justifyContent={"center"} py={10} alignSelf={"center"}>
                <Image w={32} height={20} src='/image/git.png' />
                <Image w={32} height={20} src='/image/docker.png' />
                <Image w={32} height={20} src='/image/sqldev.png' />
                <Image w={32} height={20} src='/image/powerbi.png' />
              </Flex>
          </Flex>
        </Flex>
      </Box>
  );
}

export default Competence;