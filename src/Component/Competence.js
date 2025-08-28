import React from "react";
import Slider from "react-slick";
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
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "../style.css";
import Rubrique from "./Rubrique";
import CompetenceCard from "./CompetenceCard";

const Competence = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      backgroundColor={"#FFFFF0"}
      textColor={"black"}
      width={"100%"}
      minHeight={"100vh"}
      pt={20}
    >
      <Rubrique
        title={"LES COMPÉTENCES"}
        color={"#1FA055"}
        srcImage={"/image/image-removebg-preview(2).png"}
      />
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        py={10}
        flexDir={"column"}
        width={"100%"}
      >
        <Flex flexDir={"column"} py={20} alignItems={"center"}>
          <Flex width={"80%"} pl={10}>
            <Image width={72} src="/image/Platine.png"></Image>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text textAlign="justify">
                {" "}
                Dans le cadre de la SAÉ Développement avancé, les étudiants en
                troisième année de BUT Informatique (parcours Réalisation
                d’Applications) ont pour objectif de produire une application de
                grande envergure, répondant à des besoins spécifiques et
                prédéfinis.
              </Text>
              <Text textAlign="justify">
                Dans notre cas, ces besoins concernaient la création d’un ERP*
                destiné à centraliser l’ensemble des services administratifs du
                département informatique de l’IUT (emplois du temps, notes,
                ressources humaines et académiques, stages et alternances…) et
                de créer des liens simples et efficaces entre ces applications
                pour en faciliter l’utilisation et la communication.
              </Text>
              <Text textAlign="justify">
                {" "}
                L’ERP finalisé doit ainsi permettre à ses utilisateurs de perdre
                moins de temps en termes de gestion afin de gagner en
                productivité mais également en rapidité, notamment en ce qui
                concerne le traitement de demandes telles que la signature d’un
                contrat ou le déplacement d’un cours.
              </Text>
              <Text textAlign="justify">
                La réalisation de ce projetm'a permis de progresser de manière
                significative dans les compétences que vous trouverez
                ci-dessous.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Box width={"60%"} px={20}>
          <Slider {...settings} className="slider-noir">
            <CompetenceCard
              titreN1={"Développer des applications informatiques simples"}
              titreN2={"Partir des exigences et aller jusqu’à une application complète"}
              titreN3={"Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)"}
              niveau1l1={"Implémenter des conceptions simples"}
              niveau1l2={"Élaborer des conceptions simples"}   
              niveau1l3={"Faire des essais et évaluer leurs résultats en regard des spécifications"}
              niveau1l4={"Développer des interfaces utilisateurs"}
              niveau2l1={"Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences."}
              niveau2l2={"Appliquer des principes d’accessibilité et d’ergonomie"}
              niveau2l3={"Adopter de bonnes pratiques de conception et de programmation."} 
              niveau2l4={"Vérifier et valider la qualité de l’application par les tests"}
              niveau3l1={"Choisir et implémenter les architectures adaptées."}
              niveau3l2={"Élaborer des conceptions simples."}
              niveau3l3={"Faire évoluer une application existante"}
              niveau3l4={"Intégrer des solutions dans un environnement de production"}
              title={"C1 - Réaliser"}
              descComp={
                "Pour maitriser cette compétence, il faut être capable de développer un outil informatique qui répond à un besoin client et en choisissant les bonnes technologies. Cela passe par la conception du produit, le code, les tests, et le déploiement, mais auusi la maintenance de ce dernier. Cette compétence intègre aussi la qualité et la structure du code et des algorithmes, ainsi que la documentation."
              }
              op1={1}
              op2={1}
              op3={1}
              descNiv={
                "Je sais développer des applications accessibles, ergonomiques et robustes (à l'aide de tests) au vu des spécifications définies à partir du besoin du client. J'ai également maintenu une application existante à travers la SAE du S6."
              }
              projets={"Foirauxhistoires, Pathfinder, Portfolio L'Annuaire, SAE RAMSES12"}
            />
            <CompetenceCard
              titreN1={"Appréhender et construire des algorithmes"}
              titreN2={"Sélectionner les algorithmes adéquats pour répondre à un problème donné"}
              titreN3={"Analyser et optimiser des applications"}
              niveau1l1={"Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)"}
              niveau1l2={"Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)"}   
              niveau1l3={"Formaliser et mettre en œuvre des outils mathématiques pour l’informatique"}
              niveau1l4={""}
              niveau2l1={"Choisir des structures de données complexes adaptées au problème"}
              niveau2l2={"Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...)"}
              niveau2l3={"Comprendre les enjeux et moyens de sécurisation des données et du code"} 
              niveau2l4={"Évaluer l’impact environnemental et sociétal des solutions proposées"}
              niveau3l1={"Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire, montée en charge...)"}
              niveau3l2={"Profiler, analyser et justifier le comportement d’un code existant"}
              niveau3l3={"Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)"}
              niveau3l4={""}
              title={"C2 - Optimiser"}
              descComp={
                "Cette compétence demande d'être capable de proposer la meilleure solution à un problème informatique en fonction de critères spécifiques (la taille, le choix du langage, le temps d'exécution). Ainsi, il est nécessaire d'analyser le problème et de proposer des méthodes de résolution, de savoir les comparer, et de sélectionner les structures de données et/ou algorithmes adéquats. Cependant, les solutions employées ne doivent pas faire gage de facilité : la sécurité des données et l'impact sociétal et environnemental associé restent primordiaux. La solution retenue doit être justifiée."
              }
              op1={1}
              op2={1}
              op3={1}
              descNiv={
                "Je sais sélectionner un algorithme et strucure de données adéquat pour répondre à un problème donné, tout en respectant le langage imposé et en optimisant les ressources et le temps de calucl. "
              }
              projets={"Pathfinder, Annuaire, SAE Platine"}
            />
            <CompetenceCard
              titreN1={"Installer et configurer un poste de travail"}
              titreN2={"Déployer des services dans une architecture réseau "}
              titreN3={""}
              niveau1l1={"Identifier les différents composants (matériels et logiciels) d’un système numérique"}
              niveau1l2={"Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs"}   
              niveau1l3={"Installer et configurer un système d’exploitation et des outils de développement"}
              niveau1l4={"Configurer un poste de travail dans un réseau d’entreprise"}
              niveau2l1={"Concevoir et développer des applications communicantes"}
              niveau2l2={"Utiliser des serveurs et des services réseaux virtualisés"}
              niveau2l3={"Sécuriser les services et données d’un système"} 
              niveau2l4={""}
              niveau3l1={""}
              niveau3l2={""}
              niveau3l3={""}
              niveau3l4={""}
              title={"C3 - Administrer"}
              descComp={
                "Être en capacité d'installer, de configurer et de déployer des services réseaux afin d'optimiser le système informatique de structures ou d'organisation. Ceci passe par la connaissance du fonctionnement des protocoles de base, mais aussi par une prise de recul sur les besoins du client pour estimer la taille du réseau à déployer, le choix des structures, ainsi que leur maintenabilité."
              }
              op1={1}
              op2={0.5}
              op3={0.5}

              descNiv={
                "Je suis en capacité de déployer des serveurs web Apache sous Linux, et de créer des liaisons TCP et UDP"
              }
              projets={"Foirauxhistoires, TP réseau"}
            />
            <CompetenceCard
              titreN1={"Concevoir et mettre en place une base de données à partir d’un cahier des charges client"}
              titreN2={"Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité "}
              titreN3={""}
              niveau1l1={"Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)"}
              niveau1l2={"Visualiser des données"}   
              niveau1l3={"Concevoir une base de données relationnelle à partir d’un cahier des charges"}
              niveau1l4={""}
              niveau2l1={"Optimiser les modèles de données de l’entreprise"}
              niveau2l2={"Assurer la sécurité des données (intégrité et confidentialité)"}
              niveau2l3={"Organiser la restitution de données à travers la programmation et la visualisation"} 
              niveau2l4={"Manipuler des données hétérogènes"}
              niveau3l1={""}
              niveau3l2={""}
              niveau3l3={""}
              niveau3l4={""}
              title={"C4 - Gérer"}
              descComp={
                "Savoir analyser et exploiter les données d'une structure. Il est possible de les entretenir et de concevoir une base ou un agencement optimal comme il est possible de les analyser pour en tirer une conclusion, souvent stratégique. Assurer la sécurité, la cohérence et l'intégrité des données est indispensable."
              }
              op1={1}
              op2={1}
              op3={0.5}
              descNiv={
                "Je suis capable concevoir et de maintenir des bases de données relationnelles et non-relationnelles, mais également les interroger, et en tirer des données. Je suis aussi en mesure d'assurer sécurité, la cohérence et l'intégrité d'une BD et de choisir le type de BD adapté au besoin."
              }
              projets={"Foirauxhistoire, secretSanta, SAE Platine"}
            />
            <CompetenceCard
              titreN1={"Identifier les besoins métiers des clients et des utilisateurs"}
              titreN2={"Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs "}
              titreN3={""}
              niveau1l1={"Appréhender les besoins du client et de l'utilisateur"}
              niveau1l2={"Mettre en place les outils de gestion de projet"}   
              niveau1l3={"Identifier les acteurs et les différentes phases d’un cycle de développement"}
              niveau1l4={""}
              niveau2l1={"Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information"}
              niveau2l2={"Formaliser les besoins du client et de l'utilisateur"}
              niveau2l3={"Identifier les critères de faisabilité d’un projet informatique"} 
              niveau2l4={"Définir et mettre en œuvre une démarche de suivi de projet"}
              niveau3l1={""}
              niveau3l2={""}
              niveau3l3={""}
              niveau3l4={""}
              title={"C5 - Conduire"}
              descComp={
                "Savoir utiliser les outils de gestion de projet informatique (méthodes classiques, agiles, tableaux de bord...) pour satisfaire au mieux les besoins des utilisateurs. Savoir adopter les bonnes démarches, une bonne politique de communication, et respecter les règles juridiques et éthique est crucial."
              }
              op1={1}
              op2={0.5}
              op3={0.5}
              descNiv={
                "Je sais appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs"
              }
              projets={
                "Foirauxhistoires, Pathfinder, Annuaire, StudioKebab, Platine"
              }
            />
            <CompetenceCard
              titreN1={"Identifier ses aptitudes pour travailler dans une équipe"}
              titreN2={"Situer son rôle et ses missions au sein d’une équipe informatique"}
              titreN3={"Manager une équipe informatique"}
              niveau1l1={"Appréhender l’écosystème numérique"}
              niveau1l2={"Découvrir les aptitudes requises selon les différents secteurs informatiques"}   
              niveau1l3={"Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire"}
              niveau1l4={"Acquérir les compétences interpersonnelles pour travailler en équipe"}
              niveau2l1={"Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI,...)"}
              niveau2l2={"Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation"}
              niveau2l3={"Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique"} 
              niveau2l4={"Rendre compte de son activité professionnelle"}
              niveau3l1={"Organiser et partager une veille technologique et informationnelle"}
              niveau3l2={"Identifier les enjeux de l’économie de l’innovation numérique"}
              niveau3l3={"Guider la conduite du changement informatique au sein d’une organisation"}
              niveau3l4={"Accompagner le management de projet informatique"}
              title={"C6 - Collaborer"}
              descComp={
                "Apprendre à travailler de manière efficace dans une équipe informatique. À ces fins, la communication est un facteur clé. Les informations doivent être partagées et accessibles. Les projets lancés suivent les évolutions numériques et juridiques."
              }
              op1={1}
              op2={1}
              op3={1}
              descNiv={
                "Je sais situé mon role et mes missions au sein d'une équipe informatique. Je suis également capable de gérer une petite équipe sur un projet. Partager mes connaissances et les informations au sein d'une équipe, et communiquer efficacement."
              }
              projets={"Foireauxhistoires, Platine, CodeName"}
            />
          </Slider>
        </Box>
        <Flex py={20} flexDir={"column"}>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"}>
            Les langages et frameworks que je maîtrise
          </Text>
          <Flex
            flexWrap={"wrap"}
            gap={10}
            width={"60%"}
            justifyContent={"center"}
            py={10}
            alignSelf={"center"}
          >
            <Image
              w={20}
              height={20}
              aspectRatio={"1/1"}
              src="/image/python.png"
            />
            <Image w={20} height={20} src="/image/c.png" />
            <Image w={20} height={20} src="/image/html.png" />
            <Image w={20} height={20} src="/image/css.png" />
            <Image w={20} height={20} src="/image/js.png" />
            <Image w={20} height={20} src="/image/php.png" />
            <Image w={20} height={20} src="/image/java.webp" />
            <Image w={32} height={20} src="/image/sql.png" />
            <Image w={20} height={20} src="/image/nextjs.png" />
            <Image w={32} height={20} src="/image/svelte.png" />
            <Image w={20} height={24} src="/image/symfony.png" />
            <Image w={32} height={20} src="/image/fastapi.webp" />
          </Flex>
          <Text fontSize={"3xl"} fontFamily={"Playwrite"}>
            Les outils et logiciels que j'utilise
          </Text>
          <Flex
            flexWrap={"wrap"}
            gap={10}
            width={"60%"}
            justifyContent={"center"}
            py={10}
            alignSelf={"center"}
          >
            <Image w={32} height={20} src="/image/git.png" />
            <Image w={32} height={20} src="/image/docker.png" />
            <Image w={32} height={20} src="/image/sqldev.png" />
            <Image w={32} height={20} src="/image/powerbi.png" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Competence;
