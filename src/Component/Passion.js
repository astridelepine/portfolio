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
  Flex,
  Image,
} from "@chakra-ui/react";
import Rubrique from "./Rubrique";

import "../style.css";
const Passion = () => {
  return (
    <Box
      textColor={"black"}
      textAlign="center"
      fontSize="xl"
      backgroundColor={"#FFFFF0"}
      width={"100%"}
      minHeight={"100vh"}
      pt={20}
    >
      <Rubrique
        srcImage={"/image/image-removebg-preview.png"}
        color={"#BD33A4"}
        title={"MES PASSIONS"}
      />
      <Flex flexDir={"column"}>
        <Text fontSize={"3xl"} fontFamily={"Playwrite"}>
          Mes activités
        </Text>
        <Flex flexDir={"column"} py={20} alignItems={"center"}>
          <Flex width={"60%"} pl={10}>
            <Image src="/image/escalade.png"></Image>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text fontSize={"2xl"}> L'escalade :</Text>
              <Text textAlign={"left"}>
                {" "}
                Je fais de l'escalade depuis 5 ans environ, c'est une de mes
                activités favorite et dont j'ai du mal à me passer. Je fais
                beaucoup de blocs, mais j'aime aussi faire des voies. Quand le
                temps s'y prête j'apprecie aller grimper en falaise.
              </Text>
            </Flex>
          </Flex>
          <Flex width={"60%"} pl={10}>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text fontSize={"2xl"}> Le volley :</Text>
              <Text textAlign={"left"}>
                {" "}
                Je fais du volley depuis deux ans à l'université. J'ai même pu
                paticiper aux championats IUT de France et c'était vraiment une
                superbe experience !{" "}
              </Text>
            </Flex>
            <Image width={52} src="/image/volley.png"></Image>
          </Flex>
          <Flex width={"60%"} pl={10}>
            <Image width={52} src="/image/abeille.png"></Image>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text fontSize={"2xl"}> L'apiculture :</Text>
              <Text textAlign={"left"}>
                {" "}
                Je fais de l'appiculture depuis longtemps grace à mes parents
                eux-même appiculteurs. La periode où je pratique le plus c'est
                lété au moments des récolte et de l'extraction du miel. C'est un
                domaine passionnant dans lequel on apprend notamment à être
                patient et la maîtrise de soi.
              </Text>
            </Flex>
          </Flex>
          <Flex width={"60%"} pl={10}>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text fontSize={"2xl"}> La musique :</Text>
              <Text textAlign={"left"}>
                {" "}
                J'ai fait du violon et du piano pendant plusieurs années, quand
                j'étais plus jeune. Je suis en train de reprendre le piano et
                j'aimerais recommencer le violon quand j'aurai fini mes études.
              </Text>
            </Flex>
            <Image width={52} src="/image/musique.png"></Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={"column"}>
        <Text fontSize={"3xl"} fontFamily={"Playwrite"}>
          Mes centres d'interêts
        </Text>
        <Flex flexDir={"column"} py={20} alignItems={"center"}>
          <Flex width={"60%"} pl={10}>
            <Image width={52} src="/image/biologie.png"></Image>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text fontSize={"2xl"}> La biologie</Text>
            </Flex>
          </Flex>
          <Flex width={"60%"} pl={10} justifyContent={"flex-end"}>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              pl={10}
            >
              <Text fontSize={"2xl"}> La cybersécurité </Text>
            </Flex>
            <Image width={52} src="/image/cyber.png"></Image>
          </Flex>
          <Flex width={"60%"} pl={10}>
            <Image width={52} src="/image/ia.png"></Image>
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              pl={10}
            >
              <Text fontSize={"2xl"}> L'IA</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Passion;
