import React from "react";

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
  Divider,
} from "@chakra-ui/react";
import "../style.css";
import Rubrique from "./Rubrique";

const CompetenceCard = ({
  title,
  descComp,
  titreN1,
  titreN2,
  titreN3,
  niveau1l1,
  niveau1l2,
  niveau1l3,
  niveau1l4,
  niveau2l1,
  niveau2l2,
  niveau2l3,
  niveau2l4,
  niveau3l1,
  niveau3l2,
  niveau3l3,
  niveau3l4,
  op1,
  op2,
  op3,
  descNiv,
  projets,
}) => {
  return (
    <Box>
      <Flex justifyContent="center" gap={4} mb={4}>
        <Box
          px={3}
          py={2}
          minW="260px"
          maxW="260px"
          minH="120px"
          bg="#e6f7ff"
          color="#0077b6"
          borderRadius="xl"
          fontSize="sm"
          fontWeight="bold"
          textAlign="left"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Text fontWeight="bold" mb={1}>Niveau 1 : {titreN1}</Text>
          <ul style={{ paddingLeft: "18px", margin: 0 }}>
            <li>{niveau1l1}</li>
            <li>{niveau1l2}</li>
            <li>{niveau1l3}</li>
            <li>{niveau1l4}</li>
          </ul>
        </Box>
        <Box
          px={3}
          py={2}
          minW="260px"
          maxW="260px"
          minH="120px"
          bg="#baffc9"
          color="#007f5f"
          borderRadius="xl"
          fontSize="sm"
          fontWeight="bold"
          textAlign="left"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Text fontWeight="bold" mb={1}>Niveau 2 : {titreN2}</Text>
          <ul style={{ paddingLeft: "18px", margin: 0 }}>
            <li>{niveau2l1}</li>
            <li>{niveau2l2}</li>
            <li>{niveau2l3}</li>
            <li>{niveau2l4}</li>
          </ul>
        </Box>
        <Box
          px={3}
          py={2}
          minW="260px"
          maxW="260px"
          minH="120px"
          bg="#ffd6e0"
          color="#c9184a"
          borderRadius="xl"
          fontSize="sm"
          fontWeight="bold"
          textAlign="left"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Text fontWeight="bold" mb={1}>Niveau 3 : {titreN3}</Text>
          <ul style={{ paddingLeft: "18px", margin: 0 }}>
            <li>{niveau3l1}</li>
            <li>{niveau3l2}</li>
            <li>{niveau3l3}</li>
            <li>{niveau3l4}</li>
          </ul>
        </Box>
      </Flex>
      <Flex
        textAlign="center"
        backgroundColor={"#FFFFF0"}
        p={5}
        flexDir={"column"}
        justifyContent={"center"}
        borderRadius={10}
        borderColor={"#838383"}
        opacity={1}
        borderWidth={2}
        cursor={"pointer"}
        mx={10}
      >
        <Text fontSize={"3xl"} pb={5} fontFamily={"Playwrite"}>
          {title}
        </Text>
        <Text fontSize={"md"}>{descComp}</Text>
        <Box py={5}>
          <Divider orientation="horizontal" colorScheme="#111111" opacity={"1"} />
        </Box>
        <Text> Mon niveau :</Text>
        <Flex justifyContent={"space-between"} px={56} py={5}>
          <Image src={"/image/fleur11.png"} width={"30%"} opacity={op1} />
          <Image src={"/image/fleur11.png"} width={"30%"} opacity={op2} />
          <Image src={"/image/fleur11.png"} width={"30%"} opacity={op3} />
        </Flex>
        <Text fontSize={"md"}>{descNiv}</Text>
        <Box py={5}>
          <Divider orientation="horizontal" colorScheme="#111111" opacity={"1"} />
        </Box>
        <Text> Les projets associés : </Text>
        <Text fontSize={"md"}>{projets}</Text>
      </Flex>
    </Box>
  );
};

export default CompetenceCard;
