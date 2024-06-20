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
  SimpleGrid,
} from '@chakra-ui/react';
import "../style.css";
import Rubrique from './Rubrique';
import CompetenceCard from './CompetenceCard';

const Competence= () => {
  return (
    
      <Box textAlign="center" fontSize="xl" backgroundColor={"black"} width={"100%"} minHeight={"100vh"} pt={20}>
        <Rubrique title={"LES COMPÉTENCES"} color={"#c7ffc5"} srcImage={"/image/image-removebg-preview(2).png"}/>
        <SimpleGrid columns={3} spacing={100} px={20} py={24}>
          <CompetenceCard title={"C1 - Réaliser"} descComp={"Pour maitriser cette compétence, il faut être capable de développer un outil informatique qui répond à un besoin client et en choisissant les bonnes technologies. Cela passe par la conception du produit, le code, les tests, et le déploiement, mais auusi la maintenance de ce dernier. Cette compétence intègre aussi la qualité et la structure du code et des algorithmes, ainsi que la documentation."} op1={1} op2={0.5} op3={0.5} descNiv={"vfusdgvbyufosdhgufos"}/>
          <CompetenceCard title={"C2 - Optimiser"} descComp={"vbhfkvhkfsdvbhsdfvbsdfk"} op1={1} op2={0.5} op3={0.5} descNiv={"vfusdgvbyufosdhgufos"}/>
          <CompetenceCard title={"C3 - Administrer"} descComp={"vbhfkvhkfsdvbhsdfvbsdfk"} op1={1} op2={0.5} op3={0.5} descNiv={"vfusdgvbyufosdhgufos"}/>
          <CompetenceCard title={"C4 - Gérer"} descComp={"vbhfkvhkfsdvbhsdfvbsdfk"} op1={1} op2={0.5} op3={0.5} descNiv={"vfusdgvbyufosdhgufos"}/>
          <CompetenceCard title={"C5 - Construire"} descComp={"vbhfkvhkfsdvbhsdfvbsdfk"} op1={1} op2={0.5} op3={0.5} descNiv={"vfusdgvbyufosdhgufos"}/>
          <CompetenceCard title={"C6 - Collaborer"} descComp={"vbhfkvhkfsdvbhsdfvbsdfk"} op1={1} op2={0.5} op3={0.5} descNiv={"vfusdgvbyufosdhgufos"}/>
        </SimpleGrid>
      </Box>
  );
}

export default Competence;